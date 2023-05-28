import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './Main';
import Main from './Main';

test('renders Main react link', () => {
  render(<Main />);
  ;
 

  expect(screen.getByText('Backlog')).toBeInTheDocument();
 

});
