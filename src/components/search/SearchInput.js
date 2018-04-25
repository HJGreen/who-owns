import styled from 'styled-components';

const SearchInput = styled.input`
  height: 48px;
  border: none;
  padding: 0 16px;
  font-size: inherit;
  background-color: ${props => props.readOnly ? '#f9f9f9' : '#fff'}
  color: ${props => props.readOnly ? '#999' : '#2d2d2d'}
  &:focus {
    outline: none;
  }
`;

export default SearchInput;