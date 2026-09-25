export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Dashboard</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Your plant dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Saved plants</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">18</h3>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Garden collection</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">7</h3>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Reminders</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">4</h3>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Favorite plants</h2>
          <ul className="mt-5 space-y-3">
            <li className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">Neem • Watering due in 2 days</li>
            <li className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">Aloe Vera • Healthy growth</li>
            <li className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">Tulsi • Fertilizer due this week</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Plant notes</h2>
          <ul className="mt-5 space-y-3">
            <li className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">Planting date: 12 July 2026</li>
            <li className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">Watering date: 18 Sep 2026</li>
            <li className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">Plant health: Good, slight yellowing on older leaves</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
