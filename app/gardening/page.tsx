import Link from 'next/link';
import { ArrowRight, Flower2, Leaf, Search, Sprout } from 'lucide-react';

const guideTopics = [
  'How to grow plants from seeds',
  'How to plant a tree',
  'How often to water plants',
  'Best soil types',
  'Composting at home',
  'Organic pest control',
  'Indoor plant care',
  'Seasonal gardening tips for India',
  'How to identify nutrient deficiencies in leaves',
];

export default function GardeningGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Gardening Guide</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Practical guides for healthy gardens</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {guideTopics.map((topic, index) => (
          <article key={topic} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Guide {index + 1}</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{topic}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Learn the essentials, seasonal timing, and beginner-friendly practices needed to grow healthier plants successfully in Indian conditions.</p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
              Read guide <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
