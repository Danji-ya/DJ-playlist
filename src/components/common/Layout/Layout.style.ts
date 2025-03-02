import styled from 'styled-components';
import { DEVICE, SIZE } from '@constants/device';
import { LAYOUT } from '@constants/layout';

const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: ${SIZE.MIN_MOBILE};
  max-width: ${SIZE.MAX_DESKTOP};
  padding-top: 30px;
  padding-right: 55px;
  padding-bottom: calc(30px + ${LAYOUT.PLAYER_HEIGHT});
  padding-left: ${() => `calc(${LAYOUT.HEADER_WIDTH} + 55px)`};
  margin: 0 auto;

  @media ${DEVICE.DESKTOP} {
    padding-top: calc(30px + ${LAYOUT.HEADER_HEIGHT});
    padding-left: 55px;
  }
`;

export default { Container };
