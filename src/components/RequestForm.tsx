"use client";

import { useActionState } from "react";
import { submitRequest, type RequestState } from "@/app/actions";

const initialState: RequestState = { status: "idle", message: "" };

const services = [
  "Plumbing",
  "Electrical",
  "Furniture assembly",
  "Appliance repair",
  "Painting & walls",
  "Other",
];

const field =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15";

export function RequestForm() {
  const [state, formAction, pending] = useActionState(submitRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-10 text-center shadow-xl shadow-stone-900/10">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
          ✓
        </div>
        <h3 className="text-xl font-semibold text-stone-900">Request received</h3>
        <p className="text-stone-600" aria-live="polite">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl shadow-stone-900/10 sm:p-8"
      noValidate
    >
      <div>
        <h3 className="text-xl font-semibold text-stone-900">Book a technician</h3>
        <p className="mt-1 text-sm text-stone-500">We call back within 15 minutes, 8am – 10pm.</p>
      </div>

      {/* Honeypot field, hidden from people */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
        Your name
        <input name="name" placeholder="Alex Johnson" className={field} required />
        {state.errors?.name && <span className="text-xs text-red-600">{state.errors.name}</span>}
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
        Phone
        <input name="phone" type="tel" placeholder="+1 555 123 4567" className={field} required />
        {state.errors?.phone && <span className="text-xs text-red-600">{state.errors.phone}</span>}
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
        What needs fixing?
        <select name="service" defaultValue="" className={field} required>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        {state.errors?.service && <span className="text-xs text-red-600">{state.errors.service}</span>}
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
        <span>
          Details <span className="font-normal text-stone-400">(optional)</span>
        </span>
        <textarea
          name="details"
          rows={3}
          maxLength={1000}
          placeholder="Leaking kitchen faucet, need it fixed today"
          className={`${field} resize-none`}
        />
      </label>

      {state.status === "error" && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" aria-live="polite">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Get a call back"}
      </button>
      <p className="text-center text-xs text-stone-400">No spam. We only use your number to confirm the visit.</p>
    </form>
  );
}
