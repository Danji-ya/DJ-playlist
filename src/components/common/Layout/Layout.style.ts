import styled from 'styled-components';
import { STYLE } from '../../../constants';
import { DEVICE, SIZE } from '../../../constants/device';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: ${SIZE.MIN_MOBILE};
  max-width: ${SIZE.MAX_DESKTOP};
  padding-left: ${() => `calc(${STYLE.HEADER_WIDTH} + 45px)`};
  padding-right: 45px;
  padding-bottom: ${STYLE.PLAYER_HEIGHT};
  margin: 3vh auto;

  @media ${DEVICE.DESKTOP} {
    padding: 80px 45px;
  }
`;

export default { Container };
