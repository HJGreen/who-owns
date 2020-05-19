import React, { Component } from 'react';

import Results from './results/Results';
import SearchForm from './search/SearchForm';
import { dnsLookup } from '../lib/lookup';

class App extends Component {
  state = {
    displayResults: false,
    fetching: false,
  };
  render() {
    const { displayResults, fetching, results } = this.state;
    return (
      <main className="flex flex-col max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-teal-800 text-2xl font-medium">Who Owns</h1>
        <header className="mt-4 rounded-md shadow">
          <SearchForm onSearch={this._onSearch} fetching={fetching} />
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
  }

  _onSearch = async (hostname) => {
    this.setState(() => ({
      fetching: true,
      query: hostname,
    }));

    const results = await dnsLookup(hostname);

    this.setState(() => ({
      fetching: false,
      displayResults: true,
      results: results,
    }));
  };
}

export default App;
