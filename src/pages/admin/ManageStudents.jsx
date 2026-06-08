import { Search } from 'lucide-react';
import { students } from '../../data/mockData.js';

export default function ManageStudents() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-extrabold">Manage Students</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">View registration and voting status.</p>
        </div>
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
          <input className="field pl-10" placeholder="Search students" />
        </div>
      </div>
      <div className="glass overflow-x-auto rounded-2xl">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-slate-100/80 text-xs uppercase text-slate-500 dark:bg-slate-900/80">
            <tr><th className="p-4">Name</th><th>Email</th><th>Roll No</th><th>Department</th><th>Status</th></tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr className="border-t border-slate-200/70 dark:border-slate-800" key={student.id}>
                <td className="p-4 font-bold">{student.name}</td><td>{student.email}</td><td>{student.rollNumber}</td><td>{student.department}</td>
                <td><span className={`rounded-full px-3 py-1 text-xs font-bold ${student.hasVoted ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{student.hasVoted ? 'Voted' : 'Pending'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
