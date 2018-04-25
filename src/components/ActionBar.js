import styled from 'styled-components';

const ActionBar = styled.header`
  padding: ${props => props.expanded ? '16px' : '0'};
  background-color: #3EA1FA;
  transition: padding 0.2s ease-out;
`;

export default ActionBar;