import styled from 'styled-components';

const InputGroup = styled.div`
  display: flex;
  font-size: 20px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  
  & > :first-child {
    flex: 1;
    border-radius: 4px 0 0 4px;
  }

  & > :last-child {
    border-radius: 0 4px 4px 0;
  }
`;

export default InputGroup;