import React from 'react';
import Slider from "react-slick";
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import { getYouTubeVideoId } from '../utils/common';
import Layout from '../layouts/Main';

const PrevArrow = ({ onClick }) => (<i onClick={onClick} className="icon-arrow-left slider__nav slider__nav--prev "></i>);
const NextArrow = ({ onClick }) => (<i onClick={onClick} className="icon-arrow-right slider__nav slider__nav--next "></i>);
const SliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};


const Home = ({ t, videos, news, concerts }) => (
  <Layout>
    <header className="header home">
      <div className="bottom__line">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <h1 className="header__title">{t("OrchestraName")}</h1>
            </div>
            <div className="col-xl-7 offset-xl-1 col-lg-8 offset-lg-0">
              <div className="act">
                <p className="event">
                  {t("MainPage.listening")}:
                  <time dateTime="2018-09">Сентябрь 2018</time>
                </p>
                <p className="invite"> {t("MainPage.musiciansInvited")}</p>
                <div className="button__wrapper">
                  <Link href="/application"><a className="act__btn">{t("ApplicationPage.form.apply")}</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="s-events">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="events__calendar">
              <ul className="events__date">
                {/* <li>
                  <a href="#" className="no-link">
                    <span>19</span>
                    <sup>
                      <small>июл</small>
                    </sup>
                  </a>
                </li>
                <li>
                  <a href="#" className="no-link">
                    <span>29</span>
                    <sup>
                      <small>июл</small>
                    </sup>
                  </a>
                </li>
                <li>
                  <a href="#" className="no-link">
                    <span>03</span>
                    <sup>
                      <small>авг</small>
                    </sup>
                  </a>
                </li>

                <li>
                  <a href="#" className="no-link">
                    <span>14</span>
                    <sup>
                      <small>авг</small>
                    </sup>
                  </a>
                </li>
                <li>
                  <a href="#" className="no-link">
                    <span>26</span>
                    <sup>
                      <small>авг</small>
                    </sup>
                  </a>
                </li> */}
              </ul>
              <div className="full__calendar">
                <Link href="/calendar">
                  <a href="#" className="top-line__link">{t("MainMenu.calendarOfConcerts")}</a>
                </Link>
                <i className="icon-calendar"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="carrousel__wrapper">
              <div className="owl-carousel event__slider">
                <Slider {...SliderSettings}>
                  {concerts.map(concert => (
                    <Link as={`/program-page/${concert.id}`} href={`/program-page?id=${concert.id}`} key={concert.id}>
                      <a className="slide__link" target="_blank">
                        <div className="slider__item">
                          <div className="slider__left">
                            <div className="slider__top-line">
                              <div className="slider__date">
                                <div className="date__day">
                                  <span>03</span>
                                  <sup>
                                    <small>Августа</small>
                                  </sup>
                                </div>
                                <div className="date__time">
                                  <span className="day">сб</span>
                                  <span className="time">19:00</span>
                                </div>
                              </div>
                              <div className="slider__site">
                                <span className="site__sity">{concert.place}</span>
                                {/* <span className="site__room"> Большой зал Консерватории</span> */}
                              </div>
                            </div>
                            <div className="slider__content">
                              <h3 className="slider__title">{concert.title}</h3>
                              <p className="slider__participants">
                                <span className="participants__post">{t("AfishaPage.conductors")}: </span>
                                {concert.conductors.map(conductor => (
                                  <span className="participants__name" key={conductor.id}>{`${conductor.first_name} ${conductor.last_name}`}</span>
                                ))}
                              </p>
                              <p className="slider__participants">
                                <span className="participants__post">{t("AfishaPage.soloists")}: </span>
                                {concert.soloists.map(soloist => (
                                  <span className="participants__name" key={soloist.id}>{`${soloist.first_name} ${soloist.last_name} (${soloist.specialty})`}</span>
                                ))}
                              </p>
                              <div className="slider__program">
                                <span className="program__title">{t("MainPage.inProgramme")}:</span>
                                <div dangerouslySetInnerHTML={{ __html: concert.event_program }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="slide__right">
                            <img src="../static/img/slide1.jpg" alt="Участник концерта" />
                            <img src="../static/img/slide2.jpg" alt="Участник концерта" />
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="s-video">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-12">
            <div className="block__top-line">
              <h4>{t("MediaMenu.video")}</h4>
              <Link href="/video">
                <a target="_blank" className="top-line__link">
                  {t("MainPage.allVideo")}
                  <i className="icon-play-button"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {videos.map(video => (
            <div className="col-xl-5 col-md-6" key={video.id}>
              <figure className="video__carts">
                <div className="link__frame">
                  <a data-fancybox href={video.video} className="popap__video">
                    <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.video)}/mqdefault.jpg`} alt="Превью видео" className="video__img" />
                  </a>
                </div>
                <figcaption className="video__title">
                  {video.title}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="owl-carousel video-slider">
            <div className="video-slider__item">
              <div className="link__frame link__frame--slider">
                <a data-fancybox href="https://vimeo.com/63186969" className="popap__video">
                  <img src="../static/img/videoimg1.jpg" alt="Превью видео" className="video__img" />
                </a>
                <p className="video__title video__title--slider">
                  Видеоблог РНМСО. Выпуск 8
                </p>
              </div>
            </div>
            <div className="video-slider__item">
              <div className="link__frame link__frame--slider">
                <a data-fancybox href="https://vimeo.com/63186969" className="popap__video">
                  <img src="../static/img/videoimg1.jpg" alt="Превью видео" className="video__img" />

                </a>
                <p className="video__title video__title--slider">
                  Видеоблог РНМСО. Выпуск 8
                </p>
              </div>
            </div>
            <div className="video-slider__item">
              <div className="link__frame link__frame--slider">
                {/* <Popup
                  className="popup-youtube"
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                  savefrom_lm_index="0"
                  savefrom_lm="1"
                  config={popupConfig}
                >
                  <a data-fancybox href="https://vimeo.com/63186969" className="popap__video">
                    <img src="../static/img/videoimg1.jpg" alt="Превью видео" className="video__img" />

                  </a>
                  <p className="video__title video__title--slider">
                    Видеоблог РНМСО. Выпуск 8
                </p>
                </Popup> */}
                {/* <BYoutube src="https://www.youtube.com/watch?v=TTAU7lLDZYU">
                  <img src="http://lorempixel.com/400/200/sports/3" />
                </BYoutube> */}
                {/*      */}

              </div>
            </div>
            <div className="video-slider__item">
              <div className="link__frame link__frame--slider">
                <a data-fancybox href="https://vimeo.com/63186969" className="popap__video">
                  <img src="../static/img/videoimg1.jpg" alt="Превью видео" className="video__img" />

                </a>
                <p className="video__title video__title--slider">
                  Видеоблог РНМСО. Выпуск 8
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="s-news">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-12">
            <div className="block__top-line">
              <h4>{t("MediaMenu.news")}</h4>
              <Link href="/news">
                <a target="_blank" className="top-line__link">
                  {t("MainPage.allNews")}
                  <i className="icon-news"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {news.map(post => (
            <div className="col-xl-5 col-md-6" key={post.id}>
              <div className="news-cart">
                <div className="news-cart__title">
                  <Link as={`/news/${post.id}`} href={`/news-page?id=${post.id}`}>
                    <a className="news__title">{post.title}</a>
                  </Link>
                </div>
                <div className="news-cart__img">
                  {post.image && <img src={post.image} alt="Превью новости" />}
                </div>
                <div className="news-cart__text">
                  <p dangerouslySetInnerHTML={{ __html: post.announcement }}></p>
                </div>
                <Link as={`/news/${post.id}`} href={`/news-page?id=${post.id}`}>
                  <a className="news-cart__more" target="_blank">{t("MainPage.learnMore")}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)


Home.getInitialProps = async ({ req, res }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const responseVideo = await callApi('/video/?limit=4&offset=0', language);
  const responseNews = await callApi('/news/?limit=2&offset=0', language);
  const responseConcerts = await callApi('/concerts/?limit=4&offset=0', language);
  return { videos: responseVideo.results, news: responseNews.results, concerts: responseConcerts.results }
}

export default withI18next(['common'])(Home);
