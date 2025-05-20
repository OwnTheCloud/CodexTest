import { DataTable } from '../../components/DataTable';
import { generateTableData, DataRow } from '../../lib/data';
import { ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<DataRow>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
  { accessorKey: 'birthday', header: 'Birthday' },
  { accessorKey: 'active', header: 'Active', cell: info => String(info.getValue()) },
  { accessorKey: 'visits', header: 'Visits' },
];

export default function DataPage() {
  const data = generateTableData(25);
  return <DataTable data={data} columns={columns} />;
}
