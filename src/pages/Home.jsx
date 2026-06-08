import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, LockKeyhole, ShieldCheck, Vote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#a7f3d0,transparent_28%),radial-gradient(circle_at_85%_20%,#bae6fd,transparent_30%),linear-gradient(135deg,#f8fafc,#ecfeff)] text-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-600 text-white"><Vote /></span>
          <div>
            <p className="text-sm font-bold text-cyan-700">Class CR Selection</p>
            <h1 className="font-extrabold">Online Voting System</h1>
          </div>
        </div>
        <Link to="/login" className="btn-primary">Login <ArrowRight size={17} /></Link>
      </nav>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-cyan-700 shadow-sm">Secure student election platform</span>
          <h2 className="mt-7 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Online Voting System for Class CR Selection
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Run fast, transparent class representative elections with secure student login, one-vote protection, live admin analytics, and responsive dashboards.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/register" className="btn-primary">Create Student Account</Link>
            <Link to="/login" className="btn-secondary">Open Dashboard</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl p-5">
          <div className="rounded-2xl bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <p className="font-bold">Live Election</p>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-200">ACTIVE</span>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ['Votes Cast', '406', BarChart3],
                ['Students', '520', ShieldCheck],
                ['Security', 'JWT', LockKeyhole],
                ['Candidates', '03', Vote]
              ].map(([label, value, Icon]) => (
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4" key={label}>
                  <Icon className="text-cyan-300" />
                  <p className="mt-4 text-2xl font-extrabold">{value}</p>
                  <p className="text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
