import React, { useEffect } from 'react'
import TitleTable from './Currencies/TitleTable/TitleTable'
import InecoBank from './Currencies/Banks/InecoBank/InecoBank'
import ConverseBank from './Currencies/Banks/ConverseBank/ConverseBank'
import MinRates from './Currencies/Banks/Rates/MinRates/MinRates'
import MaxRates from './Currencies/Banks/Rates/MaxRates/MaxRates'
import { getCurrencies } from '../../redux/actions'
import { connect } from 'react-redux'
import { useHttp } from '../../Api_hook/useHttp'
import './Table.scss'

const Table = ({ getCurrencies }) => {
    const { request } = useHttp()

    async function getDataHandler() {
        try {
            const data = await request('/currencies', 'GET', null, { "Content-Type": "application/json" })
            getCurrencies(data)
        } catch (e) {
            console.log('Error', e)
        }
    }

    useEffect(() => {
        getDataHandler()
    }, [])

    return (
        <div className="middle">
            <div className="banks">
                <TitleTable />
                <InecoBank />
                <ConverseBank />
                <MinRates />
                <MaxRates />
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getCurrencies
}


export default connect(null, mapDispatchToProps)(Table);