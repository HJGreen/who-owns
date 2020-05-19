import React, { useState } from 'react';

const SearchForm = (props) => {
  const [query, setQuery] = useState('');
  const { fetching, onSearch } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="flex">
          <label htmlFor="query" className="sr-only">
            Domain
          </label>
          <input
            id="query"
            className="w-full h-12 px-4 bg-white text-grey-800 rounded-l-md"
            value={query}
            autoFocus
            placeholder="google.com"
            readOnly={fetching}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            required
          />
          <button
            type="submit"
            className="text-sm w-12 h-12 font-bold text-white bg-green-700 uppercase tracking-wide rounded-r-md flex-shrink-0"
          >
            {fetching ? '…' : 'Go'}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default SearchForm;
