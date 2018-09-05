import React from 'react';
import Link from 'next/link';

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
                                                            <div className="ul__list">
                                                                <a href="staf.html">Состав оркестра</a>
                                                            </div>
                                                            <div className="ul__list">
                                                                <a href="team.html">Команда</a>
                                                            </div>
                                                            <div className="ul__list">
                                                                <a href="academy.html">Симфоническая академия</a>
                                                            </div>
                                                            <div className="ul__list">
                                                                <a href="academy-masters.html">Педагоги академии</a>
                                                            </div>
                                                            <div className="ul__list">
                                                                <a href="conductors.html">Дирижеры сезона 2018-2019</a>
                                                            </div>
                                                            <div className="ul__list">
                                                                <a href="soloists.html">Солисты сезона 2018-2019</a>
                                                            </div>
                                                            <div className="ul__list">
                                                                <a href="application.html">Подать заявку</a>

                                                            </div>
                                                            <div className="ul__list">
                                                                <a href="contacts.html">Контакты</a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="main__list main__list--visible">
                                                    <a href="calendar.html" className="hidden-menu__clouse">Афиша</a>
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
                                                </li>
                                                <li className="main__list main__list--visible">
                                                    <a href="partners.html" className="hidden-menu__clouse ">Партеры</a>
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
                                <div className="ul__list">
                                    <a href="staf.html">Состав оркестра</a>
                                </div>
                                <div className="ul__list">
                                    <a href="team.html">Команда</a>
                                </div>
                                <div className="ul__list">
                                    <a href="academy.html">Симфоническая академия</a>
                                </div>
                                <div className="ul__list">
                                    <a href="academy-masters.html">Педагоги академии</a>
                                </div>
                                <div className="ul__list">
                                    <a href="conductors.html">Дирижеры сезона 2018-2019</a>
                                </div>
                                <div className="ul__list">
                                    <a href="soloists.html">Солисты сезона 2018-2019</a>
                                </div>
                                <div className="ul__list">
                                    <a href="application.html">Подать заявку</a>

                                </div>
                                <div className="ul__list">
                                    <a href="contacts.html">Контакты</a>
                                </div>
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