import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getById } from '../../shared/tests';
import App from '../weather-app/weather-app.component';


describe('Card', () => {
  it('should render at least 1 card after successful search', async () => {
    const {container, unmount} = render(<App />)
    const search = getById(container, 'searchBox');
    if (search) {
      userEvent.type(search, 'London');
      fireEvent.keyPress(search, { key: 'Enter' });
    }

    await waitFor(() => {
      const cards = screen.queryAllByRole('article');
      expect(cards[0]).toBeInTheDocument();
      unmount();
    });
  });
});
