import React from 'react';

export interface SearchProps {
  ref: React.Ref<HTMLInputElement>;
  onSearch?: (location: string) => void;
}
