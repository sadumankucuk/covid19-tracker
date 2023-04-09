import { put, fork, all, takeEvery, call } from 'redux-saga/effects';
import {setCountryData, setError} from "./actions";
import * as CountryDataActionTypes from '../country/types';
import { getCovidDataByCountry } from '../../services/api';
import axios from 'axios';


export function* workerSaga(action) {
    try {
        const response = yield call(getCovidDataByCountry, action.payload);
        const countryData = response.data.data;
        yield put(setCountryData(countryData));
    } catch (error) {
        yield put(setError('Could not get COVID-19 data for the country.'));
    }
}

export function* watcherCountrySaga() {
    yield takeEvery(CountryDataActionTypes.GET_COUNTRY_DATA, workerSaga);
}

function* CountryDataSaga() {
    yield all([fork(watcherCountrySaga)]);
}

export default CountryDataSaga;
