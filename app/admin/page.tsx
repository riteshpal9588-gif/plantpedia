export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Admin Dashboard</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Manage plant records and content</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Total plants</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">1,284</h3>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Users</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">4,927</h3>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Categories</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">18</h3>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Most viewed</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Neem</h3>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Plant records</h2>
          <table className="mt-5 w-full text-left">
            <thead>
              <tr className="text-sm text-slate-500 dark:text-slate-400">
                <th>Name</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-slate-200 dark:border-slate-700">
                <td className="py-3">Neem</td>
                <td>Medicinal</td>
                <td className="text-emerald-600">Published</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-700">
                <td className="py-3">Rose</td>
                <td>Flower</td>
                <td className="text-amber-600">Pending review</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Quick actions</h2>
          <div className="mt-5 space-y-3">
            <button className="block w-full rounded-xl bg-emerald-600 px-4 py-3 font-medium text-white">Add plant record</button>
            <button className="block w-full rounded-xl bg-slate-100 px-4 py-3 font-medium dark:bg-slate-800">Manage categories</button>
            <button className="block w-full rounded-xl bg-slate-100 px-4 py-3 font-medium dark:bg-slate-800">Review submissions</button>
          </div>
        </div>
      </div>
    </main>
  );
}
