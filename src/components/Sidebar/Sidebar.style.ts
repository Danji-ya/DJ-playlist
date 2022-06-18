import styled from 'styled-components';
import { STYLE } from '../../constants';
import { DEVICE } from '../../constants/device';

const Container = styled.aside`
  position: absolute;
  top: 15px;
  right: 15px;

  @media ${DEVICE.DESKTOP} {
    top: calc(15px + ${STYLE.HEADER_HEIGHT});
  }

  @media ${DEVICE.MOBILE} {
    right: 5px;
  }
`;

export default { Container };
