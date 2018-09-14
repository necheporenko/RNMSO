import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';

const Press = ({ t, press }) => (
  <Layout title="Пресса">
    <main className="m-before">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line">
              <h1 className="page__title">
                {t("MediaMenu.press")}
              </h1>
              <Submenu menu="MediaMenu" activePage="press" />
            </div>
          </div>
        </div>
        <div className="row">
          {press.map(post => (
            <div className="col-md-6" key={post.id}>
              <article className="press-cart">
                <a href={post.link} target="_blank" className="article__logo">{post.image && <img src={post.image.replace('media/', 'media/big/')} alt="Заголовок" className="img-responsive" />}</a>
                <a href={post.link} target="_blank" className="article__title">{post.title}</a>
                <p className="article__text" dangerouslySetInnerHTML={{ __html: post.text }}></p>
                <a href={post.link} target="_blank" className="article__more">{t("PressPage.read")}</a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  </Layout>
)

Press.getInitialProps = async ({ req, res }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const response = await callApi('/press', language);
  return { press: response.results }
}

export default withI18next(['common'])(Press);