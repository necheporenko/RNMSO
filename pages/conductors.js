import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';


const Conductors = ({ t, conductors }) => (
  <Layout title="Дирижеры">
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap">
                <h1 className="page__title page__title--conductor">
                  {t('OrchestraMenu.conductors')}
                </h1>
              </div>
              <div className="page__flex-wrap">
                <Submenu menu="OrchestraMenu" activePage="conductors" />
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
                    <img src={conductor.image} alt={`${conductor.first_name} ${conductor.last_name}`} />
                  </div>
                  <div className="pedagog-cart__description">
                    <Link href={`/conductors/${conductor.id}`}>
                      <a>{`${conductor.first_name} ${conductor.last_name}`}</a>
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

Conductors.getInitialProps = async ({ req, res }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const response = await callApi('/conductors', language)
  return { conductors: response.results }
}

export default withI18next(['common'])(Conductors);