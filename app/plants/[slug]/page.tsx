import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CloudRain, Droplets, Heart, Leaf, Palette, ShieldAlert, Share2, Sun, Trees } from 'lucide-react';
import { plants } from '@/data/plants';

export function generateStaticParams() {
  return plants.map((plant) => ({ slug: plant.slug }));
}

export default function PlantDetailPage({ params }: { params: { slug: string } }) {
  const plant = plants.find((item) => item.slug === params.slug);

  if (!plant) notFound();

  const related = plants.filter((item) => item.id !== plant.id).slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/explorer" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
        <ArrowLeft className="h-4 w-4" />
        Back to Explorer
      </Link>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft dark:border-slate-700 dark:bg-slate-900">
        <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img src={plant.image} alt={plant.commonName} className="h-[420px] w-full rounded-[1.5rem] object-cover" />
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[plant.image, plant.image, plant.image].map((img, index) => (
                <img key={index} src={img} alt={`${plant.commonName} gallery ${index + 1}`} className="h-24 w-full rounded-2xl object-cover" />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Plant Details</p>
                <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">{plant.commonName}</h1>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                <Heart className="h-4 w-4" /> Save to Favorites
              </button>
            </div>

            <div className="text-lg italic text-slate-500 dark:text-slate-400">{plant.scientificName}</div>

            <div className="space-y-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <div><span className="font-semibold">Local name:</span> {plant.localName}</div>
              <div><span className="font-semibold">Family:</span> {plant.family}</div>
              <div><span className="font-semibold">Kingdom:</span> {plant.kingdom}</div>
              <div><span className="font-semibold">Category:</span> {plant.category}</div>
              <div><span className="font-semibold">Climate:</span> {plant.climate}</div>
            </div>

            <p className="text-slate-600 dark:text-slate-300">{plant.description} This species is widely appreciated for ecological value and practical usefulness, thriving in suitable climates and supporting biodiversity.</p>

            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium dark:border-slate-600 dark:text-slate-200">
                <Share2 className="h-4 w-4" /> Share
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium dark:border-slate-600 dark:text-slate-200">
                <ShieldAlert className="h-4 w-4" /> Safety Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Plant profile</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400"><Trees className="h-5 w-5" /> Height</div>
              <p>3–8 meters depending on growing conditions</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400"><Leaf className="h-5 w-5" /> Leaf shape</div>
              <p>Glossy, oval, deep green foliage</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400"><Sun className="h-5 w-5" /> Sunlight</div>
              <p>{plant.sunlight}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400"><Droplets className="h-5 w-5" /> Watering</div>
              <p>{plant.water}, avoid overwatering</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Care and cultivation</h2>
          <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
            <li>• Ideal climate: warm tropical to subtropical conditions</li>
            <li>• Soil: fertile loam enriched with organic compost</li>
            <li>• Watering schedule: deep watering 2–3 times per week in warm weather</li>
            <li>• Propagation: seeds, cuttings, or layering</li>
            <li>• Pruning: remove dead or crowded growth once or twice yearly</li>
            <li>• Common pests: aphids, mealybugs, and fungal issues</li>
          </ul>
        </section>
      </div>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Uses and benefits</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-slate-800">
            <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400"><Leaf className="h-5 w-5" /> Environmental</div>
            <p>Improves biodiversity, captures carbon, and supports pollinators.</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-slate-800">
            <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400"><Palette className="h-5 w-5" /> Medicinal</div>
            <p>Traditionally used for immunity, skin health, and digestive support.</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-slate-800">
            <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400"><Trees className="h-5 w-5" /> Cultural</div>
            <p>Has symbolic and spiritual significance in several traditions and communities.</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Related plants</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.id} href={`/plants/${item.slug}`} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
              <img src={item.image} alt={item.commonName} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.commonName}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.scientificName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
