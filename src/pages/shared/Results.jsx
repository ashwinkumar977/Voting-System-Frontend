import ResultsChart from '../../components/ResultsChart.jsx';
import CandidateCard from '../../components/CandidateCard.jsx';
import { candidates } from '../../data/mockData.js';

export default function Results({ admin = false }) {
  const winner = [...candidates].sort((a, b) => b.voteCount - a.voteCount)[0];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">{admin ? 'Live Voting Results' : 'Result Page'}</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">{admin ? 'Monitor live vote distribution.' : 'Final results appear after the election ends.'}</p>
      </div>
      <ResultsChart data={candidates} />
      <div className="glass rounded-2xl p-5">
        <p className="text-sm font-bold uppercase text-cyan-700 dark:text-cyan-300">Current leader</p>
        <h2 className="mt-2 text-2xl font-extrabold">{winner.name}</h2>
        <p className="text-slate-500 dark:text-slate-400">{winner.voteCount} votes recorded</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {candidates.map((candidate) => <CandidateCard key={candidate.id} candidate={candidate} />)}
      </div>
    </div>
  );
}
