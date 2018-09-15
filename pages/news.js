import React from 'react';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import moment from 'moment';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';


const limitNews = 4;
class News extends React.Component {
  static async getInitialProps({ req, res }) {
    const language = req || res ? req.language || res.locals.language : null;
    const response = await callApi(`/news/?limit=${limitNews}&offset=0`, language);
    moment.locale(language);
    return { data: response, language };
  }

  state = {
    news: this.props.data,
    offset: 0
  }

  static getDerivedStateFromProps(nextProps) {
    return { news: nextProps.data }
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * limitNews);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });
  };

  async loadCommentsFromServer() {
    const { offset } = this.state;
    const { language } = this.props;

    const response = await callApi(`/news/?limit=${limitNews}&offset=${offset}`, language);
    this.setState({ news: response });
  }


  render() {
    const { t, language } = this.props;
    const { news } = this.state;

    moment.locale(language);
    return (
      <Layout title={t("MediaMenu.news")}>
        <main className="m-before">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page__title-line">
                  <h1 className="page__title">
                    {t("MediaMenu.news")}
                  </h1>
                  <Submenu menu="MediaMenu" activePage="news" />
                </div>
              </div>
            </div>
            {news && news.results.map(post => (
              <div className="row" key={post.id}>
                <div className="col-xl-3 col-md-3">
                  <div className="news__date">
                    <span className="news__year">{moment(post.date.slice(0, 16)).locale(language).format("YYYY")}</span>
                    <span className="news__day">{moment(post.date.slice(0, 16)).locale(language).format("D MMMM")} </span>
                  </div>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="short__news">
                    <h3 className="full-link__title">
                      <Link as={`/news/${post.id}`} href={`/news-page?id=${post.id}`}>
                        <a className="news__full-link">{post.title}</a>
                      </Link>
                    </h3>
                    <Link as={`/news/${post.id}`} href={`/news-page?id=${post.id}`}>
                      <a className="news__full-link--img">
                        {post.image && <img src={post.image.replace('media/', 'media/big/')} alt="Фото новости" />}
                      </a>
                    </Link>
                    <p className="short-news__text" dangerouslySetInnerHTML={{ __html: post.announcement }}></p>
                    <Link as={`/news/${post.id}`} href={`/news-page?id=${post.id}`}>
                      <a className="article__more">{t("PressPage.readMore")}</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <ReactPaginate
                  previousLabel={t("Pagination.prew")}
                  nextLabel={t("Pagination.next")}
                  breakLabel={<a href="">...</a>}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(news.count / 4)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  onPageChange={this.handlePageClick}
                  containerClassName={"paginator"}
                  activeClassName={"paginator__list--active"}
                  pageClassName={"paginator__list__li"}
                  previousClassName={'paginator__flex-item paginator__flex-item--1'}
                  nextClassName={'paginator__flex-item paginator__flex-item--2'}
                  previousLinkClassName={'paginator-btn paginator-btn--pref'}
                  nextLinkClassName={'paginator-btn paginator-btn--next'}
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default withI18next(['common'])(News);
