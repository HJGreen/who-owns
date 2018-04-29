import fetch from 'isomorphic-unfetch';


export function dnsLookup(hostname) {
  const results = fetch(`/.netlify/functions/dns?hostname=${hostname}`)
    .then(res => res.json());

  return results;
}