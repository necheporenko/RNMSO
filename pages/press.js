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
                <Link href={post.link}>
                  <a className="article__logo">{post.image && <img src={post.image} alt="Заголовок" className="img-responsive" />}</a>
                </Link>
                <Link href={post.link}><a className="article__title">{post.title}</a></Link>
                <p className="article__text" dangerouslySetInnerHTML={{ __html: post.text }}></p>
                <Link href={post.link}><a className="article__more">{t("PressPage.read")}</a></Link>
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