import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './Converter.scss'

function Converter({ amd, eur, usd }) {
    const { t } = useTranslation()
    const [getFirstInputValue, setFirstInputValue] = useState('')
    const [getEnterMoney, setEnterMoney] = useState('AMD')
    const [getReceivedMoney, setReceivedMoney] = useState('AMD')
    const [bank, setBank] = useState('INECO')

    let one_dollar = Math.floor(amd / usd)
    let sum;
    let storage_money;

    if (typeof (getFirstInputValue))

        if (bank === 'INECO') {
            if (getEnterMoney === 'AMD' && getReceivedMoney === 'USD') {
                sum = (getFirstInputValue / one_dollar)
                storage_money = 3
            } else if (getEnterMoney === 'AMD' && getReceivedMoney === 'EUR') {
                sum = getFirstInputValue / amd
                storage_money = 4
            } else if (getEnterMoney === 'AMD' && getReceivedMoney === 'AMD') {
                sum = Number(getFirstInputValue)
                storage_money = 0
            }

            if (getEnterMoney === 'USD' && getReceivedMoney === 'AMD') {
                sum = one_dollar * getFirstInputValue
                storage_money = 3
            } else if (getEnterMoney === 'USD' && getReceivedMoney === 'EUR') {
                sum = getFirstInputValue * one_dollar / amd
                storage_money = 5
            } else if (getEnterMoney === 'USD' && getReceivedMoney === 'USD') {
                sum = Number(getFirstInputValue)
                storage_money = 0
            }

            if (getEnterMoney === 'EUR' && getReceivedMoney === 'AMD') {
                sum = amd * getFirstInputValue
                storage_money = 4
            } else if (getEnterMoney === 'EUR' && getReceivedMoney === 'USD') {
                sum = amd / one_dollar * getFirstInputValue
                storage_money = 5
            } else if (getEnterMoney === 'EUR' && getReceivedMoney === 'EUR') {
                sum = Number(getFirstInputValue)
                storage_money = 0
            }
        }

    if (bank === 'CONVERSE') {
        if (getEnterMoney === 'AMD' && getReceivedMoney === 'USD') {
            sum = getFirstInputValue / one_dollar
            storage_money = 4
        } else if (getEnterMoney === 'AMD' && getReceivedMoney === 'EUR') {
            sum = getFirstInputValue / amd
            storage_money = 6
        } else if (getEnterMoney === 'AMD' && getReceivedMoney === 'AMD') {
            sum = Number(getFirstInputValue)
            storage_money = 0
        }

        if (getEnterMoney === 'USD' && getReceivedMoney === 'AMD') {
            sum = one_dollar * getFirstInputValue
            storage_money = 4
        } else if (getEnterMoney === 'USD' && getReceivedMoney === 'EUR') {
            sum = getFirstInputValue * one_dollar / amd
            storage_money = 8
        } else if (getEnterMoney === 'USD' && getReceivedMoney === 'USD') {
            sum = Number(getFirstInputValue)
            storage_money = 0
        }

        if (getEnterMoney === 'EUR' && getReceivedMoney === 'AMD') {
            sum = amd * getFirstInputValue
            storage_money = 6
        } else if (getEnterMoney === 'EUR' && getReceivedMoney === 'USD') {
            sum = amd / one_dollar * getFirstInputValue
            storage_money = 8
        } else if (getEnterMoney === 'EUR' && getReceivedMoney === 'EUR') {
            sum = Number(getFirstInputValue)
            storage_money = 0
        }
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