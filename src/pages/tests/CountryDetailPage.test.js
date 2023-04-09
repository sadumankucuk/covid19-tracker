import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useParams } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CountryDetailPage from '../CountryDetailPage';

// mock country data
const mockCountryData = {
    location: 'Turkey',
    confirmed: 1000,
    deaths: 10,
    recovered: 500,
    lastChecked: '2023-04-09T02:07:06+00:00',
};

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ countryCode: 'TR' }),
}));

describe('CountryDetailPage', () => {
    const mockStore = configureStore()({
        countryData: {
            data: mockCountryData,
        },
    });

    test('should render the correct country details', () => {
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <CountryDetailPage />
                </BrowserRouter>
            </Provider>
        );

        // check if the country data is rendered correctly
        expect(screen.getByText(/turkey/i)).toBeInTheDocument();
        expect(screen.getByText(/total cases/i)).toBeInTheDocument(mockCountryData.confirmed);
        expect(screen.getByText(/total deaths/i)).toBeInTheDocument(mockCountryData.deaths);
        expect(screen.getByText(/recovered/i)).toBeInTheDocument(mockCountryData.recovered);
        expect(screen.getByText(/last checked/i)).toBeInTheDocument('2023-04-09 02:07:06');
    });
});