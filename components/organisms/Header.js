import React from 'react';
import Link from 'next/link';

const OrchestraMenu = [
    { href: 'staff', name: 'Состав оркестра' },
    { href: 'team', name: 'КОМАНДА' },
    { href: 'academy', name: 'СИМФОНИЧЕСКАЯ АКАДЕМИЯ' },
    { href: 'academy-masters', name: 'ПЕДАГОГИ АКАДЕМИИ' },
    { href: 'conductors', name: 'ДИРИЖЕРЫ СЕЗОНА 2018-2019' },
    { href: 'soloists', name: 'СОЛИСТЫ СЕЗОНА 2018-2019' },
    { href: 'application', name: 'ПОДАТЬ ЗАЯВКУ' },
    { href: 'contacts', name: 'КОНТАКТЫ' },
];
const AfishaMenu = { href: 'calendar', name: 'АФИША' };
const MediaMenu = [
    { href: 'news', name: 'НОВОСТИ' },
    { href: 'video', name: 'ВИДЕО' },
    { href: 'photo', name: 'ФОТО' },
    { href: 'press', name: 'ПРЕССА' },
];
const PartnersMenu = { href: 'partners', name: 'ПАРТНЕРЫ' };

const Header = () => (
    <div>
        <div className="top__line ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-10">
                        <div className="logo__group">
                            <a href="/" className="logo__link logo__linl--RNYSO">
                                <img src="../../static/img/header_logo.png" alt="Российский Национальный Молодёжный Симфоический Оркестр" />
                            </a>
                            <a href="#" className="logo__link logo__linl--grants">
                                <img src="../../static/img/grants_logo.png" alt="Фонд президентских грантов" />
                            </a>
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
                                                    <span className="no-link">Оркестр
													<i className="icon-bands"></i>
                                                    </span>
                                                    <div className="hidden__list">
                                                        <div className="ul__list menu--return">
                                                            <i className="icon-arrow-right"></i>
                                                        </div>
                                                        <div className="ul__wraper">
                                                            {OrchestraMenu.map((menu, index) => (
                                                                <div className="ul__list" key={index}>
                                                                    <Link href={menu.href}><a>{menu.name}</a></Link>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="main__list main__list--visible">
                                                    <Link href={AfishaMenu.href}><a className="hidden-menu__clouse ">{AfishaMenu.name}</a></Link>
                                                </li>
                                                <li className="main__list main__list--visible">
                                                    <span className="no-link">Медиа
													<i className="icon-bands"></i>
                                                    </span>
                                                    <div className="hidden__list">
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
                                                </li>
                                                <li className="main__list main__list--visible">
                                                    <Link href={PartnersMenu.href}><a className="hidden-menu__clouse ">{PartnersMenu.name}</a></Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="second-floor">
                                        <a href="reserve.html">
                                            Всероссийский симфонический резерв
									    </a>
                                    </div>
                                </div>
                                <div className="menu__wrapper--right">
                                    <div className="language__toggle">
                                        <button type="button" className="language__btn language__btn--dot language__dot">Рус</button>
                                        <button type="button" className="language__btn language__btn--dot">Eng</button>
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
                    <a href="calendar.html" className="hidden__item">Афиша</a>
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
                                <div className="ul__list">
                                    <a href="news.html">Новости</a>
                                </div>
                                <div className="ul__list">
                                    <a href="video.html">Видео</a>
                                </div>
                                <div className="ul__list">
                                    <a href="photo.html">Фото</a>
                                </div>
                                <div className="ul__list">
                                    <a href="press.html">Пресса</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__list main__list--hidden">
                    <a href="partners.html" className="hidden__item">Партеры</a>
                </div>
                <div className="main__list main__list--hidden">
                    <a href="reserve.html" className="hidden__item ">
                        Всероссийский симфонический резерв
				    </a>
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

export default Header