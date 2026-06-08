import CandidateCard from '../../components/CandidateCard.jsx';
import { candidates } from '../../data/mockData.js';

export default function Candidates() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Candidate List</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Review each manifesto before voting.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {candidates.map((candidate) => <CandidateCard key={candidate.id} candidate={candidate} />)}
      </div>
    </div>
  );
}
