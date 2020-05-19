import styled from 'styled-components';

const SearchButton = styled.button`
  height: 48px;
  padding: 0 8px;
  min-width: 64px;
  border: none;
  background-color: #76d18f;
  font-size: 0.75em;
  color: #334d3a;
  font-weight: bold;
  font-family: inherit;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`;

export default SearchButton;
