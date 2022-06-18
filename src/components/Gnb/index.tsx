/* eslint-disable react/no-unstable-nested-components */
import Styled from './Gnb.style';
import { PATH } from '../../constants/path';
import { icons } from '../../constants';
import { H2A11Y } from '../../styles/common';

interface Props {
  path: string;
  handlePath: (url: string) => void;
}

function Gnb({ path, handlePath }: Props) {
  const navItems = [
    {
      name: '홈',
      path: PATH.MAIN,
      Icon: (props: { width: string; height: string }) => (
        <icons.Home {...props} />
      ),
    },
    {
      name: '검색하기',
      path: PATH.SEARCH,
      Icon: (props: { width: string; height: string }) => (
        <icons.Search {...props} />
      ),
    },
  ];

  return (
    <Styled.Container>
      <H2A11Y>메뉴</H2A11Y>
      <Styled.List>
        {navItems.map((item) => {
          return (
            <Styled.Item
              key={`${item.path}`}
              active={item.path === path}
              onClick={() => handlePath(item.path)}
              aria-label="navigation button"
            >
              <Styled.IconWrapper>
                <item.Icon width="25px" height="25px" />
              </Styled.IconWrapper>
              <p>{item.name}</p>
            </Styled.Item>
          );
        })}
      </Styled.List>
    </Styled.Container>
  );
}

export default Gnb;
