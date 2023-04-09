import { getCovidDataByCountry } from './api';

jest.mock('./api', () => ({
    getCovidDataByCountry: jest.fn()
}));

describe('getCovidDataByCountry mock test', () => {
    const mockCountryCode = 'TR';
    const mockResponse = {
        data: { confirmed: 1000, deaths: 10, recovered: 500 },
        headers: {
            'x-rapidapi-key': 'valid-api-key'
        }
    };

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should return the covid data for the given country code', async () => {
        getCovidDataByCountry.mockResolvedValueOnce(mockResponse);

        const result = await getCovidDataByCountry(mockCountryCode);

        expect(result).toEqual(mockResponse);
        expect(getCovidDataByCountry).toHaveBeenCalledTimes(1);
        expect(getCovidDataByCountry).toHaveBeenCalledWith(mockCountryCode);
    });

    test('should throw an error if the response data has an error property', async () => {
        getCovidDataByCountry.mockRejectedValueOnce(new Error('Could not get COVID-19 data for the country.'));

        await expect(getCovidDataByCountry(mockCountryCode)).rejects.toThrow('Could not get COVID-19 data for the country.');
        expect(getCovidDataByCountry).toHaveBeenCalledTimes(1);
        expect(getCovidDataByCountry).toHaveBeenCalledWith(mockCountryCode);
    });

    test('should throw an error if the request fails', async () => {
        getCovidDataByCountry.mockRejectedValueOnce(new Error('Could not get COVID-19 data for the country.'));

        await expect(getCovidDataByCountry(mockCountryCode)).rejects.toThrow('Could not get COVID-19 data for the country.');
        expect(getCovidDataByCountry).toHaveBeenCalledTimes(1);
        expect(getCovidDataByCountry).toHaveBeenCalledWith(mockCountryCode);
    });
});
