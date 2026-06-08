import { Mail, School, UserRound } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold">Profile</h1>
      <section className="glass rounded-2xl p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <span className="grid h-20 w-20 place-items-center rounded-2xl bg-cyan-600 text-white"><UserRound size={34} /></span>
          <div>
            <h2 className="text-2xl font-extrabold">{user?.name}</h2>
            <p className="text-slate-500 dark:text-slate-400">{user?.rollNumber || 'Student'}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/70 p-4 dark:bg-slate-900/70"><Mail className="text-cyan-600" /><p className="mt-2 font-bold">{user?.email}</p></div>
          <div className="rounded-2xl bg-white/70 p-4 dark:bg-slate-900/70"><School className="text-emerald-600" /><p className="mt-2 font-bold">{user?.department}</p></div>
        </div>
      </section>
    </div>
  );
}
