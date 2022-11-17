import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from '../weather-app/weather-app.component';
import userEvent from '@testing-library/user-event';

import { getById } from '../../shared/tests';

describe('Cards', () => {
  it('should not render cards wrapper initially', () => {
    const { container, unmount } = render(<App />);
    const cards = getById(container, 'cards');
    expect(cards).not.toBeInTheDocument();
    unmount();
  });

  it('should render cards wrapper after successful search', async () => {
    const { container, unmount } = render(<App />);
    const search = getById(container, 'searchBox');
    const searchButton = getById(container, 'searchButton');

    if (search) userEvent.type(search, 'Cairo');
    if (searchButton) userEvent.click(searchButton);

    await waitFor(() => {
      const cards = getById(container, 'cards');
      expect(cards).toBeInTheDocument();
      unmount();
    });
  });
});
