import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import ResultsChart from '../../components/ResultsChart.jsx';
import { candidates } from '../../data/mockData.js';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold">Analytics Dashboard</h1>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        <ResultsChart data={candidates} />
        <div className="glass h-80 rounded-2xl p-5">
          <h2 className="text-lg font-bold">Vote Share</h2>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie data={candidates} dataKey="voteCount" nameKey="name" outerRadius={105}>
                {candidates.map((_, index) => <Cell key={index} fill={['#0891b2', '#16a34a', '#f59e0b'][index % 3]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
