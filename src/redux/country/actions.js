export const getCountryData = (countryCode) => ({
    type: 'GET_COUNTRY_DATA',
    payload: countryCode,
});

export const setCountryData = (countryData) => ({
    type: 'SET_COUNTRY_DATA',
    payload: countryData,
});

export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error,
});