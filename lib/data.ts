import { faker } from '@faker-js/faker';

export function generateChartData() {
  const labels = Array.from({ length: 7 }, () => faker.date.recent().toLocaleDateString());
  return {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59,130,246)',
      },
    ],
  };
}

export interface DataRow {
  id: number;
  name: string;
  age: number;
  birthday: string;
  active: boolean;
  visits: number;
}

export function generateTableData(count = 20): DataRow[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 80 }),
    birthday: faker.date.birthdate().toLocaleDateString(),
    active: faker.datatype.boolean(),
    visits: faker.number.int({ min: 0, max: 1000 }),
  }));
}
