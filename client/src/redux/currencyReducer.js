import { GET_CURRENCIES } from "./types"

const initialState = {
    amd: 630.265353,
    eur: 1,
    usd: 1.213659
}

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCIES:
            return { ...state, amd: action.payload.amd, eur: action.payload.eur, usd: action.payload.usd }
        default: return state
    }
}