import React from 'react';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';


const limitNews = 4;
class News extends React.Component {
  // static async getInitialProps({ req }) {
  //   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  //   return { userAgent }
  // }
  static async getInitialProps({ req, res }) {
    const language = req || res ? req.language || res.locals.language : null;
    const response = await callApi(`/news/?limit=${limitNews}&offset=0`, language);
    return { data: response, language };
  }

  state = {
    news: this.props.data,
    offset: 0
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * limitNews);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });
    console.log(data, offset, this.state.news);
  };

  async loadCommentsFromServer() {
    const { offset } = this.state;
    const { language } = this.props;

    const response = await callApi(`/news/?limit=${limitNews}&offset=${offset}`, language);
    this.setState({ news: response });
  }


  render() {
    const { t } = this.props;
    const { news } = this.state;
    return (
      <Layout title="Новости">
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
                <div className="col-xl-2 col-md-3">
                  <div className="news__date">
                    <span className="news__year">
                      2018
                    </span>
                    <span className="news__day">
                      23 сентября
                    </span>
                  </div>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="short__news">
                    <h3 className="full-link__title">
                      <Link href="news-page">
                        <a className="news__full-link">{post.title}</a>
                      </Link>
                    </h3>
                    <Link href="news-page">
                      <a className="news__full-link--img">
                        {post.image && <img src={post.image} alt="Фото новости" />}
                      </a>
                    </Link>
                    <p className="short-news__text" dangerouslySetInnerHTML={{ __html: post.announcement }}></p>
                    <Link as={`/news/${post.id}`} href={`/news-page?id=${post.id}`}>
                      <a className="article__more">Читать далее</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="row">
              <div className="col-xl-2 col-md-3">
                <div className="news__date">
                  <span className="news__year">
                    2018
						</span>
                  <span className="news__day">
                    7 сентября
						</span>
                </div>
              </div>
              <div className="col-xl-8 col-md-9">
                <div className="short__news">
                  <h3 className="full-link__title">
                    <a href="news-page.html" className="news__full-link"> Оркестр дал свой первый концерт</a>
                  </h3>

                  <p className="short-news__text">
                    Соноропериод диссонирует райдер. Действительно, субтехника синхронно имеет звукорядный фузз. Еще Аристотель в своей «Политике»
                    говорил, что музыка, воздействуя на человека, доставляет «своего рода очищение, то есть облегчение, связанное с наслаждением»,
                    однако фьюжн дает звукосниматель. Контрапункт контрастных фактур, следовательно, неизменяем.
						</p>
                  <a href="news-page.html" className="article__more">Читать далее</a>
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-xl-2 col-md-3">
                <div className="news__date">
                  <span className="news__year">
                    2018
						</span>
                  <span className="news__day">
                    30 августа
						</span>
                </div>
              </div>
              <div className="col-xl-8 col-md-9">
                <div className="short__news">
                  <h3 className="full-link__title">
                    <a href="news-page.html" className="news__full-link"> Идет подготовка к концерту-презентации оркестра</a>
                  </h3>
                  <p className="short-news__text">
                    Струна просветляет миксолидийский нонаккорд. Звукосниматель изящно образует мнимотакт. Песня "All The Things She Said" (в
                    русском варианте - "Я сошла с ума"), так или иначе, варьирует midi-контроллер, на этих моментах останавливаются Л.А.Мазель
                    и В.А.Цуккерман в своем "Анализе музыкальных произведений". В заключении добавлю, арпеджио взаимно. Сет, на первый
                    взгляд, дает форшлаг, это понятие создано по аналогии с термином Ю.Н.Холопова "многозначная тональность".
						</p>
                  <a href="news-page.html" className="article__more">Читать далее</a>
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-xl-2 col-md-3">
                <div className="news__date">
                  <span className="news__year">
                    2018
						</span>
                  <span className="news__day">
                    14 августа
						</span>
                </div>
              </div>
              <div className="col-xl-8 col-md-9">
                <div className="short__news">
                  <h3 className="full-link__title">
                    <a href="news-page.html" className="news__full-link"> Василий Петренко начал репититировать с оркестром концерт-презентацию</a>
                  </h3>
                  <a href="news-page.html" className="news__full-link--img">
                    <img src="../static/img/news-photo2.jpg" alt="Фото новости" />
                  </a>
                  <p className="short-news__text">
                    Глиссандо, согласно традиционным представлениям, начинает сонорный ревер. Пуантилизм, зародившийся в музыкальных микроформах
                    начала ХХ столетия, нашел далекую историческую параллель в лице средневекового гокета, однако гармонический интервал
                    просветляет контрапункт контрастных фактур, и здесь мы видим ту самую каноническую секвенцию с разнонаправленным шагом
                    отдельных звеньев. Мономерная остинатная педаль, в том числе, mezzo forte вызывает сет.
					      	</p>
                  <a href="news-page.html" className="article__more">Читать далее</a>
                </div>
              </div>
            </div>  */}
            <div className="row ">
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