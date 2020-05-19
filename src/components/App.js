import React, { useState } from 'react';

import Results from './results/Results';
import SearchForm from './search/SearchForm';
import { dnsLookup } from '../lib/lookup';

const App = () => {
  const [displayResults, setDisplayResults] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [results, setResults] = useState(undefined);

  const handleSearch = async (query) => {
    setFetching(true);
    const results = await dnsLookup(query);
    setResults(results);
    setFetching(false);
    setDisplayResults(true);
  };

  return (
    <main className="flex flex-col max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-teal-800 text-2xl font-medium">Who Owns</h1>
      <header className="mt-4 rounded-md shadow">
        <SearchForm onSearch={handleSearch} fetching={fetching} />
      </header>
      {displayResults && (
        <>
          <h2 className="mt-4 text-xs uppercase tracking-wide font-semibold text-teal-800">
            DNS Records
          </h2>
          <section className="mt-1 p-4 bg-white rounded-md shadow">
            <Results results={results} />
          </section>
        </>
      )}
    </main>
  );
};

export default App;
