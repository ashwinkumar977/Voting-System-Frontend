import { CalendarClock, CheckCircle2, Hourglass, Timer } from 'lucide-react';
import StatCard from '../../components/StatCard.jsx';
import { election } from '../../data/mockData.js';

export default function ElectionStatus() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Election Status</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Current voting window and visibility rules.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={CheckCircle2} label="Status" value={election.status} accent="emerald" />
        <StatCard icon={CalendarClock} label="Start Time" value="9:00 AM" />
        <StatCard icon={Timer} label="End Time" value="5:00 PM" accent="rose" />
      </div>
      <section className="glass rounded-2xl p-6">
        <Hourglass className="text-cyan-600" />
        <h2 className="mt-4 text-xl font-bold">Result visibility</h2>
        <p className="mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
          Live counts are available to administrators while the election is active. Students can view final results after the election is ended by an administrator.
        </p>
      </section>
    </div>
  );
}
