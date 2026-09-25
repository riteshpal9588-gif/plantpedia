import Link from 'next/link';
import { ArrowRight, Droplets, Flower2, Leaf, Search, Sprout, Star, Sun } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import PlantCard from '@/components/PlantCard';
import { plants } from '@/data/plants';

const categories = [
  { name: 'Trees', emoji: '🌳' },
  { name: 'Flowers', emoji: '🌼' },
  { name: 'Medicinal Plants', emoji: '🌿' },
  { name: 'Indoor Plants', emoji: '🪴' },
  { name: 'Fruits', emoji: '🍊' },
  { name: 'Herbs', emoji: '🌱' },
  { name: 'Shrubs', emoji: '🌾' },
  { name: 'Endangered Plants', emoji: '🦋' },
];

const facts = [
  'Neem has natural insect-repelling properties and supports sustainable gardening.',
  'Peepal trees are culturally sacred and provide habitat for birds and insects.',
  'Aloe vera stores water in its leaves and is well-suited to dry climates.',
  'Snake plants are among the easiest indoor plants to maintain and are valued for their resilience.',
];

export default function HomePage() {
  const featured = plants.slice(0, 4);

  return (
    <main className="min-h-screen bg-cream text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-900/70 to-green-900/50" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-white/10 px-4 py-2 text-sm text-emerald-50 backdrop-blur-sm">
                <Sprout className="h-4 w-4" />
                Nature education • Plant biodiversity
              </div>

              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Discover the World of Plants and Trees
              </h1>

              <p className="mt-6 max-w-xl text-lg text-emerald-50/90">
                Explore scientifically accurate information on trees, flowers, herbs, medicinal plants, and garden essentials to help students, gardeners, and researchers learn with confidence.
              </p>

              <div className="mt-8 max-w-2xl">
                <SearchBar />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/explorer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:bg-emerald-50">
                  Explore now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/identify" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20">
                  Identify a plant
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 rounded-[1.5rem] bg-white/10 p-4">
                  <div className="rounded-2xl bg-emerald-500/20 p-4">
                    <Leaf className="mb-4 h-8 w-8 text-emerald-200" />
                    <div className="text-3xl font-bold text-white">1200+</div>
                    <div className="text-sm text-emerald-100">Plant records</div>
                  </div>
                  <div className="rounded-2xl bg-amber-500/20 p-4">
                    <Flower2 className="mb-4 h-8 w-8 text-amber-200" />
                    <div className="text-3xl font-bold text-white">85+</div>
                    <div className="text-sm text-amber-100">Families</div>
                  </div>
                  <div className="rounded-2xl bg-cyan-500/20 p-4">
                    <Sun className="mb-4 h-8 w-8 text-cyan-200" />
                    <div className="text-3xl font-bold text-white">9</div>
                    <div className="text-sm text-cyan-100">Climate zones</div>
                  </div>
                  <div className="rounded-2xl bg-rose-500/20 p-4">
                    <Droplets className="mb-4 h-8 w-8 text-rose-200" />
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-rose-100">Care guidance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Scientifically accurate</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Botanical notes, care guidance, and use cases grounded in practical and educational research.</p>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Beginner friendly</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Simple explanations for students, gardeners, and nature enthusiasts at every experience level.</p>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 inline-flex rounded-2xl bg-rose-100 p-3 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              <Flower2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Biodiversity focused</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Explore regional plants, trees, herbs, and shrubs from India and around the world.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Featured Plants</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Learn from nature’s favorites</h2>
          </div>
          <Link href="/explorer" className="text-sm font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-400">
            View all plants
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>

      <section className="bg-[#f5f1e6] py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Categories</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Explore by plant type</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card dark:border-slate-700 dark:bg-slate-800">
                <div className="text-3xl">{category.emoji}</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Plant of the Day</p>
            <div className="mt-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft dark:border-slate-700 dark:bg-slate-900">
              <img src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80" alt="Neem" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Neem</h3>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Medicinal Plant</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  Neem (Azadirachta indica) is a versatile evergreen tree known for its antiseptic, insect-repellent, and medicinal properties, and it is deeply valued in Indian traditional healthcare and ecological restoration.
                </p>
                <Link href="/plants/neem" className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-400">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Fun Facts</p>
            <div className="mt-4 space-y-4">
              {facts.map((fact, index) => (
                <div key={index} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">✦</div>
                    <p className="text-slate-700 dark:text-slate-200">{fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Newsletter</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Stay connected with PlantPedia</h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-50/90">
            Sign up for seasonal gardening tips, new plant discoveries, and expert-led biodiversity insights.
          </p>

          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input type="email" placeholder="Enter your email address" className="w-full max-w-md rounded-full border-0 bg-white px-5 py-3 text-slate-800 outline-none" />
            <button type="submit" className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-emerald-950 hover:bg-emerald-300">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
