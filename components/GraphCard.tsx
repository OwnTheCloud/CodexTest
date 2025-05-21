'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui';
import { Line, Bar, Pie } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

interface Props {
  title: string;
  type: 'line' | 'bar' | 'pie';
  data: ChartData;
  options?: ChartOptions;
}

export function GraphCard({ title, type, data, options }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {type === 'line' && <Line data={data} options={options} />}
        {type === 'bar' && <Bar data={data} options={options} />}
        {type === 'pie' && <Pie data={data} options={options} />}
      </CardContent>
    </Card>
  );
}
