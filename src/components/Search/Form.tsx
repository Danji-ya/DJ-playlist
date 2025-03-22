import React, { useEffect, useRef, useState } from 'react';
import { LabelA11Y } from '@styles/common';
import icons from '@constants/icons';
import { useSearchForm } from '@contexts/SearchFormContext';
import { useClickOutside } from '@services/hooks/useClickOutside';
import History from './History';
import Styled from './Search.style';

function Form() {
  const {
    keyword,
    searchControls: { onSearchKeywordChange },
  } = useSearchForm();
  const [currentInputValue, setCurrentInputValue] = useState(keyword || '');
  const [isActiveHistory, setIsActiveHistory] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { handleBlur } = useClickOutside(containerRef, {
    onOutsideClick: () => setIsActiveHistory(false),
    onOutsideBlur: () => setIsActiveHistory(false),
    enabled: isActiveHistory,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentValue = currentInputValue.trim();

    if (currentValue.length === 0 || keyword === currentValue) return;

    onSearchKeywordChange({ value: currentValue });
  };

  const handleFocus = () => {
    setIsActiveHistory(true);
  };

  useEffect(() => {
    if (keyword) {
      setCurrentInputValue(keyword);
    }
  }, [keyword]);

  const shouldShowHistory = isActiveHistory && currentInputValue === '';

  return (
    <Styled.Container ref={containerRef} onBlur={handleBlur}>
      <Styled.SearchFormWrapper autoComplete="off" onSubmit={handleSubmit}>
        <LabelA11Y htmlFor="searchInput">검색창</LabelA11Y>
        <Styled.InputBox
          id="searchInput"
          type="text"
          placeholder="검색어를 입력해주세요"
          value={currentInputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
        />
        <Styled.BtnWrapper type="submit" aria-label="search button">
          <icons.Search />
        </Styled.BtnWrapper>
      </Styled.SearchFormWrapper>
      <History isShow={shouldShowHistory} />
    </Styled.Container>
  );
}

export default Form;
