const initialState = {
    loading: false,
    data: null,
    error: null,
};

const countryData = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUNTRY_DATA':
            return {
                ...state,
                loading: true,
            };
        case 'SET_COUNTRY_DATA':
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case 'SET_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default countryData;