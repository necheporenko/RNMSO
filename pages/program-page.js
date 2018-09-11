import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import { getYouTubeVideoId } from '../utils/common';
import Lightbox from 'react-images';
import Layout from '../layouts/Main';

const ProgramPage = ({ t, concert }) => (
  <Layout title="">
    <main className="calendar--program">
      <div className="container">
        <div className="row">
          <div className="col-12 d-none d-xl-block">
            <div className="calendar__wrapper">
              <a href="#" className="calendar-slider__date">Октябрь 2018</a>
              <div className="calendar-slider__mounth">
                <div className="slider-mounth__day">
                  <span>1</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>2</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>3</span>
                  <span>ср</span>
                </div>
                <div className="slider-mounth__day">
                  <span>4</span>
                  <span>чт</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>5</span>
                  <span>пт</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Сказки с оркестром
                  </a>
                      <p className="tooltip__desc">
                        15:00, Филармония-2. Концертный зал Рахманинова / Москва
                  </p>
                    </div>
                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Мама, я Меломан
                  </a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
                  </p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>6</span>
                  <span>сб</span>
                </div>
                <div className="slider-mounth__day">
                  <span>7</span>
                  <span>вс</span>
                </div>
                <div className="slider-mounth__day">
                  <span>8</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>9</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>10</span>
                  <span>ср</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>11</span>
                  <span>чт</span>
                  <div className="tooltip">

                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Мама, я Меломан
                  </a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
                  </p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>12</span>
                  <span>пт</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>13</span>
                  <span>сб</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Сказки с оркестром
                  </a>
                      <p className="tooltip__desc">
                        15:00, Филармония-2. Концертный зал Рахманинова / Москва
                  </p>
                    </div>
                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Мама, я Меломан
                  </a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
                  </p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>14</span>
                  <span>вс</span>
                </div>
                <div className="slider-mounth__day">
                  <span>15</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>16</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>17</span>
                  <span>ср</span>
                </div>
                <div className="slider-mounth__day">
                  <span>18</span>
                  <span>чт</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>19</span>
                  <span>пт</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Сказки с оркестром
                  </a>
                      <p className="tooltip__desc">
                        15:00, Филармония-2. Концертный зал Рахманинова / Москва
                  </p>
                    </div>
                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Мама, я Меломан
                  </a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
                  </p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day event">
                  <span>20</span>
                  <span>сб</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Мама, я Меломан
                  </a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
                  </p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>21</span>
                  <span>вс</span>
                </div>
                <div className="slider-mounth__day">
                  <span>22</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>23</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>24</span>
                  <span>ср</span>
                </div>
                <div className="slider-mounth__day">
                  <span>25</span>
                  <span>чт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>26</span>
                  <span>пт</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>27</span>
                  <span>сб</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="#" className="tooltip__title">
                        Сказки с оркестром
                  </a>
                      <p className="tooltip__desc">
                        15:00, Филармония-2. Концертный зал Рахманинова / Москва
                  </p>
                    </div>

                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>28</span>
                  <span>вс</span>
                </div>
                <div className="slider-mounth__day">
                  <span>29</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>30</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>31</span>
                  <span>ср</span>
                </div>
              </div>
              <div className="calendar-slider__nav">
                <i className="icon-arrow-left calendar-slider__arrow calendar-slider__arrow--prev "></i>
                <i className="icon-arrow-right calendar-slider__arrow calendar-slider__arrow--next "></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="affiche__comeback">
              <a href="#" className="event__toglle prev__event">
                14 сентября <sup><small>2018</small></sup>
              </a>
              <a href="calendar.html" className="affiche__comeback-link">Вернуться в афишу</a>
              <a href="#" className="event__toglle next__event">
                2 октября <sup><small>2018</small></sup>
              </a>
            </div>
          </div>
        </div>
        {concert.id && (
          <div>
            <div className="row">
              <div className="col-xl-2 col-md-3 col-8">
                <div className="slider__date">
                  <div className="date__day date__day--program ">
                    <span>23</span>
                    <sup>
                      <small>Сентября 2018</small>
                    </sup>
                  </div>
                  <div className="date__time">
                    <span className="day">сб</span>
                    <span className="time">19:00</span>
                  </div>
                </div>
              </div>
              <div className="affiche__comeback affiche__comeback--second">
                <a href="calendar.html" className="affiche__comeback-link ">Вернуться в афишу</a>
              </div>
              <div className="col-xl-8 col-md-9 col-12">
                <h1 className=" page__title page__title--program">{concert.title}</h1>
              </div>

              <div className="col-lg-2  d-none  d-xl-block">
                <div className="program-button__wrapper">
                  <button className="act__btn act__btn--program-page" type="button">
                    Купить билет
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 d-block  d-xl-none ordercol">
                <div className="program-button__wrapper program-button__wrapper--second">
                  <button className="act__btn act__btn--program-page" type="button">
                    Купить билет
                  </button>
                </div>
              </div>
              <div className="col-xl-6 offset-xl-2 col-md-9 offset-md-0 ">
                <p className="program__place"><b>{concert.place}</b></p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-none d-sm-block">
                <div className="program__photo-wrapper clearfix">
                  <div className="program__photo-title">
                    <a data-fancybox="group" href={concert.image}>
                      <img src={concert.image} />
                    </a>
                  </div>
                  <div className="program__photo-gallery">
                    <div className="photo-gallery__item">
                      <a data-fancybox href={concert.video} className="popap__video popap__video--program-page"
                        id="autoplay">
                        <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(concert.video)}/mqdefault.jpg`} alt="Фотогалерея" className="program1" />
                      </a>
                    </div>

                    {concert.images.map(image => (
                      <div className="photo-gallery__item" key={image.id}>
                        <a data-fancybox="group" href={`http://31.192.109.44${image.image}`}>
                          <img src={`http://31.192.109.44${image.image}`} />
                        </a>
                      </div>
                    ))}


                    {/* <div style="display: none;">
                  <a data-fancybox="group" href="img/gallery/big/program/program-big6.jpg">
                    <img src="../static/img/gallery/small/program/program6.jpg" />
                  </a>
                  <a data-fancybox="group" href="img/gallery/big/program/program-big7.jpg">
                    <img src="../static/img/gallery/small/program/program7.jpg" />
                  </a>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-block d-sm-none mycol">
                <div className="owl-carousel program-page__carousel">
                  <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/program/program-title-photo1.jpg">
                    <img src="../static/img/gallery/small/program/program-title-photo1.jpg" />>
          </a>
                  <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video popap__video--program-page"
                    rel="carousel" id="autoplay">
                    <img src="../static/img/gallery/small/program/program1.jpg" alt="Фотогалерея" className="program1" />
                  </a>
                  <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/program/program-big2.jpg">
                    <img src="../static/img/gallery/small/program/program2.jpg" />
                  </a>

                  <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/program/program-big3.jpg">
                    <img src="../static/img/gallery/small/program/program3.jpg" />
                  </a>
                  <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/program/program-big4.jpg">
                    <img src="../static/img/gallery/small/program/program4.jpg" />
                  </a>


                  <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/program/program-big6.jpg">
                    <img src="../static/img/gallery/small/program/program6.jpg" />
                  </a>

                  <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/program/program-big7.jpg">
                    <img src="../static/img/gallery/small/program/program7.jpg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="program__short-descriotion">
                  <div className="short-descriotion__item">
                    <span>{t("AfishaPage.conductors")}:</span>
                    <p>
                      {concert.conductors.map(conductor => (
                        <span key={conductor.id}>{`${conductor.first_name} ${conductor.last_name}`}</span>
                      ))}
                    </p>
                  </div>
                  <div className="short-descriotion__item">
                    <span>{t("AfishaPage.soloists")}:</span>
                    <p>
                      {concert.soloists.map(soloist => (
                        <span key={soloist.id}>{`${soloist.first_name} ${soloist.last_name} (${soloist.specialty})`}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="in-program">
                  <p className="in-program__title">В программе</p>
                  <div dangerouslySetInnerHTML={{ __html: concert.event_program }}></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="program__description" dangerouslySetInnerHTML={{ __html: concert.announcement }}></div>
              </div>

            </div>
            <div className="row">
              <div className="col-12">
                <div className="program-button__wrapper program-button__wrapper--bottom">
                  <button className="act__btn act__btn--program-page bottom__btn--program-page" type="button">
                    Купить билет
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  </Layout>
)


ProgramPage.getInitialProps = async ({ req, res, query }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const concertID = query.id;
  const response = await callApi(`/concerts/${concertID}`, language);
  return { concert: response };
}
export default withI18next(['common'])(ProgramPage);


