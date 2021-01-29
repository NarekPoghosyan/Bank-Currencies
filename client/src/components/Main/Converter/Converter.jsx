import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './Converter.scss'
import { get } from 'mongoose'

function Converter({ amd, eur, usd }) {
    const { t } = useTranslation()
    const [getFirstInputValue, setFirstInputValue] = useState('')
    const [getEnterMoney, setEnterMoney] = useState('AMD')
    const [getReceivedMoney, setReceivedMoney] = useState('AMD')
    const [bank, setBank] = useState('INECO')

    let one_dollar = Math.floor(amd / usd)
    let sum;
    let storage_money;

    function bankConvert(percent) {
        switch(getEnterMoney) {
            case 'AMD': 
                calcForAmd(getReceivedMoney, percent)
                break
            case 'USD':
                calcForUsd(getReceivedMoney, percent)
                break
            case 'EUR':
                calcForEur(getReceivedMoney, percent)
                break
        }
        return
    }

    function calcForAmd(getReceivedMoney, num) {
        switch(getReceivedMoney) {
            case 'USD':
                sum = (getFirstInputValue / one_dollar)
                storage_money = num + 3
                break
            case 'EUR':
                sum = getFirstInputValue / amd
                storage_money = num + 4
                break
            default:
                sum = Number(getFirstInputValue)
                storage_money = 0
        }
        return
    }

    function calcForUsd(getReceivedMoney, num) {
        switch(getReceivedMoney) {
            case 'AMD':
                sum = one_dollar * getFirstInputValue
                storage_money = num + 3
                break
            case 'EUR':
                sum = getFirstInputValue * one_dollar / amd
                storage_money = num + 5
                break
            default:
                sum = Number(getFirstInputValue)
                storage_money = 0
        }
        return
    }

    function calcForEur(getReceivedMoney, num) {
        switch(getReceivedMoney) {
            case 'AMD':
                sum = amd * getFirstInputValue
                storage_money = num + 4
                break
            case 'USD':
                sum = amd / one_dollar * getFirstInputValue
                storage_money = num + 5
                break
            default:
                sum = Number(getFirstInputValue)
                storage_money = 0
        }
        return
    }

        if (bank === 'INECO') {
            bankConvert(0)
        } else {
            bankConvert(1)
        }

    return (
        <div className="converter">
            <div className="convert">
                <input type="number" placeholder={t('Converter.1')} onChange={e => setFirstInputValue(e.target.value)} />
                <select onChange={e => setEnterMoney(e.target.value)}>
                    <option>AMD</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input type="text" placeholder={t('Converter.2')} disabled value={getFirstInputValue ? sum.toFixed(2) : ""} />
            </div>
            <select onChange={e => setReceivedMoney(e.target.value)}>
                <option>AMD</option>
                <option>EUR</option>
                <option>USD</option>
            </select>
            <input className="storage_money" type="text" placeholder={t('Converter.3')} disabled value={storage_money ? storage_money + '%' : ""} />
            <select onChange={e => setBank(e.target.value)}>
                <option>INECO</option>
                <option>CONVERSE</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        amd: state.currency.amd,
        eur: state.currency.eur,
        usd: state.currency.usd
    }
}

export default connect(mapStateToProps, null)(Converter);