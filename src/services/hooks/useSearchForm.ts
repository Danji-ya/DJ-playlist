import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import Form from '@components/Search/Form';
import { keywordState } from '@store/keywordState';
import { ISearchKeyword } from '@typings/search';

const useSearchForm = ({
  onAddSearchHistory,
}: {
  onAddSearchHistory: (keyword: string) => void;
}) => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const formRef = useRef<React.ElementRef<typeof Form>>(null);

  const onSearchKeywordChange = ({ value, isAutoKeyword }: ISearchKeyword) => {
    if (isAutoKeyword) formRef.current?.handleQuery(value);

    setKeyword(value);
    onAddSearchHistory(value);
  };

  return {
    keyword,
    formRef,
    onSearchKeywordChange,
  };
};

export default useSearchForm;
