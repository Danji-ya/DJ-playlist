import styled from 'styled-components';

const MainBodyContainer = styled.main`
  position: relative;
  margin-left: 250px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DjplayContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1rem;
  width: 60vw;
`;

const PlaylistTitleWrapper = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: white;
  position: relative;
  margin: 2vh 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { MainBodyContainer, DjplayContainer, PlaylistTitleWrapper };
