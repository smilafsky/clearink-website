const FORM_ACTION_URL = "PASTE_YOUR_WEB_APP_URL_HERE"; // <-- your Google Apps Script Web App URL

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

/**
 * Inline “luxury” hero image (SVG) so you don’t need to host anything.
 * Looks premium, loads instantly, works on all devices.
 */
function HeroArt() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.85)]">
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(800px_500px_at_10%_20%,rgba(255,215,154,0.35),transparent_55%),radial-gradient(700px_450px_at_80%_30%,rgba(163,230,255,0.22),transparent_55%),radial-gradient(900px_700px_at_50%_100%,rgba(255,255,255,0.08),transparent_60%)]" />
      <svg
        viewBox="0 0 1200 800"
        className="relative block h-[280px] w-full md:h-[420px]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(255,215,154,0.55)" />
            <stop offset="1" stopColor="rgba(163,230,255,0.35)" />
          </linearGradient>
          <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="1" stopColor="rgba(255,215,154,0.08)" />
          </linearGradient>
          <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        <rect width="1200" height="800" fill="transparent" />

        {/* abstract “ink swirl” ribbons */}
        <path
          d="M50 520 C 260 300, 430 700, 650 460 C 860 230, 980 520, 1150 360"
          stroke="url(#g1)"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
          filter="url(#blur)"
        />
        <path
          d="M80 610 C 320 430, 460 790, 720 560 C 930 370, 1000 650, 1150 500"
          stroke="url(#g2)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
          filter="url(#blur)"
        />

        {/* soft glow orbs */}
        <circle cx="280" cy="250" r="120" fill="rgba(255,215,154,0.20)" filter="url(#blur)" />
        <circle cx="900" cy="220" r="140" fill="rgba(163,230,255,0.18)" filter="url(#blur)" />
        <circle cx="640" cy="650" r="170" fill="rgba(255,255,255,0.08)" filter="url(#blur)" />
      </svg>

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/35 px-4 py-2 text-xs text-white/80 backdrop-blur">
          <span className="font-semibold text-white">Premium matching</span>
          <span className="text-white/40">•</span>
          <span>No photo required</span>
          <span className="text-white/40">•</span>
          <span>Limited provider sharing</span>
        </div>
      </div>
    </div>
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
            <a className="hover:text-white" href="#results">Results</a>
            <a className="hover:text-white" href="#aftercare">Aftercare</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#denver">Denver</a>
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
              Premium med-spa feel. Aggressive lead-gen performance.
            </h1>
            <p className="mt-4 text-lg text-white/75 max-w-xl">
              ClearInk matches you with trusted Denver providers — fast.
              Share your tattoo details, get contacted, and compare options without the spam.
            </p>

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
              <span className="font-semibold text-white">Pro tip:</span> Leads convert best when clinics can text you.
              Phone is optional — but recommended.
            </div>
          </div>

          {/* HERO IMAGE (added) */}
          <HeroArt />
        </div>

        {/* Form (kept below hero for bold lead-gen) */}
        <div className="mx-auto mt-10 max-w-6xl">
          <div
            id="get-matched"
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)] backdrop-blur"
          >
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
              <div className="grid gap-3 md:grid-cols-3">
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
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#ffd79a]/40"
                />
              </div>

              <div className="grid gap-3 md:grid-cols-3">
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
              </div>

              <div className="grid gap-3 md:grid-cols-2">
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

      {/* RESULTS (added) */}
      <section id="results" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Results: what affects tattoo removal?</h2>
            <p className="mt-3 text-white/70 max-w-3xl">
              Providers typically estimate the number of sessions based on ink color, tattoo age, size, placement, and your skin.
              Your answers help clinics respond faster and more accurately.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <SoftCard>
              <h3 className="text-lg font-bold">Ink color</h3>
              <p className="mt-2 text-sm text-white/75">
                Black often responds more predictably. Certain colors can take more sessions.
              </p>
            </SoftCard>
            <SoftCard>
              <h3 className="text-lg font-bold">Tattoo age</h3>
              <p className="mt-2 text-sm text-white/75">
                Older tattoos may fade differently depending on ink depth and prior touch-ups.
              </p>
            </SoftCard>
            <SoftCard>
              <h3 className="text-lg font-bold">Size & placement</h3>
              <p className="mt-2 text-sm text-white/75">
                Larger pieces and some body areas can require more time and sessions.
              </p>
            </SoftCard>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#get-matched"
              className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-white to-[#ffd79a] px-6 py-3 text-sm font-extrabold text-black shadow-[0_18px_55px_-18px_rgba(255,215,154,0.95)] hover:opacity-95 transition"
            >
              Get matched for a consult
            </a>
          </div>
        </div>
      </section>

      {/* AFTERCARE (added) */}
      <section id="aftercare" className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          <SoftCard>
            <h2 className="text-2xl font-bold tracking-tight">Aftercare (clinic will guide you)</h2>
            <p className="mt-3 text-sm text-white/75">
              Aftercare varies by provider and device. Your clinic will provide specific instructions, but most focus on
              protecting the area, reducing irritation, and avoiding sun exposure.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>✓ Keep the area clean and follow clinic instructions</li>
              <li>✓ Avoid sun exposure and tanning on treated areas</li>
              <li>✓ Don’t pick at scabs or irritation</li>
              <li>✓ Ask about timing between sessions</li>
            </ul>
            <p className="mt-4 text-xs text-white/60">
              Note: This is not medical advice — your provider will advise you based on your skin and treatment plan.
            </p>
          </SoftCard>

          <SoftCard>
            <h2 className="text-2xl font-bold tracking-tight">What ClearInk sends providers</h2>
            <p className="mt-3 text-sm text-white/75">
              We keep it lightweight and privacy-forward — enough to respond quickly without requiring a photo upfront.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>✓ ZIP + timeline to prioritize scheduling</li>
              <li>✓ Tattoo size, color, and age for complexity estimate</li>
              <li>✓ Your contact info so they can reach you</li>
            </ul>
          </SoftCard>
        </div>
      </section>

      {/* PRICING RANGE (added) */}
      <section id="pricing" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Pricing range in Denver: what to expect</h2>
            <p className="mt-3 text-white/70 max-w-3xl">
              Pricing varies by clinic, device, and tattoo complexity. Many providers price per session, and total cost depends on
              how many sessions you need. ClearInk helps you compare options quickly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Feature
              title="Small tattoos"
              desc="Often priced per session. Clinics may offer package pricing depending on sessions needed."
            />
            <Feature
              title="Medium tattoos"
              desc="More time per session and more sessions can increase overall cost."
            />
            <Feature
              title="Large / complex tattoos"
              desc="Typically the biggest driver of cost due to time and number of sessions."
            />
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <h3 className="text-xl font-bold">Get a real estimate from providers</h3>
            <p className="mt-2 text-sm text-white/75">
              Submit your details and compare next steps and pricing with Denver-area clinics.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-matched"
                className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-white to-[#ffd79a] px-6 py-3 text-sm font-extrabold text-black hover:opacity-95 transition"
              >
                Get matched
              </a>
              <a
                href="#results"
                className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                What affects cost?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DENVER NEIGHBORHOODS (added) */}
      <section id="denver" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Serving Denver neighborhoods</h2>
            <p className="mt-3 text-white/70 max-w-3xl">
              ClearInk matches people across the Denver metro with local tattoo removal providers.
              If you’re searching “tattoo removal near me” in any of these areas, you’re in the right place.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "LoDo",
              "RiNo",
              "Capitol Hill",
              "Cherry Creek",
              "Highlands",
              "Wash Park",
              "Baker",
              "Five Points",
              "Stapleton / Central Park",
              "Lakewood",
              "Aurora",
              "Englewood",
            ].map((n) => (
              <div
                key={n}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur"
              >
                {n}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#get-matched"
              className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-white to-[#ffd79a] px-6 py-3 text-sm font-extrabold text-black shadow-[0_18px_55px_-18px_rgba(255,215,154,0.95)] hover:opacity-95 transition"
            >
              Get matched in Denver
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Short answers to common questions.</p>
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
              a="No. ClearInk matches you with providers. Your clinic handles medical guidance, sessions, and pricing."
            />
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
            <Feature title="Pay per lead" desc="Simple economics. Start without complex onboarding." />
            <Feature title="Qualified details" desc="Color + age + size + timeline help prioritize." />
            <Feature title="Limited share" desc="Each request goes to a small number of providers." />
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
