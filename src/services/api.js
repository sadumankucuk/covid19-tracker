import env from '@beam-australia/react-env';
import axios from 'axios';

const RAPID_API_KEY = env('RAPID_API_KEY');


export const getCovidDataByCountry = async (countryCode) => {
    try {
        const response = await axios.get(
            `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${countryCode}`,
            {
            headers: {
                'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
                'x-rapidapi-key': RAPID_API_KEY
            }
        });

        if(!response.data.error) {
            return response;
        } else {
            throw new Error('Could not get COVID-19 data for the country.');
        }

    } catch (error) {
        throw new Error('Could not get COVID-19 data for the country.');
    }
};