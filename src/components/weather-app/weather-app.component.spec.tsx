import React from 'react';
import { render } from '@testing-library/react';
import App from './weather-app.component';

import { getById } from '../../shared/tests';


describe('WeatherApp', () => {
  it('should render app wrapper', () => {
    const { container, unmount } = render(<App />);
    const app = getById(container, 'weatherApp');
    expect(app).toBeInTheDocument();
    unmount();
  });

  it('should render header', () => {
    const { container, unmount } = render(<App />);
    const header = getById(container, 'header');
    expect(header).toBeInTheDocument();
    unmount();
  });
});


