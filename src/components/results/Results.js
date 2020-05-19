import React from 'react';
import styled from 'styled-components';

const ResultsFade = styled.section`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  opacity: 0;
  animation: 0.4s fade-in 0.4s forwards;
`;

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
    <ResultsFade>
      <table style={{ fontFamily: 'monospace', width: '100%' }}>
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
    </ResultsFade>
  );
};

export default Results;
