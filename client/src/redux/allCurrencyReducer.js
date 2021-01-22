import { ALL_ARQ_CURRENCIES_EUR, ALL_ARQ_CURRENCIES_USD, ALL_VACH_CURRENCIES_EUR, ALL_VACH_CURRENCIES_USD } from "./types"

const initialState = {
    allarqcurrencyusd: [],
    allvachcurrencyusd: [],
    allarqcurrencyeur: [],
    allvachcurrencyeur: []
}

export const allCurrencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_ARQ_CURRENCIES_USD:
            return { ...state, allarqcurrencyusd: state.allarqcurrencyusd.concat([action.payload]) }
        case ALL_VACH_CURRENCIES_USD:
            return { ...state, allvachcurrencyusd: state.allvachcurrencyusd.concat([action.payload]) }
        case ALL_ARQ_CURRENCIES_EUR:
            return { ...state, allarqcurrencyeur: state.allarqcurrencyeur.concat([action.payload]) }
        case ALL_VACH_CURRENCIES_EUR:
            return { ...state, allvachcurrencyeur: state.allvachcurrencyeur.concat([action.payload]) }
        default: return state
    }
}