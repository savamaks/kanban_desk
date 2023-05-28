import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement =screen.getByTestId('header');
  const mainElement = screen.getByTestId('main');
  const footerElement =screen.getByTestId('footer');

  expect(headerElement).toBeInTheDocument();
  expect(mainElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();


});
