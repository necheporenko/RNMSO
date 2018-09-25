import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { withI18next } from '../lib/withI18next';
import i18n from '../i18n';
import callApi from '../utils/api';
import Layout from '../layouts/Main';

const NewsPage = ({ t, news, language, nextNews, prevNews }) => {
  moment.locale(i18n.language);
  return (
    <Layout title={news.title}>
      <main>
        <div className="container">
          <div className="news-page__top-line">
            <div className="row">
              <div className="col-xl-2 ">
                <div className="come-back news__comеback">
                  <Link href="/news"><a>{t("NewsPage.backToNews")}</a></Link>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="news__date news__date--page">
                  <span className="news__year">{moment(news.date.slice(0, 16)).locale(i18n.language).format("YYYY")}</span>
                  <span className="news__day">{moment(news.date.slice(0, 16)).locale(i18n.language).format("D MMMM")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="news__content">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h1 className="news-page__title">
                  {news && news.title}
                </h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 offset-lg-0 col-md-10 offset-md-2 mycol">
                {news.image && <img src={news.image.replace('media/', 'media/big/')} className="img-responsive full-news__img" alt="Фото новости" />}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <p className="news__text" dangerouslySetInnerHTML={{ __html: news.text }}></p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="news__navigation news__navigation--left">
                  {news.previous_id && <Link as={`/news/${news.previous_id}`} href={`/news-page?id=${news.previous_id}`}><button className="paginator-btn paginator-btn--pref" type="buttoh">{prevNews.title}</button></Link>}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="news__navigation news__navigation--right">
                  {news.next_id && <Link as={`/news/${news.next_id}`} href={`/news-page?id=${news.next_id}`}><button className="paginator-btn paginator-btn--next" type="buttoh">{nextNews.title}</button></Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}


NewsPage.getInitialProps = async ({ req, res, query }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const newsID = query.id;
  const response = await callApi(`/news/${newsID}`, language);
  let responseNextNews;
  let responsePrevNews;

  if (response.next_id) {
    responseNextNews = await callApi(`/news/${response.next_id}`, language);
  }

  if (response.previous_id) {
    responsePrevNews = await callApi(`/news/${response.previous_id}`, language);
  }

  moment.locale(language);
  return { news: response, language, nextNews: responseNextNews, prevNews: responsePrevNews };
}
export default withI18next(['common'])(NewsPage);