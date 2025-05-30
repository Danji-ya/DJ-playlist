import styled from 'styled-components';

const Container = styled.section`
  padding: 0;
`;

const Playlist = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 3rem;
  width: 100%;
  justify-items: center;
  justify-content: center;
  padding: 0 55px;
`;

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

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  fill: ${({ theme }) => theme.navTextPrimary};
  color: ${({ theme }) => theme.navTextPrimary};
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'BMHANNAPro', sans-serif;
`;

export default { Container, Playlist, Title, EmptyWrapper, EmptyTitle };
