import Stat from '../Stat';

export default function StatExample() {
  return (
    <div className="grid gap-8 md:grid-cols-3 p-6">
      <Stat kpi="$110k+" label="Raised on inaugural ride" />
      <Stat kpi="3" label="Hospitals supported" />
      <Stat kpi="40+" label="Patients helped" />
    </div>
  );
}
