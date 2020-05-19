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
      <table>
        <thead>{/* <tr><th>Type</th><th>Value</th><th>TTL</th></tr> */}</thead>
        <tbody>
          {results.map((result) => {
            const normalized = tabulate(result);
            return (
              <tr>
                <td>{normalized.type}</td>
                <td>{normalized.value}</td>
                <td>{normalized.ttl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ResultsFade>
  );
};

export default Results;
