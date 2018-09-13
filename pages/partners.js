import React from 'react'
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main'

const Partners = ({ t, partners }) => (
  <Layout>
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line">
              <h1 className="page__title">
                {t('MainMenu.partners')}
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {partners.map(partner => (
            <div className="col-lg-3 col-sm-7 mycol" key={partner.id}>
              <div className="partner__block">
                <Link href={partner.link}>
                  <a><img src={partner.image} alt="Парнер" className="img-responsive partner__logo" /></a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </Layout>
)

Partners.getInitialProps = async ({ req, res }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const response = await callApi('/partners', language)
  return { partners: response.results }
}

export default withI18next(['common'])(Partners);
