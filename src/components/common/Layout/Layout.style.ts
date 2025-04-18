import styled from 'styled-components';
import { DEVICE, SIZE } from '@constants/device';
import { LAYOUT } from '@constants/layout';

const Container = styled.main`
  display: grid;
  grid-template-areas:
    'sidebar content'
    'player player';
  grid-template-columns: ${LAYOUT.HEADER_WIDTH} 1fr;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding-bottom: ${LAYOUT.PLAYER_HEIGHT};

  @media ${DEVICE.DESKTOP} {
    grid-template-areas:
      'header header'
      'content content'
      'player player';
    grid-template-columns: 1fr;
    grid-template-rows: ${LAYOUT.HEADER_HEIGHT} 1fr auto;
  }
`;

const ContentArea = styled.section`
  grid-area: content;
  position: relative;
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - ${LAYOUT.PLAYER_HEIGHT});
  padding: 33px 0;

  > * {
    max-width: ${SIZE.MAX_DESKTOP};
    margin: 0 auto;
  }

  @media ${DEVICE.DESKTOP} {
    height: calc(100vh - ${LAYOUT.HEADER_HEIGHT} - ${LAYOUT.PLAYER_HEIGHT});
  }
`;

export default { Container, ContentArea };
