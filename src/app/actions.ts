"use server";

export type RequestState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "phone" | "service", string>>;
};

const SERVICES = [
  "Plumbing",
  "Electrical",
  "Furniture assembly",
  "Appliance repair",
  "Painting & walls",
  "Other",
];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function submitRequest(
  _prev: RequestState,
  formData: FormData,
): Promise<RequestState> {
  // Honeypot: real users never fill this hidden field.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Thanks! We'll call you back shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim().slice(0, 1000);

  const errors: RequestState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (!SERVICES.includes(service)) errors.service = "Please choose a service.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Without credentials the demo still works: it just logs the request on the server.
  if (!token || !chatId) {
    console.log("[demo] New request:", { name, phone, service, details });
    return {
      status: "success",
      message: "Thanks! Your request is in. A technician will call you within 15 minutes.",
    };
  }

  const text = [
    "🛠 <b>New repair request</b>",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Phone:</b> ${escapeHtml(phone)}`,
    `<b>Service:</b> ${escapeHtml(service)}`,
    details ? `<b>Details:</b> ${escapeHtml(details)}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    if (!res.ok) throw new Error(`Telegram responded ${res.status}`);
  } catch (err) {
    console.error("Failed to send request to Telegram:", err);
    return {
      status: "error",
      message: "Something went wrong. Please call us instead: +1 (555) 010-2030.",
    };
  }

  return {
    status: "success",
    message: "Thanks! Your request is in. A technician will call you within 15 minutes.",
  };
}
