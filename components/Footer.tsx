import Link from 'next/link';
import { Facebook, Instagram, Leaf, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="text-lg font-black text-white">PlantPedia</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              A modern educational platform for learning about plants, trees, herbs, flowers, and medicinal species.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/explorer">Plant Explorer</Link></li>
              <li><Link href="/identify">Plant Identification</Link></li>
              <li><Link href="/gardening">Gardening Guide</Link></li>
              <li><Link href="/map">Plant Map</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/admin">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@plantpedia.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> India • Global Outreach</li>
            </ul>

            <div className="mt-5 flex gap-3 text-slate-300">
              <span className="rounded-full border border-slate-700 p-2"><Facebook className="h-4 w-4" /></span>
              <span className="rounded-full border border-slate-700 p-2"><Instagram className="h-4 w-4" /></span>
              <span className="rounded-full border border-slate-700 p-2"><Twitter className="h-4 w-4" /></span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © 2026 PlantPedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
