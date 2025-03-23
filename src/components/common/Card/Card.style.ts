import styled, { css } from 'styled-components';
import SkeletonStyled from '@styles/skeleton';

const commonStyles = {
  cardBase: css`
    padding: 10px;
    width: 250px;
    border-radius: 15px;
    background: ${({ theme }) => theme.cardBg};
    border: ${({ theme }) => `1px solid ${theme.border}`};
  `,
  titleBase: css`
    margin: 7px 0;
  `,
  subtitleBase: css`
    font-weight: lighter;
  `,
};

const Container = styled.li`
  justify-self: center;
  align-self: center;
  ${commonStyles.cardBase}
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
  ${commonStyles.titleBase}
`;

const Subtitle = styled.p`
  font-weight: lighter;
  color: ${({ theme }) => theme.cardSubTitle};
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${commonStyles.subtitleBase}
`;

const ContainerSkeleton = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  ${commonStyles.cardBase}
  margin: 10px;
`;

const ThumnailSkeleton = styled.div`
  width: 100%;
  height: 200px;
  ${SkeletonStyled.skeletonElement}
`;

const TitleSkeleton = styled.p`
  ${commonStyles.titleBase}
  width: 150px;
  height: 10px;
  ${SkeletonStyled.skeletonElement}
`;

const SubtitleSkeleton = styled.p`
  ${commonStyles.subtitleBase}
  width: 50px;
  height: 10px;
  ${SkeletonStyled.skeletonElement}
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
