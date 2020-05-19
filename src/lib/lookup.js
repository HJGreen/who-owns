// const recordTypes = ['a', 'aaaa', 'alias', 'cname', 'mx', 'ns', 'ptr', 'soa'];
// const recordTypeObject = Object.fromEntries(
//   recordTypes.map((key) => [key, []])
// );

export async function dnsLookup(hostname) {
  const results = await fetch(`/.netlify/functions/dns?hostname=${hostname}`);
  const json = await results.json();

  return json;
}

// const splitDnsRecordsByType = (records) => {
//   return records.reduce((data, record) => {
//     const { type } = record;
//     if (data[type]) {
//       data[type][0] = record;
//     } else {
//       data[type] = [record];
//     }
//     return data;
//   }, recordTypeObject);
// };
