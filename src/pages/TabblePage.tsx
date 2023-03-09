import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    { fruit: 'Orange', color: 'bg-orange-500', score: 5 },
    { fruit: 'Apple', color: 'bg-red-500', score: 2 },
    { fruit: 'Banana', color: 'bg-yellow-500', score: 3 },
    { fruit: 'Lime', color: 'bg-green-500', score: 1 },
    { fruit: 'Kiwi', color: 'bg-amber-500', score: 4 },
  ];

  const config = [
    {
      label: 'Fruit Name',
      render: (data: { fruit: string }) => data.fruit,
      sortValue: (data: { fruit: string }) => data.fruit,
    },
    {
      label: 'Color',
      render: (data: { color: string }) => (
        <div className={`p-3 m-2 ${data.color}`}></div>
      ),
    },
    {
      label: 'Score',
      render: (data: { score: string }) => data.score,
      sortValue: (data: { score: string }) => data.score,
    },
  ];

  return (
    <div>
      <SortableTable data={data} config={config} />
    </div>
  );
}

export default TablePage;
