import styled from 'styled-components';

const Img = styled.img<{ rounded: boolean }>`
  width: 100%;
  height: 100%;
  background: transparent;
  visibility: hidden;
  border-radius: ${({ rounded }) => (rounded ? '15px' : '0')};
`;

export default { Img };
