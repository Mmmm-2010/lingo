import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">
          Lingo<span className="text-blue-400">.</span>
        </h1>

        <div className="flex items-center gap-8">
          <a
            href="#features"
            className="text-slate-300 hover:text-white"
          >
            Features
          </a>

          <a
            href="#"
            className="text-slate-300 hover:text-white"
          >
            Login
          </a>

          <Link
            href="/onboarding"
            className="rounded-full bg-white px-5 py-2.5 font-medium text-slate-950 hover:bg-slate-200"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-24 text-center">

        <div className="mb-6 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
          ✨ English learning, personalized for you
        </div>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          English that
          <span className="text-blue-400"> adapts to you.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Learn English through real-life situations, personalized practice
          and smart feedback.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/onboarding"
            className="rounded-full bg-blue-500 px-7 py-3.5 font-semibold hover:bg-blue-400"
          >
            Start Learning →
          </Link>

          <a
            href="#features"
            className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-300 hover:bg-slate-900"
          >
            Explore Features
          </a>
        </div>

        {/* Preview Card */}
        <div className="mt-20 w-full max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">

          <div className="mb-6 flex items-center justify-between">
            <div className="text-left">
              <p className="text-sm text-slate-400">
                Your progress
              </p>

              <h3 className="text-2xl font-bold">
                Keep going 🔥
              </h3>
            </div>

            <div className="rounded-full bg-slate-800 px-4 py-2 text-sm">
              7 day streak
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-800 p-5 text-left">
              <p className="text-sm text-slate-400">
                Vocabulary
              </p>

              <p className="mt-2 text-3xl font-bold">
                127
              </p>

              <p className="mt-1 text-sm text-green-400">
                +12 this week
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-5 text-left">
              <p className="text-sm text-slate-400">
                Accuracy
              </p>

              <p className="mt-2 text-3xl font-bold">
                86%
              </p>

              <p className="mt-1 text-sm text-blue-400">
                Great progress
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-5 text-left">
              <p className="text-sm text-slate-400">
                Study time
              </p>

              <p className="mt-2 text-3xl font-bold">
                4.2h
              </p>

              <p className="mt-1 text-sm text-purple-400">
                This week
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-6 py-24"
      ><div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Why Lingo?
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Learn English your way.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <Feature
            icon="🎭"
            title="Real-life Practice"
            description="Practice English through realistic conversations and everyday situations."
          />

          <Feature
            icon="🎯"
            title="Personalized Learning"
            description="Learn at your own level with lessons adapted to your goals."
          />

          <Feature
            icon="⚡"
            title="Smart Feedback"
            description="Get instant feedback and discover exactly where you can improve."
          />

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-blue-500 px-8 py-16 text-center">

          <h2 className="text-4xl font-bold">
            Ready to improve your English?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Start practicing today and make English a part of your everyday
            life.
          </p>

          <Link
            href="/onboarding"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Start Learning →
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 py-8 text-center text-sm text-slate-500">
        © 2026 Lingo. Learn English, your way.
      </footer>

    </main>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-slate-600">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>

    </div>
  );
}