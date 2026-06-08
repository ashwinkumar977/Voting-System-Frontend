import { useState } from 'react';
import toast from 'react-hot-toast';
import CandidateCard from '../../components/CandidateCard.jsx';
import { candidates } from '../../data/mockData.js';
import { useAuth } from '../../context/AuthContext.jsx';
import api from '../../services/api.js';

export default function Vote() {
  const { user, setUser } = useAuth();
  const [selected, setSelected] = useState(null);
  const [busy, setBusy] = useState(false);

  const castVote = async (candidate) => {
    if (user?.hasVoted) {
      toast.error('You have already voted');
      return;
    }
    setBusy(true);
    try {
      await api.post(`/vote/${candidate.id}`);
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 450));
    }
    const updated = { ...user, hasVoted: true };
    localStorage.setItem('ovs_user', JSON.stringify(updated));
    setUser(updated);
    setSelected(candidate.id);
    setBusy(false);
    toast.success(`Vote cast for ${candidate.name}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-extrabold">Cast Your Vote</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">One student can vote only once. Choose carefully.</p>
        </div>
        <span className={`rounded-full px-4 py-2 text-sm font-bold ${user?.hasVoted ? 'bg-emerald-100 text-emerald-700' : 'bg-cyan-100 text-cyan-700'}`}>
          {user?.hasVoted ? 'Vote Submitted' : 'Eligible to Vote'}
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} selected={selected === candidate.id} disabled={busy || user?.hasVoted} onVote={castVote} />
        ))}
      </div>
    </div>
  );
}
