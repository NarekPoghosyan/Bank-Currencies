import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './MinRates.scss'

function MinRates({ minarqcurrencyusd, minvachcurrencyusd, minarqcurrencyeur, minvachcurrencyeur }) {
    const { t } = useTranslation()
    const minArqUsd = Math.min(...minarqcurrencyusd)
    const minVachUsd = Math.min(...minvachcurrencyusd)
    const minArqEur = Math.min(...minarqcurrencyeur)
    const minVachEur = Math.min(...minvachcurrencyeur)
    return (
        <div className="rates">
            <div className="minimum">{t('Rates.1')}</div>
            <div className="min_a_usd">{minArqUsd}</div>
            <div className="min_v_usd">{minVachUsd}</div>
            <div className="min_a_eur">
                <div className="amd">{minArqEur}</div>
            </div>
            <div className="min_v_eur">
                <div className="eur">{minVachEur}</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        minarqcurrencyusd: state.allarqcurency.allarqcurrencyusd,
        minvachcurrencyusd: state.allarqcurency.allvachcurrencyusd,
        minarqcurrencyeur: state.allarqcurency.allarqcurrencyeur,
        minvachcurrencyeur: state.allarqcurency.allvachcurrencyeur
    }
}

export default connect(mapStateToProps, null)(MinRates);