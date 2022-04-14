import styled from 'styled-components';

const Title = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: white;
  position: relative;
  margin-bottom: 50px;
  align-self: center;
  background: ${({ theme }) => theme.navTextPrimary};
  fill: ${({ theme }) => theme.body};
`;

export default { Title };
