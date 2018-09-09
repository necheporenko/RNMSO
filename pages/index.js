import React from 'react';
import Slider from "react-slick";
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

const Home = () => (
  <Layout>
    <header className="header home">
      <div className="bottom__line">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <h1 className="header__title">
                Российский Национальный Молодежный Симфонический Оркестр
              </h1>
            </div>
            <div className="col-xl-7 offset-xl-1 col-lg-8 offset-lg-0">
              <div className="act">
                <p className="event">
                  Прослушивания в оркестр:
                  <time dateTime="2018-09">Сентябрь 2018</time>
                </p>
                <p className="invite">
                  Приглашаются музыканты от 20 до 28 лет
                </p>
                <div className="button__wrapper">
                  <a href="application.html" className="act__btn">Подать заявку</a>
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
                <li>
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
                </li>

              </ul>
              <div className="full__calendar">
                <a href="#" className="top-line__link">Календарь концертов</a>
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
                  <a href="program-page.html" className="slide__link" target="_blank">
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
                            <span className="site__sity">
                              Москва
                            </span>
                            <span className="site__room">
                              Большой зал Консерватории
                            </span>
                          </div>
                        </div>
                        <div className="slider__content">
                          <h3 className="slider__title">
                            Концерт-презентация оркестра
                          </h3>
                          <p className="slider__participants">
                            <span className="participants__post">
                              Дирижёр -
                            </span>
                            <span className="participants__name">
                              Василий пертенко
                            </span>
                          </p>
                          <p className="slider__participants">
                            <span className="participants__post">
                              Солист :
                            </span>
                            <span className="participants__name">
                              Симон Трпчески (фортепиано)
                            </span>
                          </p>
                          <div className="slider__program">
                            <span className="program__title">
                              В программе:
                            </span>
                            <ul className="program__list">
                              <li>
                                Светланов
                              </li>
                              <li>
                                Лист
                              </li>
                              <li>
                                Рахманинов
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                      <div className="slide__right">
                        <img src="../static/img/slide1.jpg" alt="Участник концерта" />
                        <img src="../static/img/slide2.jpg" alt="Участник концерта" />
                      </div>
                    </div>
                  </a>
                  <a href="program-page.html" className="slide__link" target="_blank">
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
                            <span className="site__sity">
                              Москва
                            </span>
                            <span className="site__room">
                              Большой зал Консерватории
                            </span>
                          </div>
                        </div>
                        <div className="slider__content">
                          <h3 className="slider__title">
                            Концерт-презентация оркестра
                          </h3>
                          <p className="slider__participants">
                            <span className="participants__post">
                              Дирижёр -
                            </span>
                            <span className="participants__name">
                              Василий пертенко
                            </span>
                          </p>
                          <p className="slider__participants">
                            <span className="participants__post">
                              Солист :
                            </span>
                            <span className="participants__name">
                              Симон Трпчески (фортепиано)
                            </span>
                          </p>
                          <div className="slider__program">
                            <span className="program__title">
                              В программе:
                            </span>
                            <ul className="program__list">
                              <li>
                                Светланов
                              </li>
                              <li>
                                Лист
                              </li>
                              <li>
                                Рахманинов
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                      <div className="slide__right">
                        <img src="../static/img/slide1.jpg" alt="Участник концерта" />
                        <img src="../static/img/slide2.jpg" alt="Участник концерта" />
                      </div>
                    </div>
                  </a>
                  <a href="program-page.html" className="slide__link" target="_blank">
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
                            <span className="site__sity">
                              Москва
                          </span>
                            <span className="site__room">
                              Большой зал Консерватории
                          </span>
                          </div>
                        </div>
                        <div className="slider__content">
                          <h3 className="slider__title">
                            Концерт-презентация оркестра
                        </h3>
                          <p className="slider__participants">
                            <span className="participants__post">
                              Дирижёр -
                          </span>
                            <span className="participants__name">
                              Василий пертенко
                          </span>
                          </p>
                          <p className="slider__participants">
                            <span className="participants__post">
                              Солист :
                          </span>
                            <span className="participants__name">
                              Симон Трпчески (фортепиано)
                          </span>
                          </p>
                          <div className="slider__program">
                            <span className="program__title">
                              В программе:
                          </span>
                            <ul className="program__list">
                              <li>
                                Светланов
                            </li>
                              <li>
                                Лист
                            </li>
                              <li>
                                Рахманинов
                            </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide__right">
                        <img src="../static/img/slide1.jpg" alt="Участник концерта" />
                        <img src="../static/img/slide2.jpg" alt="Участник концерта" />
                      </div>
                    </div>
                  </a>
                </Slider>
              </div>
              {/* <div className="slide__nav">
                <i className="icon-arrow-left slider__nav slider__nav--prev "></i>
                <i className="icon-arrow-right slider__nav slider__nav--next "></i>
              </div> */}
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
              <h4>
                Видео
              </h4>
              <a href="video.html" target="_blank" className="top-line__link">
                Все видео
                <i className="icon-play-button"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-5 col-md-6">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/videoimg1.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption className="video__title">
                Видеоблог РНМСО. Выпуск 7
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-5 col-md-6">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video">
                  <img src="../static/img/videoimg2.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption className="video__title">
                Видеоблог РНМСО. Выпуск 8
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-5 col-md-6">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://vimeo.com/63186969" className="popap__video">
                  <img src="../static/img/videoimg1.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption className="video__title">
                Видеоблог РНМСО. Выпуск 7
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-5 col-md-6">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://vimeo.com/63186969" className="popap__video">
                  <img src="../static/img/videoimg2.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption className="video__title">
                Видеоблог РНМСО. Выпуск 8
              </figcaption>
            </figure>
          </div>
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
          </div>
        </div>
      </div>

    </section>
    <section className="s-news">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-12">
            <div className="block__top-line">
              <h4>
                Новости
              </h4>
              <a href="news.html" target="_blank" className="top-line__link">
                Все новости
                <i className="icon-news"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-5 col-md-6">
            <div className="news-cart">
              <div className="news-cart__title">
                <a href="news-page.html" className="news__title">Начались сентябрьские прослушивания в оркестр</a>
              </div>
              <div className="news-cart__img">

              </div>
              <div className="news-cart__text">
                <p>
                  Глиссандо регрессийно иллюстрирует целотоновый контрапункт контрастных фактур, потому что современная музыка не запоминается.
                  Алеаторика дает open-air. Панладовая система, в первом приближении, имитирует соноропериод, благодаря широким мелодическим
                  скачкам.
                </p>
              </div>
              <a href="news-page.html" className="news-cart__more" target="_blank">
                Подробнее
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <div className="news-cart">
              <div className="news-cart__title">
                <a href="news-page.html" className="news__title">Премьерный концерт оркестра состоится в ноябре 2018 года</a>
              </div>
              <div className="news-cart__img">
                <img src="../static/img/newsimg.jpg" alt="Превью новости" />
              </div>
              <div className="news-cart__text">
                <p>
                  Плотностная компонентная форма, согласно традиционным представлениям, mezzo forte образует серийный форшлаг, таким образом
                  конструктивное состояние всей музыкальной ткани или какой-либо из составляющих ее субструктур (в том числе: временнoй,
                  гармонической, динамической, тембровой, темповой) возникает как следствие их выстраивания на основе определенного
                  ряда (модуса).
                </p>
              </div>
              <a href="news-page.html" className="news-cart__more" target="_blank">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Home
