import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex items-center overflow-hidden rounded-full border border-emerald-200 bg-white shadow-soft">
      <div className="flex items-center pl-4 text-emerald-700">
        <Search className="h-5 w-5" />
      </div>
      <input
        type="text"
        aria-label="Search plants"
        placeholder="Search by common name, scientific name, family or category"
        className="w-full border-0 bg-transparent px-4 py-4 text-sm text-slate-800 outline-none placeholder:text-slate-500"
      />
      <Link href="/explorer" className="inline-flex items-center gap-2 bg-emerald-600 px-5 py-4 text-sm font-semibold text-white hover:bg-emerald-500">
        Search <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
