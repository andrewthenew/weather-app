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

  it('should render header', async () => {
    const view = render(<WeatherApp />);

    const header = getById(view.container, 'header');
    await waitFor(() => {
      expect(header).toBeInTheDocument();
    });
  });

  it('should render search box', async () => {
    const view = render(<WeatherApp />);

    const search = getById(view.container, 'searchBox');
    await waitFor(() => {
      expect(search).toBeInTheDocument();
    });
  });
});


