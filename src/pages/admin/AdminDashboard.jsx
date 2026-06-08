import { BarChart3, PlayCircle, Users, Vote } from 'lucide-react';
import StatCard from '../../components/StatCard.jsx';
import ResultsChart from '../../components/ResultsChart.jsx';
import { candidates, students } from '../../data/mockData.js';

export default function AdminDashboard() {
  const totalVotes = candidates.reduce((sum, item) => sum + item.voteCount, 0);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Admin Dashboard</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Manage CR elections, users, candidates, and analytics.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Users} label="Students" value={students.length} />
        <StatCard icon={Vote} label="Candidates" value={candidates.length} accent="emerald" />
        <StatCard icon={BarChart3} label="Total Votes" value={totalVotes} accent="amber" />
        <StatCard icon={PlayCircle} label="Election" value="ACTIVE" accent="rose" />
      </div>
      <ResultsChart data={candidates} />
    </div>
  );
}
