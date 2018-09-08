import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import Layout from '../layouts/Main';
import callApi from '../utils/api';

const Conductors = ({ t, conductors }) => (
  <Layout title="Дирижеры">
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap">
                <h1 className="page__title page__title--conductor">
                  Дирижёры сезона 2018-2019
							</h1>
                {/* <h1>{t('welcome')}</h1> */}
              </div>
              <div className="page__flex-wrap">
                <ul className="page__list">
                  <li>
                    <a href="staf.html">Состав Оркестра</a>
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
                    <a href="conductors.html" className="active">Дирижёры сезона 2018-2019</a>
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
            </div>
          </div>
        </div>
      </div>
      <section className="team-academy">
        <div className="container">
          <div className="row">
            {conductors.map(conductor => (
              <div className="col-md-6" key={conductor.id}>
                <div className="pedagog__cart">
                  <div className="pedagog__photo">
                    <img src={conductor.image} alt={`${conductor.first_name} ${conductor.last_naem}`} />
                  </div>
                  <div className="pedagog-cart__description">
                    <Link href={`/conductors/${conductor.id}`}>
                      <a>{`${conductor.first_name} ${conductor.last_naem}`}</a>
                    </Link>
                    <p>{conductor.post}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

Conductors.getInitialProps = async () => {
  const response = await callApi('/conductors')
  return { conductors: response.results }
}

export default withI18next(['home', 'common'])(Conductors);