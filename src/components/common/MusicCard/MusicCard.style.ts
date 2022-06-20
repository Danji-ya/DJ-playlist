import styled from 'styled-components';

const Container = styled.li``;

const Contents = styled.div`
  justify-self: center;
  align-self: center;
  padding: 10px;
  border-radius: 15px;
  width: 250px;

  background: ${({ theme }) => theme.cardBg};
  border: ${({ theme }) => `1px solid ${theme.border}`};
`;

const PlayBtnWrapper = styled.div`
  position: absolute;
  visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  fill: #fff;
`;

const Profile = styled.button`
  position: relative;
  display: flex;
  height: 200px;
  padding: 0;
  border: none;
  background: none;

  cursor: pointer;

  &:hover,
  &:focus {
    img {
      filter: brightness(0.31);
    }

    ${PlayBtnWrapper} {
      visibility: visible;
    }
  }
`;

const Title = styled.p`
  font-weight: bolder;
  font-size: 0.9rem;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
  overflow: hidden;
  margin: 7px 0;
`;

const Subtitle = styled.p`
  font-weight: lighter;
  color: ${({ theme }) => theme.cardSubTitle};
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 5px 0;
`;

export default {
  Container,
  Contents,
  Profile,
  Title,
  Subtitle,
  PlayBtnWrapper,
};
