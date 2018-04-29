import React, { Component } from 'react';
import styled from 'styled-components';
import { dnsLookup } from '../lib/lookup';

import Well from './Well';
import ActionBar from './ActionBar';
import SearchForm from './search/SearchForm';
import Results from './results/Results';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #F5F8FA;
`;

const PageTitle = styled.h1`
  font-weight: normal;
  color: ${props => props.shrink ? '#ccc' : '#333'};;
  font-size: ${props => props.shrink ? '1.25rem' : '1.5rem'};
  transition: all 0.2s ease-out 0.4s;
  margin-bottom: 2rem;
`;

const ResultsContainer = styled.section`
  max-height: ${props => props.expanded ? '50vh' : '0'}
  transition: max-height 0.3s ease-out 0.35s;
  padding: ${props => props.expanded ? '16px' : '0'};
`;


class App extends Component {
  state = {
    displayResults: false,
    fetching: false,
  }
  render() {
    const { displayResults, fetching, results } = this.state;
    return (
      <Main>
        <PageTitle shrink={displayResults}>Who Owns</PageTitle>
        <Well>
          <ActionBar expanded={displayResults}>
            <SearchForm onSearch={this._onSearch} fetching={fetching} />
          </ActionBar>
          <ResultsContainer expanded={displayResults}>
            <Results results={results} />
          </ResultsContainer>
        </Well>
      </Main>
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
      results: results
    }));
  }
}

export default App;
