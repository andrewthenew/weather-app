import React from 'react';
import { render, queryByAttribute, waitFor } from '@testing-library/react';
import App from './App';

const getById = queryByAttribute.bind(null, 'id');


describe('WeatherApp', () => {
  it('should render app wrapper', async () => {
    const view = render(<App />);

    const app = getById(view.container, 'weatherApp');
    await waitFor(() => {
      expect(app).toBeInTheDocument();
    });
  });

  it('should render header', async () => {
    const view = render(<App />);

    const header = getById(view.container, 'header');
    await waitFor(() => {
      expect(header).toBeInTheDocument();
    });
  });

  it('should render search box', async () => {
    const view = render(<App />);

    const search = getById(view.container, 'searchBox');
    await waitFor(() => {
      expect(search).toBeInTheDocument();
    });
  });
});


