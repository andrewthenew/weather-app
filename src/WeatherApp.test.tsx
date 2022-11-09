import React from 'react';
import { render, queryByAttribute, waitFor } from '@testing-library/react';
import WeatherApp from './WeatherApp';

const getById = queryByAttribute.bind(null, 'id');


describe('WeatherApp', () => {
  it('should render main app', async () => {
    const view = render(<WeatherApp />);

    const mainElement = getById(view.container, 'weatherApp');
    await waitFor(() => {
      expect(mainElement).toBeInTheDocument();
    });
  });
});


