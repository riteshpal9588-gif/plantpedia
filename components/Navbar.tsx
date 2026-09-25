import { useState } from 'react';
import Link from 'next/link';
import { Leaf, Menu, Moon, SunMedium, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/explorer', label: 'Explorer' },
  { href: '/identify', label: 'Identify' },
  { href: '/gardening', label: 'Gardening' },
  { href: '/map', label: 'Plant Map' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    setDark((value) => !value);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/75 backdrop-blur-lg dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-soft">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="text-xl font-black text-slate-900 dark:text-white">PlantPedia</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-emerald-700 dark:hover:text-emerald-400">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {dark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link href="/auth" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200">
            Login
          </Link>
          <Link href="/explorer" className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500">
            Explore Plants
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-700 dark:bg-slate-950">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {item.label}
              </Link>
            ))}
            <Link href="/auth" className="rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
