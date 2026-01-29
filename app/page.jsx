const FORM_ACTION_URL = "https://script.google.com/macros/s/AKfycbwoQETmXzQsBnpjHcMZsFYF33eTch-EkCSm8lyraLXbRZOpmboquu2u47ACgKKJVDKw/exec"; // <-- your Google Apps Script Web App URL

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function SoftCard({ children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
      {children}
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <details className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <summary className="cursor-pointer list-none text-white font-semibold">
        {q}
        <span className="float-right text-white/70 group-open:rotate-180 transition-transform">⌄</span>
      </summary>
      <p className="mt-3 text-sm text-white/75">{a}</p>
    </details>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* Premium background */}
      <div className="fixed inset-0 -z-10 bg-[#07090f]" />
      <div className="fixed inset-0 -z-10 opacity-60 bg-[radial-gradient(1000px_500px_at_20%_10%,rgba(255,210,138,0.22),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(163,230,255,0.14),transparent_55%),radial-gradient(1200px_800px_at_50%_100%,rgba(255,255,255,0.07),transparent_60%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07090f]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-sm">
              <span className="text-sm font-bold tracking-tight">CI</span>
            </span>
            <span className="text-lg font-bold tracking-tight">ClearInk</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
            <a className="hover:text-white" href="#how">How it works</a>
            <a className="hover:text-white" href="#results">What to expect</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
            <a className="hover:text-white" href="#providers">Providers</a>
          </nav>

          <a
            href="#get-matched"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_-12px_rgba(255,255,255,0.8)] hover:opacity-90 transition"
          >
            Get matched
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="px-6 pt-16 pb-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <Pill>Denver laser tattoo removal</Pill>
              <Pill>No photo required</Pill>
              <Pill>Private matching</Pill>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              A premium way to start tattoo removal in Denver.
            </h1>
            <p className="mt-4 text-lg text-white/75 max-w-xl">
              ClearInk matches you with trusted local providers — fast.
              Share your tattoo details, get contacted, and compare options without the spam.
            </p>

            {/* Bold lead-gen cues */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-matched"
                className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-white to-[#ffd79a] px-6 py-3 text-sm font-extrabold text-black shadow-[0_18px_55px_-18px_rgba(255,215,154,0.9)] hover:opacity-95 transition"
              >
                Get matched (60 seconds)
              </a>
              <a
                href="#how"
                className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                See how it works
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/70">
              <span>✓ Limited sharing to local providers</span>
              <span>✓ Secure & private</span>
              <span>✓ Designed for mobile</span>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur">
              <span className="font-semibold text-white">Tip:</span> Leads convert best when clinics can text you.
              Phone is optional — but recommended.
            </div>
          </div>

          {/* Form */}
          <div id="get-matched" className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Get matched with Denver providers</h2>
                <p className="mt-1 text-sm text-white/70">
                  We share your request with a limited number of local providers.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/75">
                <div className="font-semibold text-white">Spots today</div>
                <div>Limited intake</div>
              </div>
            </div>

            <form action={FORM_ACTION_URL} method="POST" className="mt-5 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional, helps providers reach you faster)"
                className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP code"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
                  required
                />
                <select
                  name="start"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">When do you want to start?</option>
                  <option className="text-black">ASAP</option>
                  <option className="text-black">1–3 months</option>
                  <option className="text-black">Just researching</option>
                </select>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <select
                  name="size"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">Tattoo size</option>
                  <option className="text-black">Small</option>
                  <option className="text-black">Medium</option>
                  <option className="text-black">Large</option>
                </select>

                <select
                  name="color"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">Tattoo color</option>
                  <option className="text-black">Mostly black</option>
                  <option className="text-black">Some color</option>
                  <option className="text-black">Heavy color</option>
                </select>

                <select
                  name="age"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">Tattoo age</option>
                  <option className="text-black">Less than 1 year</option>
                  <option className="text-black">1–3 years</option>
                  <option className="text-black">3–7 years</option>
                  <option className="text-black">7+ years</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-white to-[#ffd79a] py-3 font-extrabold text-black shadow-[0_18px_55px_-18px_rgba(255,215,154,0.95)] hover:opacity-95 transition"
              >
                Get matched now
              </button>

              <div className="text-xs text-white/65">
                By submitting, you agree to be contacted about your request.{" "}
                <span className="text-white font-semibold">We don’t sell your information.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social-proof style band */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-white/80">
              <span className="font-semibold text-white">Clear, private matching</span> — designed to reduce spam and speed up scheduling.
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-white/80">Limited provider sharing</span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-white/80">No photo required</span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-white/80">Fast response</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Simple, premium, and designed to get you to the right clinic quickly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Feature
              title="1) Submit details"
              desc="Share your tattoo size, color, age, timeline, and ZIP. (No photo required.)"
            />
            <Feature
              title="2) Local matching"
              desc="We route your request to a limited number of Denver-area providers."
            />
            <Feature
              title="3) Compare & choose"
              desc="Providers reach out with next steps so you can pick what fits."
            />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section id="results" className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          <SoftCard>
            <h3 className="text-xl font-bold">What to expect</h3>
            <p className="mt-2 text-sm text-white/75">
              Tattoo removal varies, but the right clinic will walk you through sessions, pricing, and aftercare.
              Your answers help them respond faster and more accurately.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>✓ Tattoo age + ink color affect session estimates</li>
              <li>✓ Your timeline helps clinics prioritize scheduling</li>
              <li>✓ ZIP code helps match you locally</li>
            </ul>
          </SoftCard>

          <SoftCard>
            <h3 className="text-xl font-bold">Why ClearInk converts</h3>
            <p className="mt-2 text-sm text-white/75">
              This is built like a lead funnel — premium feel, minimal friction, and high-intent fields.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>✓ Strong CTA + “60 seconds” expectation</li>
              <li>✓ Privacy reassurance to reduce drop-off</li>
              <li>✓ Limited sharing to reduce fear of spam</li>
            </ul>
          </SoftCard>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Short answers to common questions.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FAQ
              q="Do I need to upload a photo?"
              a="No. ClearInk works without photos for privacy and speed. A provider may request a photo later if needed."
            />
            <FAQ
              q="Will I get spammed?"
              a="We limit sharing to a small number of local Denver providers. You can ignore any outreach you don’t want."
            />
            <FAQ
              q="How quickly will clinics contact me?"
              a="Often within 24 hours, depending on provider availability and your details."
            />
            <FAQ
              q="Is ClearInk a clinic?"
              a="No. ClearInk matches you with providers. Your clinic will handle medical guidance, sessions, and pricing."
            />
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#get-matched"
              className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-white to-[#ffd79a] px-6 py-3 text-sm font-extrabold text-black shadow-[0_18px_55px_-18px_rgba(255,215,154,0.95)] hover:opacity-95 transition"
            >
              Get matched now
            </a>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section id="providers" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">For tattoo removal providers</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              High-intent local leads. Limited competition per request. Built to book.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Feature title="Pay per lead" desc="Simple economics. Start without a complex onboarding." />
            <Feature title="Qualified details" desc="Color + age + size + timeline help your team prioritize." />
            <Feature title="Limited share" desc="Each request goes to a small number of providers — not everyone." />
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <h3 className="text-xl font-bold">Want early access?</h3>
            <p className="mt-2 text-sm text-white/75">
              Email us to join the Denver provider network.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:smilafsky@gmail.com?subject=ClearInk%20Provider%20Partnership"
                className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-black hover:opacity-90 transition"
              >
                Email ClearInk
              </a>
              <a
                href="#get-matched"
                className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View consumer flow
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-bold tracking-tight">ClearInk</div>
            <div className="text-sm text-white/70">Denver tattoo removal matching</div>
          </div>
          <div className="text-sm text-white/70">
            Contact:{" "}
            <a className="underline hover:text-white" href="mailto:smilafsky@gmail.com">
              smilafsky@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
