import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders children components', () => {
    render(
        <App>
          <h1>Hello, world!</h1>
        </App>
    );

    const childComponent = screen.getByText('Hello, world!');
    expect(childComponent).toBeInTheDocument();
  });
});