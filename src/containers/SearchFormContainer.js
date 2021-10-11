import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';

function SearchFormContainer() {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (keyword.length > 1) {
      console.log('검색 중..', keyword);
    }
  };

  const handleChange = value => {
    setKeyword(value);
  };

  return <SearchForm keyword={keyword} handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default SearchFormContainer;
