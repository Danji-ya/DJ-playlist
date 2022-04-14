/* eslint-disable react/no-array-index-key */
import { ISearchKeyword } from '../../@types/search';
import { icons } from '../../constants';
import Styled from './Search.style';

interface Props {
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
  delSearchHistory: (idx: number) => void;
  serachHistory: string[];
  isShow: boolean;
}

function History({
  handleSearchKeyword,
  delSearchHistory,
  serachHistory,
  isShow,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>, keyword: string) => {
    const element = e.target as HTMLLIElement;

    if (element.tagName === 'LI') {
      handleSearchKeyword({ value: keyword, isAutoKeyword: true });
    }
  };

  const handleClose = (idx: number) => {
    delSearchHistory(idx);
  };

  return (
    <Styled.HistoryContainer isShow={isShow}>
      <Styled.Title>최근 검색어</Styled.Title>
      {serachHistory &&
        serachHistory.map((keyword, idx) => (
          <Styled.List
            key={`${keyword}-${idx}`}
            onClick={(e) => handleClick(e, keyword)}
            aria-label="keyword"
          >
            {keyword}
            <Styled.CloseBtn
              onClick={() => handleClose(idx)}
              aria-label="close"
            >
              <icons.Close />
            </Styled.CloseBtn>
          </Styled.List>
        ))}
    </Styled.HistoryContainer>
  );
}

export default History;
