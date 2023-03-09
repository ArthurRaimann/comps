import { useState } from 'react';

function useSort(data: any, config: any) {
  const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const sortColumn = (label: string) => {
    if (sortOrder === null || label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Only sort if sortOrder and sortBy are not null
  // Make a copy of the data array
  // Find the correct sorting function and use it to sort the data

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column: any) => column.label === sortBy);
    sortedData = [...data].sort((a: any, b: any) => {
      if (sortValue) {
        const aValue = sortValue(a);
        const bValue = sortValue(b);
        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        if (typeof aValue === 'string') {
          return aValue.localeCompare(bValue) * reverseOrder;
        } else if (typeof aValue === 'number') {
          return (aValue - bValue) * reverseOrder;
        }
      }
      return 0;
    });
  }

  return { sortedData, sortColumn, sortBy, sortOrder };
}

export default useSort;
