export default function Modal({ open, title, children }: { open: boolean; title: string; children: React.ReactNode }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-card dark:bg-slate-900">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <div className="mt-4 text-slate-600 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
}
