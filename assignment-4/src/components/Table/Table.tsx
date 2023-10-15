import React from 'react'

function Table({ tableHeaders, children }) {
  const renderTableHeader = tableHeaders?.map((th: string, index) => {
    return (
      <th key={index} scope="col" className="px-6 py-3">
        {th}
      </th>
    )
  })

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-black uppercase bg-slate-400 dark:bg-rose-700 dark:text-white">
          <tr className="">{renderTableHeader}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export default Table
