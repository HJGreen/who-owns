import React from 'react';

const tabulate = (record) => {
  return {
    type: record.type,
    value: record.address || record.exchange || record.value,
    ttl: record.ttl,
  };
};

const Results = ({ results }) => {
  if (!results) return null;
  return (
    <table className="font-mono w-full">
      <thead>
        <tr>
          <th align="left">Type</th>
          <th align="left">Value</th>
          <th align="right">TTL</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const normalized = tabulate(result);
          return (
            <tr>
              <td align="left">{normalized.type}</td>
              <td align="left">{normalized.value}</td>
              <td align="right">{normalized.ttl}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
