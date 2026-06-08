import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', rollNumber: '', department: 'Computer Science', password: '' });
  const { register } = useAuth();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate('/login');
  };
  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top_left,#ccfbf1,transparent_35%),linear-gradient(135deg,#f8fafc,#eff6ff)] p-4">
      <form onSubmit={submit} className="glass w-full max-w-2xl rounded-3xl p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold">Create student account</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input className="field" required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className="field" required placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="field" required placeholder="Roll number" value={form.rollNumber} onChange={(e) => setForm({ ...form, rollNumber: e.target.value })} />
          <input className="field" required placeholder="Department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
          <input className="field sm:col-span-2" required type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>
        <button className="btn-primary mt-5 w-full"><UserPlus size={18} /> Register</button>
        <p className="mt-5 text-center text-sm text-slate-500">Already registered? <Link className="font-bold text-cyan-700" to="/login">Login</Link></p>
      </form>
    </main>
  );
}
