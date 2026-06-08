import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const colors = ['#0891b2', '#16a34a', '#f59e0b', '#e11d48', '#7c3aed'];

export default function ResultsChart({ data }) {
  return (
    <div className="glass h-80 rounded-2xl p-5">
      <h2 className="mb-4 text-lg font-bold text-slate-950 dark:text-white">Voting Results</h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#94a3b855" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} />
          <Tooltip cursor={{ fill: '#0ea5e922' }} />
          <Bar dataKey="voteCount" radius={[8, 8, 0, 0]}>
            {data.map((_, index) => <Cell key={index} fill={colors[index % colors.length]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
