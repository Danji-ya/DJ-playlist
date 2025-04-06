import styled from 'styled-components';
import { DEVICE } from '@constants/device';

const Container = styled.aside`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;

  @media ${DEVICE.MOBILE} {
    right: 5px;
  }
`;

export default { Container };
