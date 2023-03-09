import Table from './Table';

function SortableTable(props: any) {
  const { config } = props;
  const updatedConfig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th>{column.label} is sortable</th>,
    };
  });

  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
