import React from 'react';
import Link from 'next/link';
import i18n from '../../i18n';
import { withI18next } from '../../lib/withI18next';
import { OrchestraMenu, AfishaMenu, MediaMenu, PartnersMenu } from '../../constants';


const changeLanguage = lng => {
    i18n.changeLanguage(lng, (err, t) => {
        if (err) return console.log('something went wrong loading', err)
    })
    document.cookie = `i18next=${lng}`;
    location.reload();
}

const Header = ({ t, language }) => (
    <div>
        <div className="top__line ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-10">
                        <div className="logo__group">
                            <Link href='/'>
                                <a className="logo__link logo__linl--RNYSO">
                                    <img src="../../static/img/header_logo.png" alt="Российский Национальный Молодёжный Симфоический Оркестр" />
                                </a>
                            </Link>
                            <Link href='/'>
                                <a className="logo__link logo__linl--grants">
                                    <img src="../../static/img/grants_logo.png" alt="Фонд президентских грантов" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-2 d-block d-lg-none d-xl-none">
                        <div className="menu__toggle">
                            <span></span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="menu__line">
                            <div className="menu__wrapper">
                                <div className="menu__wrapper--left">
                                    <div className="first-floor">
                                        <nav className="main__menu">
                                            <ul>
                                                <li className="main__list main__list--visible">
                                                    <span className="no-link">{t('MainMenu.orchestra')}
                                                        <i className="icon-bands"></i>
                                                    </span>
                                                    <div className="hidden__list">
                                                        <div className="ul__list menu--return">
                                                            <i className="icon-arrow-right"></i>
                                                        </div>
                                                        <div className="ul__wraper">
                                                            {OrchestraMenu.map((menu, index) => (
                                                                <div className="ul__list" key={index}>
                                                                    <Link href={menu.href}><a>{t(menu.name)}</a></Link>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="main__list main__list--visible">
                                                    <Link href={AfishaMenu.href}><a className="hidden-menu__clouse ">{t(AfishaMenu.name)}</a></Link>
                                                </li>
                                                <li className="main__list main__list--visible">
                                                    <span className="no-link">{t('MainMenu.media')}
                                                        <i className="icon-bands"></i>
                                                    </span>
                                                    <div className="hidden__list">
                                                        <div className="ul__wrapper">
                                                            <div className="ul__list menu--return">
                                                                <i className="icon-arrow-right"></i>
                                                            </div>
                                                            {MediaMenu.map((menu, index) => (
                                                                <div className="ul__list" key={index}>
                                                                    <Link href={menu.href}><a>{t(menu.name)}</a></Link>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="main__list main__list--visible">
                                                    <Link href={PartnersMenu.href}><a className="hidden-menu__clouse ">{t(PartnersMenu.name)}</a></Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="second-floor">
                                        <Link href="reserve"><a>{t('MainMenu.reserve')}</a></Link>
                                    </div>
                                </div>
                                <div className="menu__wrapper--right">
                                    <div className="language__toggle">
                                        <button
                                            type="button"
                                            className={(language || i18n.language) === 'ru' ? 'language__btn language__btn--dot language__dot' : 'language__btn language__btn--dot'}
                                            onClick={() => { changeLanguage('ru'); }}
                                        >
                                            Рус
                                        </button>
                                        <button
                                            type="button"
                                            className={(language || i18n.language) === 'en' ? 'language__btn language__btn--dot language__dot' : 'language__btn language__btn--dot'}
                                            onClick={() => { changeLanguage('en'); }}
                                        >
                                            Eng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu__hidden">
            <div className="main__menu main__menu--hidden">
                <div className="menu__close">
                    <button className="menu__close-btn"></button>
                </div>
                <div className="main__list main__list--hidden">
                    <span className="hidden-menu__open hidden__item">Оркестр
					<i className="icon-bands"></i>
                    </span>
                    <div className="hidden__list">
                        <div className="hidden__container">
                            <div className="ul__wraper">
                                {OrchestraMenu.map((menu, index) => (
                                    <div className="ul__list" key={index}>
                                        <Link href={menu.href}><a>{menu.name}</a></Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__list main__list--hidden">
                    <Link href={AfishaMenu.href}><a className="hidden__item">{AfishaMenu.name}</a></Link>
                </div>
                <div className="main__list main__list--hidden">
                    <span className="hidden-menu__open hidden__item">Медиа
					<i className="icon-bands"></i>
                    </span>
                    <div className="hidden__list">
                        <div className="hidden__container">
                            <div className="ul__wrapper">
                                <div className="ul__list menu--return">
                                    <i className="icon-arrow-right"></i>
                                </div>
                                {MediaMenu.map((menu, index) => (
                                    <div className="ul__list" key={index}>
                                        <Link href={menu.href}><a>{menu.name}</a></Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__list main__list--hidden">
                    <Link href={PartnersMenu.href}><a className="hidden__item">{PartnersMenu.name}</a></Link>
                </div>
                <div className="main__list main__list--hidden">
                    <Link href="/reserve">
                        <a className="hidden__item ">{t("MainMenu.partners")}</a>
                    </Link>

                </div>
                <div className="main__list main__list--hidden">
                    <div className="hidden__item">
                        <button type="button" className="language__btn language__btn--hidden language__hide">Переключить на Русский</button>
                        <button type="button" className="language__btn language__btn--hidden">Switch to English</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Header.getInitialProps = async ({ req, res }) => {
    const language = req || res ? req.language || res.locals.language : null;
    return { language }
}

export default withI18next(['common'])(Header);