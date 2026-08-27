import Link from "next/link";

function StatCard({ title, value, subtitle }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}

function Day({ active }) {
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
        active
          ? "bg-blue-500 text-white"
          : "bg-slate-800 text-slate-600"
      }`}
    >
      {active || "·"}
    </div>
  );
}

function LearningCard({
  icon,
  title,
  description,
  href,
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-900/80"
    >
      <div className="text-4xl transition group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>

      <p className="mt-6 text-sm font-semibold text-blue-400">
        Start learning →
      </p>
    </Link>
  );
}

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              Lingo<span className="text-blue-400">.</span>
            </Link>

            <p className="mt-2 text-slate-400">
              Welcome back! Keep learning every day.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-900"
          >
            Log out
          </Link>

        </header>

        {/* Welcome */}
        <section className="mt-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Your learning dashboard
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Keep going, learner! 🔥
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Build your English skills through short, practical lessons.
          </p>

        </section>

        {/* Stats */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">

          <StatCard
            title="Current streak"
            value="7 days 🔥"
            subtitle="Keep it going!"
          />

          <StatCard
            title="Vocabulary"
            value="127"
            subtitle="+12 this week"
          />

          <StatCard
            title="Accuracy"
            value="86%"
            subtitle="Great progress!"
          />

        </section>

        {/* Streak */}
        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-7">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm text-slate-500">
                Weekly streak
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                7 day streak 🔥
              </h2>
            </div>

            <div className="flex gap-2">

              <Day active="M" />
              <Day active="T" />
              <Day active="W" />
              <Day active="T" />
              <Day active="F" />
              <Day active="S" />
              <Day active="S" />

            </div>

          </div>

        </section>

        {/* Learning */}
        <section className="mt-12">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Practice
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Choose your lesson
            </h2>

            <p className="mt-3 text-slate-400">
              Practice different English skills at your own pace.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <LearningCard
              icon="🎧"
              title="Listening"
              description="Improve your listening skills with real-life conversations and questions."
              href="/listening"
            />

            <LearningCard
              icon="📚"
              title="Reading"
              description="Read practical English texts and test your understanding."
              href="/reading"
            />

            <LearningCard
              icon="🗣️"
              title="Speaking"
              description="Practice useful English phrases for everyday situations."
              href="/practice"
            />

          </div>

        </section>

      </div>
    </main>
  );
}
