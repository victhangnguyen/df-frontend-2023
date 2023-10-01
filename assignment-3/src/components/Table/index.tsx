import React from 'react';

function Table({ tableHeaders, tableDetails }) {
  const renderTableHeader = tableHeaders?.map((th, index) => {
    return (
      <th key={index} scope="col">
        {th}
      </th>
    );
  });

  const renderTableDetails = tableDetails?.map((td, index) => {
    const tbDetails: Array<any> = [];
    Object.keys(td).forEach((key, idx) => {
      tbDetails.push(<td key={`td-${index + 1}-${idx + 1}`}>{td[key]}</td>);
    });
    return <tr key={`tr-${index + 1}`}>{tbDetails}</tr>;
  });

  return (
    <table className="styled-table">
      <thead>
        <tr className="">{renderTableHeader}</tr>
      </thead>
      <tbody>{renderTableDetails}</tbody>
    </table>
  );
}

export default Table;
