export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Tattoo Removal, Made Simple
        </h1>
        <p className="text-lg mb-8">
          ClearInk connects you with trusted tattoo removal providers in Denver.
        </p>

        <form
          className="max-w-md mx-auto space-y-4"
          action="https://script.google.com/macros/s/AKfycbytGUccgf9qxgnVr-4ZEpdbkbQS7fex3cKsBd5-_3T18S9cGZfr_h0CSIbiC8YjtRMy/exec"
          method="POST"
        >
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            className="w-full border rounded p-3"
            required
          />
          <select name="size" className="w-full border rounded p-3" required>
            <option value="">Tattoo size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
          <select name="color" className="w-full border rounded p-3" required>
            <option value="">Tattoo color</option>
            <option>Mostly black</option>
            <option>Some color</option>
            <option>Heavy color</option>
          </select>
          <select name="age" className="w-full border rounded p-3" required>
            <option value="">How old is your tattoo?</option>
            <option>Less than 1 year</option>
            <option>1–3 years</option>
            <option>3–7 years</option>
            <option>7+ years</option>
          </select>
          <select name="start" className="w-full border rounded p-3" required>
            <option value="">When do you want to start?</option>
            <option>ASAP</option>
            <option>1–3 months</option>
            <option>Just researching</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded font-semibold"
          >
            Get Matched
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-2">
          We never sell your information. Only local Denver providers receive your request.
        </p>
      </section>

      <section className="px-6 py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Are You a Tattoo Removal Provider?
        </h2>
        <p className="mb-6">
          ClearInk sends you high-intent local leads actively looking for removal.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded font-semibold">
          Partner With ClearInk
        </button>
      </section>
    </main>
  );
}
