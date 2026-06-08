import { Save } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold">Settings</h1>
      <form className="glass max-w-3xl rounded-2xl p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="field" defaultValue="Online Voting System" />
          <input className="field" defaultValue="Computer Science" />
          <input className="field" defaultValue="admin@class.edu" />
          <select className="field" defaultValue="results-after-end"><option value="results-after-end">Results after election end</option><option value="live">Live results for all</option></select>
        </div>
        <button type="button" className="btn-primary mt-5"><Save size={18} /> Save Settings</button>
      </form>
    </div>
  );
}
