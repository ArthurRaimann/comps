import { useState } from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

function getIcons(label: string, sortBy: string | null, sortOrder: 'asc' | 'desc' | null) {
  if( label !== sortBy) {
    return <div><GoArrowSmallUp/><GoArrowSmallDown/></div>;
  }

  if (sortOrder === 'asc') {
    return <div><GoArrowSmallUp/></div>;
  } else if (sortOrder === 'desc') {
    return <div><GoArrowSmallDown/></div>;
  } else {
    return <div><GoArrowSmallUp/><GoArrowSmallDown/></div>;
  }
}

function SortableTable(props: any) {
  const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null);
  const [sortBy, setSortBy] = useState<null | string>(null)

  const { config, data } = props;

  const handleClick = (label: string) => {
    if(sortOrder === null || label !== sortBy) {
      setSortOrder('asc')
      setSortBy(label)
    } else if(sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    } else if(sortOrder === 'desc') {
      setSortOrder(null)
      setSortBy(null)
    }
  };

  const updatedConfig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th className='cursor-pointer hover:bg-gray-100 pr-5' onClick={() => { handleClick(column.label) }}>
        <div className='flex items-center'>{getIcons(column.label, sortBy, sortOrder)}
        {column.label}</div></th>,
    };
  });

  // Only sort if sortOrder and sortBy are not null
  // Make a copy of the data array
  // Find the correct sorting function and use it to sort the data

  let sortedData = data
  if(sortOrder && sortBy) {
    const { sortValue } = config.find((column: any) => column.label === sortBy);
    sortedData = [...data].sort((a: any, b: any) => {
      if(sortValue) {
        const aValue = sortValue(a);
        const bValue = sortValue(b);
        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        if (typeof aValue === 'string') {
          return aValue.localeCompare(bValue) * reverseOrder
        } else if (typeof aValue === 'number') {
          return (aValue - bValue) * reverseOrder
        }
      }
      return 0;
    });
  }

  return (
    <Table {...props} data={sortedData} config={updatedConfig} />
  );
}

export default SortableTable;
