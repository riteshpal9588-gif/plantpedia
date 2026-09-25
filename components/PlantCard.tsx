import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Plant } from '@/data/plants';

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-slate-700 dark:bg-slate-900">
      <div className="relative h-56 w-full">
        <Image src={plant.image} alt={plant.commonName} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">{plant.category}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{plant.climate}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plant.commonName}</h3>
        <p className="mt-1 text-sm italic text-slate-500 dark:text-slate-400">{plant.scientificName}</p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{plant.description}</p>

        <Link href={`/plants/${plant.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-400">
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
