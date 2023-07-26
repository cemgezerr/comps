import React from 'react'
import Table from './Table'
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSort from '../hooks/use-sort';

const SorttableTable = (props) => {
  const { config, data } = props;
  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
  } = useSort(data,config)



  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }
    return {
      ...column,
      header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label)}>
        <div className='flex items-center'>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    }
  })


  return (
    <div>
      <Table {...props} data={sortedData} config={updateConfig} />
    </div>

  )
}
const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return <div>
      <GoArrowUp />
      <GoArrowDown />
    </div>
  } else if (sortOrder === 'asc') {
    return <div>
      <GoArrowUp />
    </div>
  } else if (sortOrder === 'desc') {
    return <div>
      <GoArrowDown />
    </div>
  }
}

export default SorttableTable