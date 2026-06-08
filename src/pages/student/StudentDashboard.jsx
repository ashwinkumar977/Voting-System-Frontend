import { BarChart3, Clock, ShieldCheck, Vote } from 'lucide-react';
import StatCard from '../../components/StatCard.jsx';
import CandidateCard from '../../components/CandidateCard.jsx';
import ResultsChart from '../../components/ResultsChart.jsx';
import { candidates, election } from '../../data/mockData.js';

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Student Dashboard</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Track election status, candidates, and your voting eligibility.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={ShieldCheck} label="Election Status" value={election.status} accent="emerald" hint="Voting window is open" />
        <StatCard icon={Vote} label="Candidates" value={candidates.length} />
        <StatCard icon={BarChart3} label="Total Votes" value={candidates.reduce((sum, item) => sum + item.voteCount, 0)} accent="amber" />
        <StatCard icon={Clock} label="Ends At" value="5:00 PM" accent="rose" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_.9fr]">
        <ResultsChart data={candidates} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {candidates.slice(0, 2).map((candidate) => <CandidateCard key={candidate.id} candidate={candidate} />)}
        </div>
      </div>
    </div>
  );
}
