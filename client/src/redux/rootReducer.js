import { combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";
import { allCurrencyReducer } from './allCurrencyReducer'

export const rootReducer = combineReducers({
    currency: currencyReducer,
    allarqcurency: allCurrencyReducer
})