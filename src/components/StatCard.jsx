import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, label, value, accent = 'cyan', hint }) {
  const accents = {
    cyan: 'bg-cyan-500/12 text-cyan-600',
    emerald: 'bg-emerald-500/12 text-emerald-600',
    amber: 'bg-amber-500/12 text-amber-600',
    rose: 'bg-rose-500/12 text-rose-600'
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">{value}</h3>
          {hint && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{hint}</p>}
        </div>
        <span className={`grid h-11 w-11 place-items-center rounded-xl ${accents[accent]}`}>
          <Icon size={22} />
        </span>
      </div>
    </motion.div>
  );
}
