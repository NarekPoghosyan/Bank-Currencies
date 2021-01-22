import { GET_CURRENCIES } from './types'

const initalState = {
    amd: null,
    eur: null,
    usd: null
}

export const currencyReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_CURRENCIES:
            return { ...state, amd: action.payload.amd, eur: action.payload.eur, usd: action.payload.usd }
        default: return state;
    }
}