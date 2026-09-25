import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { plants } from '@/data/plants';

export default function ExplorerPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Plant Explorer</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Explore plants by type, climate, and care needs</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Filters</h2>
          <div className="mt-5 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Plant type</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-800">
                <option>All</option>
                <option>Trees</option>
                <option>Flowers</option>
                <option>Medicinal Plants</option>
                <option>Indoor Plants</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Climate</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-800">
                <option>All</option>
                <option>Tropical</option>
                <option>Subtropical</option>
                <option>Temperate</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Sunlight requirement</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-800">
                <option>All</option>
                <option>Full sun</option>
                <option>Partial shade</option>
                <option>Low light</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Water requirement</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-800">
                <option>All</option>
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
              </select>
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
            <input type="text" placeholder="Search plants..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-600 dark:bg-slate-800" />
            <div className="flex gap-3">
              <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-600 dark:bg-slate-800">
                <option>Sort: A–Z</option>
                <option>Most popular</option>
                <option>Newest</option>
              </select>
              <button className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white">Apply</button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plants.map((plant) => (
              <article key={plant.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft dark:border-slate-700 dark:bg-slate-900">
                <img src={plant.image} alt={plant.commonName} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">{plant.category}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{plant.climate}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{plant.commonName}</h3>
                  <p className="mt-1 text-sm italic text-slate-500 dark:text-slate-400">{plant.scientificName}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{plant.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <Link href={`/plants/${plant.slug}`} className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">View Details</Link>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{plant.sunlight}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 font-semibold text-emerald-700 dark:border-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">Load More</button>
          </div>
        </section>
      </div>
    </main>
  );
}
