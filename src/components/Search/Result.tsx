import { IMusic } from '../../@types/music';
import Styled from './Search.style';
import MusicCard from '../common/MusicCard';
import ResultEmpty from './ResultEmpty';
import Skeleton from '../Skeleton';
import ErrorBoundary from '../common/ErrorBoundary';

interface Props {
  musicList: undefined | IMusic[];
  handleSelectMusic: (music: IMusic) => void;
  isLoading: boolean;
}

function Result({ musicList, handleSelectMusic, isLoading }: Props) {
  return (
    <Styled.SearchResultSection>
      <Styled.SearchResultTitle>검색 결과</Styled.SearchResultTitle>
      <ErrorBoundary>
        <Styled.SearchResultContainer>
          <Styled.SearchResultGrid>
            {isLoading ? (
              Array.from({ length: 8 }, (_v, i) => i + 1).map((item) => (
                <Skeleton key={item} />
              ))
            ) : (
              <>
                {musicList && musicList.length > 0 ? (
                  <>
                    {musicList.map((item: IMusic) => (
                      <MusicCard
                        item={item}
                        handleSelectMusic={handleSelectMusic}
                        key={item.videoId}
                      />
                    ))}
                  </>
                ) : (
                  musicList && <ResultEmpty />
                )}
              </>
            )}
          </Styled.SearchResultGrid>
        </Styled.SearchResultContainer>
      </ErrorBoundary>
    </Styled.SearchResultSection>
  );
}

export default Result;
