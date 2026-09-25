export default function PlantMapPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Plant Map</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Native and habitat distribution of plants</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Filters</h2>
          <div className="mt-5 space-y-5">
            <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-800">
              <option>Country: India</option>
              <option>Brazil</option>
              <option>USA</option>
              <option>Australia</option>
            </select>
            <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-800">
              <option>Climate zone: Tropical</option>
              <option>Temperate</option>
              <option>Dry</option>
            </select>
            <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-800">
              <option>Category: Trees</option>
              <option>Medicinal Plants</option>
              <option>Flowers</option>
              <option>Indoor Plants</option>
            </select>
          </div>
        </aside>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <div className="relative h-[620px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_50%),linear-gradient(135deg,#ecfdf5,#f3f4f6,#fef3c7)] dark:border-slate-700 dark:bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_45%),linear-gradient(135deg,#0f172a,#111827,#1f2937)]">
            <div className="absolute left-[10%] top-[20%] h-4 w-4 rounded-full bg-emerald-600 shadow-[0_0_0_10px_rgba(16,185,129,0.15)]" />
            <div className="absolute left-[22%] top-[32%] h-4 w-4 rounded-full bg-emerald-600 shadow-[0_0_0_10px_rgba(16,185,129,0.15)]" />
            <div className="absolute left-[38%] top-[25%] h-4 w-4 rounded-full bg-emerald-600 shadow-[0_0_0_10px_rgba(16,185,129,0.15)]" />
            <div className="absolute left-[52%] top-[40%] h-4 w-4 rounded-full bg-amber-500 shadow-[0_0_0_10px_rgba(251,191,36,0.15)]" />
            <div className="absolute left-[68%] top-[30%] h-4 w-4 rounded-full bg-emerald-600 shadow-[0_0_0_10px_rgba(16,185,129,0.15)]" />
            <div className="absolute left-[78%] top-[52%] h-4 w-4 rounded-full bg-emerald-600 shadow-[0_0_0_10px_rgba(16,185,129,0.15)]" />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur dark:bg-slate-900/80">
              <p className="text-sm font-semibold text-emerald-700">Highlighted regions</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• Himalayas — medicinal flora</li>
                <li>• Western Ghats — endemic species</li>
                <li>• Indo-Gangetic plains — banyan and peepal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
