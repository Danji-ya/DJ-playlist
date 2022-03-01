import styled from 'styled-components';

const MainBodyContainer = styled.main`
  position: relative;
  margin-left: 250px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 80px;
  }
`;

const DjplayContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1rem;
  width: 60vw;

  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

const PlaylistTitleWrapper = styled.div`
  width: 65px;
  height: 65px;
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

  /* @media (max-width: 1024px) {
    display: none;
  } */
`;

export { MainBodyContainer, DjplayContainer, PlaylistTitleWrapper };
