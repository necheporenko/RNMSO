import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../layouts/Main'

const Partners = () => (
  <Layout>
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line">
              <h1 className="page__title">
                Партнеры
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-7 mycol">
            <div className="partner__block">
              <a href="#">
                <img src="../static/img/partner1.png" alt="Парнер" className="img-responsive partner__logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-7 mycol">
            <div className="partner__block">
              <a href="#">
                <img src="../static/img/partner2.png" alt="Парнер" className="img-responsive partner__logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-7 mycol">
            <div className="partner__block">
              <a href="#">
                <img src="../static/img/partner3.png" alt="Парнер" className="img-responsive partner__logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

Partners.getInitialProps = async ({ req }) => {
  const res = await fetch('http://31.192.109.44/api/partners/?limit=10&offset=0', { headers: { 'Access-Control-Allow-Origin': '*' }, mode: 'no-cors' })
  const json = await res.json()
  console.log(json)
  return { partners: json.stargazers_count }
}

export default Partners
