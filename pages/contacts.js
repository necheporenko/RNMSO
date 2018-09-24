import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';

const Contacts = ({ t }) => (
  <Layout title={t('OrchestraMenu.contacts')}>
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap ">
                <h1 className="page__title ">
                  {t('OrchestraMenu.contacts')}
                </h1>
              </div>
              <div className="page__flex-wrap ">
                <div className="page__flex-wrap ">
                  <Submenu menu="OrchestraMenu" activePage="contacts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contacts">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="contacts__title">
                {t('ContactsPage.address')}
              </h3>
            </div>
            <div className="col-lg-2 offset-lg-1 col-sm-6 offset-sm-0">
              <div className="question__mail">
                <span>{t('ContactsPage.commonQuestion')}</span>
                <Link href="mailto:info@site.ru"><a>info@site.ru</a></Link>
              </div>

            </div>
            <div className="col-lg-2 offset-lg-1 col-sm-6 offset-sm-0">
              <div className="question__mail">
                <span>{t('ContactsPage.requestPress')}</span>
                <Link href="mailto:pr@site.ru"><a>pr@site.ru</a></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-none d-md-block d-lg-block d-xl-block">
              <div className="contacts__social-block">
                <a href="https://www.facebook.com/rnmso/" className=" contacts__link contacts__link--facebook"><i className="icon-icon-facebook"></i>facebook</a>
                <a href="https://vk.com/rnmso" className="contacts__link contacts__link--vk"><i className="icon-icon-vk"></i>vkontakte</a>
                <a href="https://www.instagram.com/rnmso/" className="contacts__link contacts__link--instagram"><i className="icon-icon-instagram"></i>instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="container">
          <div className="row">
            <div className="col-12 mycol">
              <YMaps>
                <Map state={{ center: [55.677496, 37.468876], zoom: 17 }} width={'100%'} height={720} >
                  <GeoObject geometry={{
                    type: 'Point',
                    coordinates: [55.677496, 37.468876],
                  }} />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout >
)

export default withI18next(['common'])(Contacts);