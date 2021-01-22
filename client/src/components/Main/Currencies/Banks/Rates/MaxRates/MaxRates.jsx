import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './MaxRates.scss'

function MaxRates({ maxarqcurrencyusd, maxvachcurrencyusd, maxarqcurrencyeur, maxvachcurrencyeur }) {
    const { t } = useTranslation()

    const maxArqUsd = Math.max(...maxarqcurrencyusd)
    const maxVachUsd = Math.max(...maxvachcurrencyusd)
    const maxArqEur = Math.max(...maxarqcurrencyeur)
    const maxVachEur = Math.max(...maxvachcurrencyeur)
    return (
        <div className="rates">
            <div className="maximum">{t('Rates.2')}</div>
            <div className="max_a_usd">{maxArqUsd}</div>
            <div className="max_v_usd">{maxVachUsd}</div>
            <div className="max_a_eur">
                <div className="amd">{maxArqEur}</div>
            </div>
            <div className="max_v_eur">
                <div className="eur">{maxVachEur}</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        maxarqcurrencyusd: state.allarqcurency.allarqcurrencyusd,
        maxvachcurrencyusd: state.allarqcurency.allvachcurrencyusd,
        maxarqcurrencyeur: state.allarqcurency.allarqcurrencyeur,
        maxvachcurrencyeur: state.allarqcurency.allvachcurrencyeur
    }
}

export default connect(mapStateToProps, null)(MaxRates);