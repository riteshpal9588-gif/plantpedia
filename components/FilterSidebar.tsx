import { Leaf, Sprout, Trees, Sun, CloudRain, ShieldAlert, Home, Palette, MapPin, Search, BookOpen } from 'lucide-react';

export type FilterKey = 'all' | 'type' | 'climate' | 'sunlight' | 'water' | 'medicinal' | 'indoor';

export default function FilterSidebar() {
  return (
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
  );
}
