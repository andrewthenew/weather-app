import React from 'react';
import { render } from '@testing-library/react';
import App from '../weather-app/weather-app.component';
import { getById } from '../../shared/tests';


describe('Footer', () => {
  it('should render footer', () => {
    const { container, unmount } = render(<App />);
    const footer = getById(container, 'footer');
    expect(footer).toBeInTheDocument();
    unmount();
  });
});
