import React from 'react'
import { useTranslation } from 'react-i18next'
import './TitleTable.scss'

const TitleTable = () => {
    const { t } = useTranslation()
    return (
        <div className="title_top">
            <div className="title_bank">
                <div className="number_of_banks"></div>
                <div className="bank">{t('Bank.1')}</div>
            </div>
            <div className="branch">{t('Bank.2')}</div>
            <div className="date">{t('Bank.3')}</div>
            <div className="usd_block">
                <div className="usd">
                    USD
                    <div className="usa_flag"></div>
                </div>
                <div className="usa_div">
                    <div className="usd_arq">{t('Bank.4')}</div>
                    <div>{t('Bank.5')}</div>
                </div>
            </div>
            <div className="eur_block">
                <div className="eur">
                    EUR
                    <div className="europe_flag"></div>
                </div>
                <div className="eur_div">
                    <div className="eur_arq">{t('Bank.4')}</div>
                    <div>{t('Bank.5')}</div>
                </div>
            </div>
        </div>
    )
}

export default TitleTable;