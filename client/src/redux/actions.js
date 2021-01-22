import { ALL_ARQ_CURRENCIES_USD, ALL_VACH_CURRENCIES_USD, ALL_ARQ_CURRENCIES_EUR, ALL_VACH_CURRENCIES_EUR, GET_CURRENCIES } from "./types";

export function getCurrencies(currency) {
    return {
        type: GET_CURRENCIES,
        payload: currency
    }
}

export function allArqCurrencyUsd(currencies) {
    return {
        type: ALL_ARQ_CURRENCIES_USD,
        payload: currencies
    }
}

export function allVachCurrencyUsd(currencies) {
    return {
        type: ALL_VACH_CURRENCIES_USD,
        payload: currencies
    }
}

export function allArqCurrencyEur(currencies) {
    return {
        type: ALL_ARQ_CURRENCIES_EUR,
        payload: currencies
    }
}

export function allVachCurrencyEur(currencies) {
    return {
        type: ALL_VACH_CURRENCIES_EUR,
        payload: currencies
    }
}