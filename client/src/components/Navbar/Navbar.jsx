import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Navbar.scss'

const Navbar = ({ changeLang }) => {
    const { t, i18n } = useTranslation()

    function changeLang(lang) {
        i18n.changeLanguage(lang)
    }

    useEffect(() => {
        i18n.changeLanguage('hy-AM')
    }, [])

    return (
        <div className="top">
            <div className="navbar">
                <div className="logo"></div>
                <h1>{t('Title.1')}</h1>
                <div className="langs">
                    <button className="lang_arm" onClick={() => changeLang('hy-AM')}></button>
                    <button className="lang_ru" onClick={() => changeLang('ru')}></button>
                    <button className="lang_eng" onClick={() => changeLang('eng')}></button>
                </div>
            </div>
        </div>
    )
}


export default Navbar;