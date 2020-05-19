import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this._onQueryChanged = this._onFieldChange.bind(this, 'query');
  }

  render() {
    const { query } = this.state;
    const { fetching, style } = this.props;
    return (
      <form style={style} onSubmit={this._onSubmit}>
        <fieldset className="flex">
          <input
            className="w-full h-12 px-4 bg-white text-grey-800 rounded-l-md"
            value={query}
            autoFocus
            placeholder="google.com"
            readOnly={fetching}
            onChange={this._onQueryChanged}
            type="search"
            required
          />
          <button
            type="submit"
            className="text-sm w-12 h-12 font-bold text-white bg-green-600 rounded-r-md flex-shrink-0"
          >
            {fetching ? '…' : 'Go'}
          </button>
        </fieldset>
      </form>
    );
  }

  _onFieldChange(field, event) {
    const newState = { [field]: event.target.value };
    this.setState(() => newState);
  }

  _onSubmit = (event) => {
    const { query } = this.state;
    event.preventDefault();
    this.props.onSearch(query);
  };
}

export default SearchForm;
