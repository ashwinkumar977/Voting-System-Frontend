import { Plus, Save, Trash2 } from 'lucide-react';
import { candidates } from '../../data/mockData.js';

export default function ManageCandidates() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-extrabold">Manage Candidates</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Add, edit, and remove CR candidates.</p>
        </div>
        <button className="btn-primary"><Plus size={18} /> Add Candidate</button>
      </div>
      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <form className="glass rounded-2xl p-5">
          <h2 className="text-lg font-bold">Candidate Form</h2>
          <div className="mt-4 space-y-4">
            <input className="field" placeholder="Candidate name" />
            <input className="field" placeholder="Department" />
            <input className="field" placeholder="Image URL" />
            <textarea className="field min-h-32" placeholder="Manifesto" />
            <button type="button" className="btn-primary w-full"><Save size={18} /> Save Candidate</button>
          </div>
        </form>
        <div className="space-y-3">
          {candidates.map((candidate) => (
            <div className="glass flex flex-col justify-between gap-4 rounded-2xl p-4 sm:flex-row sm:items-center" key={candidate.id}>
              <div className="flex items-center gap-4">
                <img className="h-14 w-14 rounded-xl object-cover" src={candidate.imageUrl} alt={candidate.name} />
                <div><h3 className="font-bold">{candidate.name}</h3><p className="text-sm text-slate-500">{candidate.department}</p></div>
              </div>
              <button className="btn-secondary py-2 text-rose-600"><Trash2 size={16} /> Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
