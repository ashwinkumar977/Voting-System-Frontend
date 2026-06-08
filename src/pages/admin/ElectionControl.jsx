import { PauseCircle, PlayCircle, TimerReset } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ElectionControl() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Start/Stop Election</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Control when students can cast votes.</p>
      </div>
      <section className="glass rounded-2xl p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="field" defaultValue="CR Selection 2026" />
          <input className="field" type="datetime-local" />
          <input className="field" type="datetime-local" />
          <button className="btn-secondary"><TimerReset size={18} /> Reset Timer</button>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button onClick={() => toast.success('Election started')} className="btn-primary"><PlayCircle size={18} /> Start Election</button>
          <button onClick={() => toast.success('Election stopped')} className="btn-secondary text-rose-600"><PauseCircle size={18} /> Stop Election</button>
        </div>
      </section>
    </div>
  );
}
