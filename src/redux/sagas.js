import { all } from "redux-saga/effects";

import CountryDataSaga from "./country/saga";

export default function* rootSaga() {
    yield all([CountryDataSaga()])
}