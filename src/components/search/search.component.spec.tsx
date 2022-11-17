import React from 'react';
import { render } from '@testing-library/react';
import App from '../weather-app/weather-app.component';

import { getById } from '../../shared/tests';


describe('Search', () => {
  it('should render search box', () => {
    const { container, unmount } = render(<App />);
    const search = getById(container, 'searchBox');
    expect(search).toBeInTheDocument();
    unmount();
  });
});
