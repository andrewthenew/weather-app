import React, { FC, forwardRef, useEffect } from 'react';
import { SearchProps } from './search.types';


const Search: FC<SearchProps> = forwardRef((props, ref) => {
  const { onSearch } = props;
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && onSearch && typeof ref === 'object') {
      const val = ref?.current?.value || '';
      if (val !== '') onSearch(val);
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    }
  }, []);


  return (
    <input ref={ref} type="search" role="searchbox" id="searchBox" placeholder="e.g. London" />
  );
});

export default Search;
