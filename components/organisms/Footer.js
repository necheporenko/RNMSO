import React from 'react';
import Link from 'next/link';
import { withI18next } from '../../lib/withI18next';
import { OrchestraMenu, MediaMenu } from '../../constants';


const Footer = ({ t }) => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="footer__title-block">
            <b className="footer__title">
              {t("OrchestraName")}
            </b>
            <p>
              {t('ContactsPage.address')}
            </p>
            <p>
              {t('ContactsPage.commonQuestion')}
              <a href="mailto:info@site.ru" className="mail mail--common">info@site.ru</a>
            </p>
            <p>
              {t('ContactsPage.requestPress')}
              <a href="mailto:pr@site.ru" className="mail mail--press">pr@site.ru</a>
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="footer__link-block">
            <div className="footer__social">
              <a target="_blank" href="https://www.facebook.com/rnmso/">
                <i className="icon-icon-facebook"></i>
              </a>
              <a target="_blank" href="https://vk.com/rnmso">
                <i className="icon-icon-vk"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/rnmso/">
                <i className="icon-icon-instagram"></i>
              </a>
            </div>
            <div className="footer__logo">
              <a href='https://xn--80afcdbalict6afooklqi5o.xn--p1ai/' target="_blank" className="logo__link logo__link--footer logo__linl--grants">
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
              <span className="footer-menu__title">{t("MainMenu.orchestra")}</span>
            </li>
            {OrchestraMenu.map((menu, index) => (
              <li key={index}>
                <Link href={menu.href}><a>{t(menu.name)}</a></Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-2 d-none d-lg-block d-xl-block">
          <div className="footer-menu__weapper">
            <ul className="footer__menu">
              <li>
                <span className="footer-menu__title">{t("MainMenu.afisha")}</span>
              </li>
              <li>
                <Link href="calendar"><a >{t("MainMenu.calendarOfConcerts")}</a></Link>
              </li>
              <li>
                <Link href="calendar"><a href="calendar.html">{t("MainMenu.archive")}</a></Link>
              </li>
            </ul>
            <ul className="footer__menu">
              <li>
                <span className="footer-menu__title ">{t("MainMenu.media")}</span>
              </li>
              {MediaMenu.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.href}><a>{t(menu.name)}</a></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-block d-xl-block">
          <div className="footer__partners">
            <Link href="/reserve"><a className="partners-link">{t("MainMenu.reserve")}</a></Link>
            <Link href="/partners"><a className="partners-link footer-menu__title">{t("MainMenu.partners")}</a></Link>
          </div>
        </div>
      </div>
    </div>
  </footer >
)

export default withI18next(['common'])(Footer);
