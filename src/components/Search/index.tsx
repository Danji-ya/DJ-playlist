import { Suspense } from 'react';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Error from '@components/common/Error';
import Carousel from '@components/Carousel';
import Form from './Form';
import ResultLoading from './ResultLoading';
import Result from './Result';
import Styled from './Search.style';

function Search() {
  return (
    <>
      <Form />
      <Carousel title={<Styled.MainTitle>인기 검색어</Styled.MainTitle>} />
      <Styled.SearchResultWrapper>
        <Styled.MainTitle>검색 결과</Styled.MainTitle>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<ResultLoading />}>
            <Result />
          </Suspense>
        </ErrorBoundary>
      </Styled.SearchResultWrapper>
    </>
  );
}

export default Search;
