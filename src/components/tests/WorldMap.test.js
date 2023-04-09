import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useNavigate } from 'react-router-dom';
import WorldMap from '../WorldMap';

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

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('WorldMap', () => {
    const mockStore = configureStore()({
        // your initial state here
    });

    test('renders WorldMap component', () => {
        render(
            <Provider store={mockStore}>
                <Router>
                    <WorldMap />
                </Router>
            </Provider>
        );
        const mapElement = screen.getByTestId('world-map');
        expect(mapElement).toBeInTheDocument();
    });

    test('map click event triggers navigation', () => {
        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);

        const clickCallback = jest.fn();
        const mapMock = { on: jest.fn(), remove: jest.fn() };
        mapboxgl.Map.mockImplementation(() => mapMock);
        mapMock.on.mockImplementation((event, callback) => {
            if (event === 'click') {
                clickCallback.mockImplementation(callback);
            }
        });

        render(
            <Provider store={mockStore}>
                <Router>
                    <WorldMap />
                </Router>
            </Provider>
        );

        fireEvent.click(screen.getByTestId('world-map'));
        expect(useNavigate).toHaveBeenCalled();
    });
});