import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { allArqCurrencyUsd } from '../../../../../redux/actions'
import { allVachCurrencyUsd } from '../../../../../redux/actions'
import { allArqCurrencyEur } from '../../../../../redux/actions'
import { allVachCurrencyEur } from '../../../../../redux/actions'
import './InecoBank.scss'

const InecoBank = ({ allArqCurrencyUsd, allVachCurrencyUsd, allArqCurrencyEur, allVachCurrencyEur, amd, eur, usd }) => {
    const { t } = useTranslation()
    let defArqUsd = Math.floor(amd / usd)
    let defVachUsd = Math.floor(amd / usd)
    let defArqEur = Math.floor(amd)
    let defVachEur = Math.floor(amd)

    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }

    useEffect(() => {
        allArqCurrencyUsd(defArqUsd)
        allVachCurrencyUsd(defVachUsd)
        allArqCurrencyEur(defArqEur)
        allVachCurrencyEur(defVachEur)
    }, [])

    return (
        <div className="bank">
            <div className="bank_name">
                <div className="bank_number">{t('InecoBank.3')}</div>
                <div className="name">{t('InecoBank.1')}</div>
            </div>
            <div className="branch">{t('InecoBank.2')}</div>
            <div className="date">{`${day}.${month}.${date.getFullYear()}`}</div>
            <div className="usd">
                <div className="amd">{defArqUsd}</div>
                <div className="vacharq">{defVachUsd}</div>
            </div>
            <div className="euro">
                <div className="eur">{defArqEur}</div>
                <div className="vacharq">{defVachEur}</div>
            </div>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        amd: state.currency.amd,
        eur: state.currency.eur,
        usd: state.currency.usd
    }
}

const mapDispatchToProps = {
    allArqCurrencyUsd,
    allVachCurrencyUsd,
    allArqCurrencyEur,
    allVachCurrencyEur
}

export default connect(mapStateToProps, mapDispatchToProps)(InecoBank);