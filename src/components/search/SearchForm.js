import React, { Component } from 'react';
// import styled from 'styled-components';

import InputGroup from './InputGroup';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }

    this._onQueryChanged = this._onFieldChange.bind(this, 'query');
  }

  render() {
    const { query } = this.state;
    const { fetching, style } = this.props;
    return (
      <form style={style}>
        <InputGroup>
          <SearchInput
            value={query}
            autoFocus
            placeholder="google.com"
            readOnly={fetching}
            onChange={this._onQueryChanged}
          />
          <SearchButton
            onClick={this._onSubmit}
          >
            {fetching ? '…' : 'Go'}
          </SearchButton>
        </InputGroup>
      </form>
    )
  }

  _onFieldChange(field, event) {
    const newState = { [field]: event.target.value };
    this.setState(() => (newState));
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch();
  }
}

export default SearchForm;