import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';

const Soloist = ({ t, soloists }) => (
  <Layout title={t('OrchestraMenu.soloists')}>
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap ">
                <h1 className="page__title ">
                  {t('OrchestraMenu.soloists')}
                </h1>
              </div>
              <div className="page__flex-wrap ">
                <Submenu menu="OrchestraMenu" activePage="soloists" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="team-academy">
        <div className="container">
          <div className="row">
            {soloists.map(soloist => (
              <div className="col-md-6" key={soloist.id}>
                <div className="pedagog__cart">
                  <div className="pedagog__photo">
                    <img src={soloist.image} alt={soloist.specialty} />
                  </div>
                  <div className="pedagog-cart__description">
                    {/* persona */}
                    {/* <Link href={`/soloists/${soloist.id}`}> */}
                    <a>{`${soloist.first_name} ${soloist.last_name}`}</a>
                    {/* </Link> */}
                    <p>
                      {soloist.specialty}
                    </p>
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

Soloist.getInitialProps = async ({ req, res }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const response = await callApi('/soloists', language)
  return { soloists: response.results }
}

export default withI18next(['common'])(Soloist);