const FORM_ACTION_URL = "https://script.google.com/macros/s/AKfycbxcRCxWc-w_rVAFpBM-M5lpxjvs15ffKRy0jO--nEJHN1YcgbRuO2UkQiWAxApL7POT/exec";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">ClearInk</h1>
          <a
            href="#form"
            className="bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >
            Get Matched
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Tattoo Removal in Denver — <span className="text-gray-500">Made Simple</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              ClearInk connects you with trusted Denver tattoo removal providers.
              Share a few details and get contacted quickly.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#form"
                className="bg-black text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition"
              >
                Get Matched
              </a>

              <a
                href="#how"
                className="border px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
              >
                How It Works
              </a>
            </div>

            <div className="mt-6 flex gap-4 text-sm text-gray-500">
              <span>✓ No photo required</span>
              <span>✓ Secure & private</span>
              <span>✓ 60-second form</span>
            </div>
          </div>

          {/* Form Card */}
          <div
            id="form"
            className="bg-white rounded-3xl shadow-2xl border p-8"
          >
            <h3 className="text-xl font-bold mb-4">
              Get matched with local providers
            </h3>

            <form action={FORM_ACTION_URL} method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full border rounded-xl p-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border rounded-xl p-3"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                className="w-full border rounded-xl p-3"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP code"
                className="w-full border rounded-xl p-3"
                required
              />

              <div className="grid grid-cols-3 gap-3">
                <select name="size" className="border rounded-xl p-3" required>
                  <option value="">Size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>

                <select name="color" className="border rounded-xl p-3" required>
                  <option value="">Color</option>
                  <option>Mostly black</option>
                  <option>Some color</option>
                  <option>Heavy color</option>
                </select>

                <select name="age" className="border rounded-xl p-3" required>
                  <option value="">Age</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>3–7 years</option>
                  <option>7+ years</option>
                </select>
              </div>

              <select name="start" className="w-full border rounded-xl p-3" required>
                <option value="">When do you want to start?</option>
                <option>ASAP</option>
                <option>1–3 months</option>
                <option>Just researching</option>
              </select>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
              >
                Get Matched
              </button>

              <p className="text-xs text-gray-500">
                We never sell your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">How ClearInk Works</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
              <h4 className="font-bold mb-2">1. Submit Details</h4>
              <p className="text-gray-600">
                Tell us about your tattoo. No photos required.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
              <h4 className="font-bold mb-2">2. We Match You</h4>
              <p className="text-gray-600">
                Your request is sent to trusted Denver providers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
              <h4 className="font-bold mb-2">3. Compare & Choose</h4>
              <p className="text-gray-600">
                Get contacted and decide what works best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ClearInk · Denver Tattoo Removal Matching
      </footer>
    </main>
  );
}
