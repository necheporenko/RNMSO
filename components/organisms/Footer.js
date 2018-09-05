import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="footer__title-block">
            <b className="footer__title">
              Российский национальный молодежный симфонический оркестр
            </b>
            <p>
              Концертный комплекс «Филармония-2» Мичуринский проспект, Олимпийская деревня, дом 1
            </p>
            <p>
              Общие вопросы:
            <a href="#" className="mail mail--common">info@site.ru</a>
            </p>
            <p>
              Запросы прессы:
            <a href="#" className="mail mail--press">pr@site.ru</a>
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="footer__link-block">
            <div className="footer__social">
              <a href="#">
                <i className="icon-icon-facebook"></i>
              </a>
              <a href="#">
                <i className="icon-icon-vk"></i>
              </a>
              <a href="#">
                <i className="icon-icon-instagram"></i>
              </a>
            </div>
            <div className="footer__logo">
              <a href="#" className="logo__link logo__link--footer logo__linl--grants">
                <img src="../static/img/footer-logo.png" alt="Фонд президентских грантов" />
              </a>
              <a href="# " className="logo__link logo__link--footer logo__linl--philharmonic" >
                <img src="../static/img/philharmonic.png" alt="Филармония" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-block d-xl-block">
          <ul className="footer__menu">
            <li>
              <span className="footer-menu__title">Оркестр</span>
            </li>
            <li>
              <a href="staf.html">Состав оркестра</a>
            </li>
            <li>
              <a href="team.html">Команда</a>
            </li>
            <li>
              <a href="academy.html">Симфоническая академия</a>
            </li>
            <li>
              <a href="academy-masters.html">Педагоги академии</a>
            </li>
            <li>
              <a href="conductors.html">Дирижёры сезона 2018-2019</a>
            </li>
            <li>
              <a href="soloists.html">Солисты сезона 2018-2019</a>
            </li>

            <li>
              <a href="application.html">Подать заявку</a>
            </li>
            <li>
              <a href="contacts.html">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 d-none d-lg-block d-xl-block">
          <div className="footer-menu__weapper">
            <ul className="footer__menu">
              <li>
                <span className="footer-menu__title">Афиша</span>
              </li>
              <li>
                <a href="calendar.html">Календарь концертов</a>
              </li>
              <li>
                <a href="calendar.html">Архив</a>
              </li>
            </ul>
            <ul className="footer__menu">
              <li>
                <span className="footer-menu__title ">Медиа</span>
              </li>
              <li>
                <a href="news.html">Новости</a>
              </li>
              <li>
                <a href="video.html">Видео</a>
              </li>
              <li>
                <a href="photo.html">Фото</a>
              </li>
              <li>
                <a href="press.html">Пресса</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-block d-xl-block">
          <div className="footer__partners">
            <a href="reserve.html" className="partners-link">Всероссийский Симфонический Резерв</a>
            <a href="partners.html" className="partners-link footer-menu__title">Партнеры</a>
          </div>
        </div>
      </div>
    </div>
  </footer >
)

export default Footer