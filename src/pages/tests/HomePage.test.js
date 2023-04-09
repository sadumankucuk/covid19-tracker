import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from '../HomePage';
import { BrowserRouter } from 'react-router-dom';
import mapboxgl from "mapbox-gl";

jest.mock('mapbox-gl', () => ({
    Map: jest.fn(),
    Popup: jest.fn(),
}));

mapboxgl.Map.prototype = {
    on: jest.fn(),
    remove: jest.fn(),
    off: jest.fn(),
    getCanvas: jest.fn(),
};

mapboxgl.Popup.prototype = {
    remove: jest.fn(),
};

const mockStore = configureStore()({
    // your initial state here
});

describe('HomePage', () => {
    test('should render the WorldMap component', () => {
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByTestId('world-map')).toBeInTheDocument();
    });
});