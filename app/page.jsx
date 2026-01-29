const FORM_ACTION_URL = "https://script.google.com/macros/s/AKfycbxcRCxWc-w_rVAFpBM-M5lpxjvs15ffKRy0jO--nEJHN1YcgbRuO2UkQiWAxApL7POT/exec"; // <-- paste your Google Apps Script Web App URL

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-3 text-lg text-gray-600 max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
      {children}
    </span>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-2xl border bg-white p-5 shadow-sm">
      <summary className="cursor-pointer list-none font-semibold">
        <span className="mr-2 inline-block rounded-full border px-2 py-0.5 text-xs text-gray-600">FAQ</span>
        {q}
        <span className="float-right text-gray-500 group-open:rotate-180 transition-transform">⌄</span>
      </summary>
      <p className="mt-3 text-gray-600">{a}</p>
    </details>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-bold tracking-tight text-xl">ClearInk</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a className="hover:text-black" href="#how">How it works</a>
            <a className="hover:text-black" href="#why">Why ClearInk</a>
            <a className="hover:text-black" href="#faq">FAQ</a>
            <a className="hover:text-black" href="#providers">For providers</a>
          </nav>
          <a
            href="#get-matched"
            className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white"
          >
            Get matched
          </a>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="px-6 pt-14 pb-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>Denver tattoo removal</Badge>
              <Badge>Fast matching</Badge>
              <Badge>Private & secure</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Tattoo removal in Denver — made simple.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Tell us about your tattoo and we’ll route your request to trusted local tattoo removal providers.
              Get contacted quickly and compare your options.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-matched"
                className="inline-flex justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                Get matched now
              </a>
              <a
                href="#how"
                className="inline-flex justify-center rounded-xl border px-5 py-3 text-sm font-semibold"
              >
                See how it works
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              ✅ No photos required • ✅ Takes under 60 seconds • ✅ We never sell your information
            </p>
          </div>

          {/* Form Card */}
          <div id="get-matched" className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Get matched with Denver providers</h2>
            <p className="mt-2 text-sm text-gray-600">
              Share a few details — we’ll send your request to a limited number of local providers.
            </p>

            <form className="mt-5 space-y-3" action={FORM_ACTION_URL} method="POST">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="w-full rounded-xl border p-3"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-xl border p-3"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional, helps providers reach you faster)"
                className="w-full rounded-xl border p-3"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP code"
                  className="w-full rounded-xl border p-3"
                  required
                />
                <select name="start" className="w-full rounded-xl border p-3" required>
                  <option value="">When do you want to start?</option>
                  <option>ASAP</option>
                  <option>1–3 months</option>
                  <option>Just researching</option>
                </select>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <select name="size" className="w-full rounded-xl border p-3" required>
                  <option value="">Tattoo size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
                <select name="color" className="w-full rounded-xl border p-3" required>
                  <option value="">Tattoo color</option>
                  <option>Mostly black</option>
                  <option>Some color</option>
                  <option>Heavy color</option>
                </select>
                <select name="age" className="w-full rounded-xl border p-3" required>
                  <option value="">Tattoo age</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>3–7 years</option>
                  <option>7+ years</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-black py-3 font-semibold text-white"
              >
                Get matched
              </button>

              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted by ClearInk and local providers about your request.
                We don’t sell your information.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* How it works */}
      <Section
        id="how"
        title="How ClearInk works"
        subtitle="A simple process designed to help you compare your options quickly."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="1) Share tattoo details"
            desc="Size, color, age, and your timeline — no photo required."
          />
          <Card
            title="2) We match you locally"
            desc="We route your request to a limited number of Denver-area providers."
          />
          <Card
            title="3) Compare and choose"
            desc="Providers reach out with next steps so you can pick what fits."
          />
        </div>
      </Section>

      {/* Why ClearInk */}
      <Section
        id="why"
        title="Why people use ClearInk"
        subtitle="Built for privacy, speed, and better outcomes — without the spam."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold">Privacy-first lead matching</h3>
            <p className="mt-2 text-gray-600">
              We collect only what providers need to help you. No photo upload required.
              Your request is shared with a limited number of local providers.
            </p>
            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✅ Limited sharing (keeps it from becoming spammy)</li>
              <li>✅ Clear expectations up front</li>
              <li>✅ Designed for mobile</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold">Better provider conversations</h3>
            <p className="mt-2 text-gray-600">
              Tattoo age + color + size help clinics estimate complexity, sessions, and next steps quickly.
            </p>
            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✅ More informed outreach from clinics</li>
              <li>✅ Faster scheduling</li>
              <li>✅ Less back-and-forth</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SEO / Local keywords section */}
      <Section
        id="denver"
        title="Looking for tattoo removal in Denver?"
        subtitle="ClearInk helps you connect with Denver-area tattoo removal providers — fast."
      >
        <div className="rounded-3xl border bg-white p-7 shadow-sm">
          <p className="text-gray-700">
            If you’re researching laser tattoo removal in Denver, ClearInk makes it easy to take the next step.
            Submit your details and local providers can contact you about scheduling, pricing, and what to expect.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-matched"
              className="inline-flex justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Get matched
            </a>
            <a
              href="#faq"
              className="inline-flex justify-center rounded-xl border px-5 py-3 text-sm font-semibold"
            >
              Read FAQs
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        title="Frequently asked questions"
        subtitle="Quick answers for people exploring tattoo removal."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FAQItem
            q="Do I have to upload a photo?"
            a="No. ClearInk works without photos to keep it simple and privacy-friendly. Providers can request a photo later if needed."
          />
          <FAQItem
            q="How fast will someone contact me?"
            a="Often within 24 hours. Timing depends on provider availability and your details."
          />
          <FAQItem
            q="Will I get spammed?"
            a="We limit sharing to a small number of Denver providers. You can also ignore any outreach you don’t want."
          />
          <FAQItem
            q="Does ClearInk provide medical advice?"
            a="No. ClearInk connects you with providers. Your clinic will advise you on sessions, pricing, and suitability."
          />
        </div>
      </Section>

      {/* Providers */}
      <Section
        id="providers"
        title="ClearInk for tattoo removal providers"
        subtitle="Get high-intent local leads from people actively seeking tattoo removal in Denver."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Pay per lead"
            desc="No monthly subscription required to start. Simple, transparent lead pricing."
          />
          <Card
            title="Better qualification"
            desc="Age, color, size, timeline, and ZIP help your team prioritize the best opportunities."
          />
          <Card
            title="Limited competition"
            desc="Each request is shared with a limited number of providers — no mass blasting."
          />
        </div>

        <div className="mt-8 rounded-3xl border bg-gray-50 p-7">
          <h3 className="text-xl font-bold">Want early access?</h3>
          <p className="mt-2 text-gray-600">
            If you’re a Denver tattoo removal provider and want leads, email us and we’ll onboard you.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:smilafsky@gmail.com?subject=ClearInk%20Provider%20Partnership"
              className="inline-flex justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Email ClearInk
            </a>
            <a
              href="#get-matched"
              className="inline-flex justify-center rounded-xl border px-5 py-3 text-sm font-semibold"
            >
              View consumer flow
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <div className="font-bold text-lg">ClearInk</div>
            <div className="text-sm text-gray-600 mt-1">Denver tattoo removal matching</div>
          </div>
          <div className="text-sm text-gray-600">
            Contact:{" "}
            <a className="underline" href="mailto:smilafsky@gmail.com">
              smilafsky@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
