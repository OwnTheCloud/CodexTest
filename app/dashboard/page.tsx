import { GraphCard } from '../../components/GraphCard';
import { generateChartData } from '../../lib/data';

export default function DashboardPage() {
  const data = generateChartData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <GraphCard title="Line Chart" type="line" data={data} />
      <GraphCard title="Bar Chart" type="bar" data={data} />
      <GraphCard title="Pie Chart" type="pie" data={data} />
    </div>
  );
}
