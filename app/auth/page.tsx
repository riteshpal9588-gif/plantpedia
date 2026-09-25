export default function AuthPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900 md:grid-cols-2">
        <div className="rounded-[1.5rem] bg-emerald-50 p-6 dark:bg-slate-800">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Access your saved plants, garden collection, and notes.</p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-600 dark:bg-slate-900" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-600 dark:bg-slate-900" />
            </div>
            <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-medium text-white">Login</button>
          </form>
        </div>

        <div className="rounded-[1.5rem] bg-slate-50 p-6 dark:bg-slate-800">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Create account</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Track favorites, reminders, and personal garden notes.</p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Full name</label>
              <input type="text" className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-600 dark:bg-slate-900" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-600 dark:bg-slate-900" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-600 dark:bg-slate-900" />
            </div>
            <button className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white dark:bg-emerald-600">Register</button>
          </form>
        </div>
      </div>
    </main>
  );
}
