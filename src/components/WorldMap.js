import React, { useRef, useEffect } from 'react';
import env from '@beam-australia/react-env';
import mapboxgl from 'mapbox-gl';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountryData } from '../redux/actions';
import { useErrorHandler } from '../hooks/useErrorHandler';


// Replace with your Mapbox access token
const MAPBOX_ACCESS_TOKEN = env('MAPBOX_TOKEN');

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const WorldMap = () => {
    const mapContainerRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleError } = useErrorHandler();


    useEffect(() => {
        let map;
        try {
             map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                zoom: 1.5,
                center: [0, 20],
            });

            // Add country boundaries source and layer
            map.on('load', () => {
                map.addSource('country-boundaries', {
                    type: 'vector',
                    url: 'mapbox://mapbox.country-boundaries-v1',
                });

                map.addLayer({
                    id: 'country-boundaries',
                    type: 'fill',
                    source: 'country-boundaries',
                    'source-layer': 'country_boundaries',
                    paint: {
                        'fill-color': 'rgba(200, 100, 240, 0)',
                        'fill-outline-color': 'rgba(200, 100, 240, 0)',
                    },
                });
            });

            map.on('click', 'country-boundaries', (event) => {
                const countryCode = event.features[0].properties.name_en;
                dispatch(getCountryData(countryCode));
                navigate(`/country/${countryCode}`);
            });

            map.on('mouseenter', 'country-boundaries', () => {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'country-boundaries', () => {
                map.getCanvas().style.cursor = '';
            });
        } catch (error) {
            handleError(error);
        }


        return () => {
            if(map)
                map.remove();
        };
    }, []);

    return (
        <div>
            <div className='map-container' ref={mapContainerRef} data-testid="world-map"/>
        </div>
    );
};

export default WorldMap;



