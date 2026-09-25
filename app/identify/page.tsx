export default function IdentifyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Plant Identification</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Upload a plant image for identification</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <div className="rounded-[1.75rem] border-2 border-dashed border-emerald-300 bg-emerald-50 p-8 text-center dark:bg-slate-800">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">Drag & drop a photo here</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">or</p>
            <label className="mt-4 inline-block cursor-pointer rounded-full bg-emerald-600 px-5 py-3 font-medium text-white">
              Upload image
              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-300">Suggested image types</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-700">Leaf</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-700">Flower</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-700">Whole plant</span>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Demo result</h2>

          <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-700">
            <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80" alt="Demo plant" className="h-64 w-full object-cover" />
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Neem</h3>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">94% confidence</span>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-slate-900 dark:text-white">Key identification features</p>
              <ul className="mt-2 space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Serrated leaf margins and compound leaf arrangement</li>
                <li>• Strong aromatic scent when leaves are crushed</li>
                <li>• Commonly found in tropical and subtropical climates</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-slate-900 dark:text-white">Similar species</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-700">Peepal</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-700">Mango</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-700">Tulsi</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-100">
              Results should be verified by a botanist, horticulturist, or trusted botanical source before making a final identification.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
