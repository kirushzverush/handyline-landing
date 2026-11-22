import { RequestForm } from "@/components/RequestForm";

const services = [
  { icon: "🚰", title: "Plumbing", text: "Leaks, clogs, faucets, toilets and water heaters.", price: "from $59" },
  { icon: "💡", title: "Electrical", text: "Outlets, switches, lighting and fixture installs.", price: "from $69" },
  { icon: "🪑", title: "Furniture assembly", text: "IKEA and flat-pack furniture, wall mounting, shelves.", price: "from $45" },
  { icon: "🧺", title: "Appliance repair", text: "Washers, dryers, dishwashers and fridges.", price: "from $79" },
  { icon: "🎨", title: "Painting & walls", text: "Drywall patches, touch-ups and full room painting.", price: "from $99" },
  { icon: "🔧", title: "Small jobs", text: "A list of small fixes? We handle them in one visit.", price: "from $49/hr" },
];

const steps = [
  { n: "01", title: "Leave a request", text: "Tell us what's broken. It takes 30 seconds." },
  { n: "02", title: "Get a fixed quote", text: "We call back in 15 minutes with a price. No surprises." },
  { n: "03", title: "Relax, it's fixed", text: "A vetted pro arrives on time and cleans up after." },
];

const reviews = [
  { name: "Sarah M.", text: "Booked at 9am, faucet fixed by lunch. The price was exactly what they quoted.", job: "Plumbing" },
  { name: "Daniel K.", text: "Assembled a whole bedroom set in two hours. Tidy, fast and friendly.", job: "Furniture assembly" },
  { name: "Priya R.", text: "Finally someone who shows up on time. Our go-to for every small repair now.", job: "Electrical" },
];

const faqs = [
  { q: "How fast can you come?", a: "Same-day visits are available for most requests booked before 2pm." },
  { q: "Do I pay before the job?", a: "No. You pay only after the work is done and you're happy with it." },
  { q: "Is the work guaranteed?", a: "Yes. Every repair comes with a 12-month warranty on labor." },
  { q: "Do you bring materials?", a: "Our technicians carry common parts. Special parts are quoted upfront." },
];

export default function Home() {
  return (
    <div className="bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-500 text-white">H</span>
            Handyline
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-stone-600 md:flex">
            <a href="#services" className="hover:text-stone-900">Services</a>
            <a href="#how" className="hover:text-stone-900">How it works</a>
            <a href="#reviews" className="hover:text-stone-900">Reviews</a>
            <a href="#faq" className="hover:text-stone-900">FAQ</a>
          </nav>
          <a
            href="#book"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Book now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="book" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-orange-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-semibold text-orange-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              12 technicians available today
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Home repairs, <span className="text-orange-500">done today.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-stone-600">
              Vetted local handymen for plumbing, electrical, assembly and everything in between.
              Fixed prices, on-time arrival and a 12-month warranty.
            </p>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[
                ["4.9★", "average rating"],
                ["15 min", "call-back time"],
                ["8,000+", "jobs completed"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-bold">{value}</dt>
                  <dd className="text-sm text-stone-500">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <RequestForm />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">One call for every fix</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{s.text}</p>
              <p className="mt-4 text-sm font-semibold text-orange-600">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-stone-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">How it works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Fixed in three steps</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-4xl font-extrabold text-orange-400">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-stone-300">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Reviews</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Neighbors love us</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6">
              <div className="text-orange-400">★★★★★</div>
              <blockquote className="mt-3 flex-1 text-stone-700">“{r.text}”</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-stone-400"> · {r.job}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Questions & answers</h2>
        <div className="mt-10 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {f.q}
                <span className="ml-4 text-xl text-orange-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-stone-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-orange-500 p-10 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Something broken right now?</h2>
            <p className="mt-2 text-orange-100">Book in 30 seconds. Most jobs are done the same day.</p>
          </div>
          <a
            href="#book"
            className="rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            Book a technician
          </a>
        </div>
      </section>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
        © 2026 Handyline · Demo project with a fictional brand, built with Next.js, Tailwind CSS and the Telegram Bot API.
      </footer>
    </div>
  );
}
