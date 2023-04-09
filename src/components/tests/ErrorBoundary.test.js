import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from '../ErrorPage';

describe('ErrorPage', () => {
    test('renders ErrorPage component', () => {
        render(<ErrorPage />);
        const heading = screen.getByText('Oops! Bir hata oluştu.');
        const link = screen.getByRole('link', { name: /tıklayın/i });

        expect(heading).toBeInTheDocument();
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
    });

    // Add more tests as needed
});
