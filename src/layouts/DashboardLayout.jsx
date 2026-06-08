import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { BarChart3, LogOut, Menu, Moon, Settings, ShieldCheck, Sun, User, Users, Vote, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

const nav = {
  STUDENT: [
    ['Dashboard', '/student', BarChart3],
    ['Candidates', '/student/candidates', Users],
    ['Vote', '/student/vote', Vote],
    ['Status', '/student/status', ShieldCheck],
    ['Results', '/student/results', BarChart3],
    ['Profile', '/student/profile', User]
  ],
  ADMIN: [
    ['Dashboard', '/admin', BarChart3],
    ['Students', '/admin/students', Users],
    ['Candidates', '/admin/candidates', Vote],
    ['Election', '/admin/election', ShieldCheck],
    ['Results', '/admin/results', BarChart3],
    ['Analytics', '/admin/analytics', BarChart3],
    ['Settings', '/admin/settings', Settings]
  ]
};

export default function DashboardLayout({ role }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('ovs_theme') === 'dark');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('ovs_theme', dark ? 'dark' : 'light');
  }, [dark]);

  const signOut = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#cffafe,transparent_35%),linear-gradient(135deg,#f8fafc,#eefdf8)] text-slate-900 dark:bg-[radial-gradient(circle_at_top_left,#0e7490,transparent_30%),linear-gradient(135deg,#020617,#082f49)] dark:text-white">
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-white/30 bg-white/80 p-5 backdrop-blur-2xl transition dark:border-white/10 dark:bg-slate-950/80 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">CR Selection</p>
            <h1 className="text-xl font-extrabold">Voting System</h1>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
        </div>
        <nav className="mt-8 space-y-2">
          {nav[role].map(([label, to, Icon]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/student' || to === '/admin'}
              className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20' : 'text-slate-600 hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'}`}
              onClick={() => setOpen(false)}
            >
              <Icon size={18} /> {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/30 bg-white/72 px-4 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/65 sm:px-6">
          <div className="flex items-center gap-3">
            <button className="btn-secondary px-3 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={18} /></button>
            <div>
              <p className="text-xs font-semibold uppercase text-cyan-700 dark:text-cyan-300">{role.toLowerCase()} portal</p>
              <h2 className="text-lg font-bold sm:text-xl">Online Voting System</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-secondary px-3" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold">{user?.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
            </div>
            <button className="btn-secondary px-3" onClick={signOut} aria-label="Logout"><LogOut size={18} /></button>
          </div>
        </header>
        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
