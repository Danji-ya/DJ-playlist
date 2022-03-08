/* eslint-disable react/no-array-index-key */
import Close from '../../assets/icons/close.svg';
import {
  CloseBtn,
  HistoryContainer,
  List,
  Title,
} from '../../styles/searchForm';

interface Props {
  handleSearchKeyword: (value: string, isAutoKeyword?: boolean) => void;
  delSearchHistory: (idx: number) => void;
  serachHistory: string[];
  isFocus: boolean;
}

function SearchHistory({
  handleSearchKeyword,
  delSearchHistory,
  serachHistory,
  isFocus,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>, keyword: string) => {
    const element = e.target as HTMLLIElement;

    if (element.tagName === 'LI') {
      handleSearchKeyword(keyword, true);
    }
  };

  const handleClose = (idx: number) => {
    delSearchHistory(idx);
  };
  // TODO: hidden show
  return (
    <HistoryContainer isFocus>
      <Title>최근 검색어</Title>
      {serachHistory &&
        serachHistory.map((keyword, idx) => (
          <List
            key={`${keyword}-${idx}`}
            onClick={(e) => handleClick(e, keyword)}
          >
            {keyword}
            <CloseBtn onClick={() => handleClose(idx)}>
              <Close />
            </CloseBtn>
          </List>
        ))}
    </HistoryContainer>
  );
}

export default SearchHistory;
