import React, { useEffect, useRef, useState } from 'react';
import { LabelA11Y } from '@styles/common';
import { useSearchForm } from '@contexts/SearchFormContext';
import { useClickOutside } from '@services/hooks/useClickOutside';
import icons from '@constants/icons';
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

    onSearchKeywordChange(currentValue);
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
    <Styled.FormContainer ref={containerRef} onBlur={handleBlur}>
      <Styled.InputWrapper autoComplete="off" onSubmit={handleSubmit}>
        <LabelA11Y htmlFor="searchInput">Search Input</LabelA11Y>
        <Styled.InputBox
          id="searchInput"
          type="text"
          placeholder="Search for songs, albums, and artists"
          value={currentInputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          aria-label="Search for songs, albums, and artists"
        />
        <Styled.BtnWrapper type="submit" aria-label="search button">
          <icons.Search />
        </Styled.BtnWrapper>
      </Styled.InputWrapper>
      <History isShow={shouldShowHistory} />
    </Styled.FormContainer>
  );
}

export default Form;
