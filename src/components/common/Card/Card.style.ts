import styled, { css, keyframes } from 'styled-components';

const Container = styled.li`
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

const loading = keyframes`
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(150%);
  }
`;

const Element = css`
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.skeletonBg};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.skeletonLoading};
    animation: ${loading} 1.5s infinite;
  }
`;

const ContainerSkeleton = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  width: 250px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;

  background: ${({ theme }) => theme.cardBg};
  border: ${({ theme }) => `1px solid ${theme.border}`};
`;

const ThumnailSkeleton = styled.div`
  width: 100%;
  height: 200px;
  ${Element}
`;

const TitleSkeleton = styled.p`
  margin: 7px 0;
  width: 150px;
  height: 10px;
  ${Element}
`;

const SubtitleSkeleton = styled.p`
  margin: 5px 0;
  width: 50px;
  height: 10px;
  ${Element}
`;

export default {
  Container,
  Profile,
  Title,
  Subtitle,
  PlayBtnWrapper,
  ContainerSkeleton,
  ThumnailSkeleton,
  TitleSkeleton,
  SubtitleSkeleton,
};
