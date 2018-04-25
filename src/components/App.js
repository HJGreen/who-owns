import React, { Component } from 'react';
import styled from 'styled-components';

import Well from './Well';
import ActionBar from './ActionBar';
import SearchForm from './search/SearchForm';

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

const Results = styled.section`
  max-height: ${props => props.expanded ? '50vh' : '0'}
  transition: max-height 0.5s ease-out 0.4s;
`;

const ResultsInner = styled.section`
  height: 50vh;
`;

class App extends Component {
  state = {
    displayResults: false,
    fetching: false,
  }
  render() {
    const { displayResults, fetching } = this.state;
    return (
      <Main>
        <PageTitle shrink={displayResults}>Who Owns</PageTitle>
        <Well>
          <ActionBar expanded={displayResults}>
            <SearchForm style={{ width: '80vw' }} onSearch={this._onSearch} fetching={fetching} />
          </ActionBar>
          <Results expanded={displayResults}>
            <ResultsInner />
          </Results>
        </Well>
      </Main>
    );
  }

  _onSearch = () => {
    this.setState(() => ({ fetching: true }));

    setTimeout(() => {
      this.setState(() => ({ fetching: false, displayResults: true }))
    }, 1500);
  }
}

export default App;
