import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Vote } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const [form, setForm] = useState({ email: 'student@class.edu', password: 'password', role: 'STUDENT' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const user = await login(form);
    navigate(user.role === 'ADMIN' ? '/admin' : '/student');
  };

  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,#bae6fd,transparent_35%),linear-gradient(135deg,#f8fafc,#f0fdfa)] p-4">
      <form onSubmit={submit} className="glass w-full max-w-md rounded-3xl p-6 sm:p-8">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cyan-600 text-white"><Vote /></span>
        <h1 className="mt-5 text-center text-2xl font-extrabold">Sign in to vote</h1>
        <p className="mt-2 text-center text-sm text-slate-500">Use student@class.edu or admin@class.edu for demo mode.</p>
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
          {['STUDENT', 'ADMIN'].map((role) => (
            <button type="button" key={role} onClick={() => setForm({ ...form, role, email: role === 'ADMIN' ? 'admin@class.edu' : 'student@class.edu' })} className={`rounded-lg px-3 py-2 text-sm font-bold ${form.role === role ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-500'}`}>{role}</button>
          ))}
        </div>
        <div className="mt-5 space-y-4">
          <input className="field" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="field" placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button className="btn-primary w-full"><LogIn size={18} /> Login</button>
        </div>
        <p className="mt-5 text-center text-sm text-slate-500">New student? <Link className="font-bold text-cyan-700" to="/register">Register</Link></p>
      </form>
    </main>
  );
}
