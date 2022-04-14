import styled from 'styled-components';
import { DEVICE } from '../../constants/device';

const Container = styled.div`
  position: absolute;
  right: 15px;
  margin-bottom: 50px;

  @media ${DEVICE.MOBILE} {
    right: 5px;
  }
`;

export default { Container };
