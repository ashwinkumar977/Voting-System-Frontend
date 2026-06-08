import { CheckCircle2, Vote } from 'lucide-react';

export default function CandidateCard({ candidate, onVote, selected, disabled }) {
  return (
    <article className="glass overflow-hidden rounded-2xl">
      <img className="h-48 w-full object-cover" src={candidate.imageUrl || candidate.image_url} alt={candidate.name} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">{candidate.name}</h3>
            <p className="text-sm text-cyan-700 dark:text-cyan-300">{candidate.department}</p>
          </div>
          {selected && <CheckCircle2 className="text-emerald-500" />}
        </div>
        <p className="mt-4 min-h-16 text-sm leading-6 text-slate-600 dark:text-slate-300">{candidate.manifesto}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {candidate.voteCount ?? candidate.vote_count ?? 0} votes
          </span>
          {onVote && (
            <button className="btn-primary py-2" onClick={() => onVote(candidate)} disabled={disabled}>
              <Vote size={16} /> Vote
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
