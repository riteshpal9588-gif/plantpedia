import { BookOpen, CloudRain, Home, Leaf, MapPin, Palette, Search, ShieldAlert, Sprout, Sun, Trees } from 'lucide-react';

const detailItems = [
  { icon: Trees, label: 'Height', value: '3–8 meters depending on conditions' },
  { icon: Leaf, label: 'Leaf shape', value: 'Glossy, oval, deep green' },
  { icon: Palette, label: 'Flower colour', value: 'Yellow or white depending on species' },
  { icon: Sun, label: 'Sunlight', value: 'Full sun or bright indirect light' },
  { icon: CloudRain, label: 'Watering', value: '2–3 deep waterings per week' },
  { icon: ShieldAlert, label: 'Safety', value: 'Use caution with pets and humans if toxic' },
];

export default function PlantDetailSection() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Plant Details</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {detailItems.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
            <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400">
              <Icon className="h-5 w-5" />
              {label}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
