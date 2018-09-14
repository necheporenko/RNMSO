import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';

function getDaysArrayByMonth() {
  var daysInMonth = moment().daysInMonth();
  var arrDays = [];

  while (daysInMonth) {
    var current = moment().date(daysInMonth);
    arrDays.push(current);
    daysInMonth--;
  }

  return arrDays.reverse();
}

class Calendar extends React.Component {
  static async getInitialProps({ req, res }) {
    const FirstDayOfMounth = moment().startOf('month').format("YYYY-MM-DD");
    const LastDayOfMounth = moment().endOf('month').format("YYYY-MM-DD");

    const language = req || res ? req.language || res.locals.language : null;
    const response = await callApi(`/concerts/?limit=1&offset=0&dt_after=${FirstDayOfMounth}&dt_before=${LastDayOfMounth}`, language);
    // console.log(moment().startOf('month').format("YYYY-MM-DD"), moment().endOf('month').format("YYYY-MM-DD"));


    var mounthCalendar = getDaysArrayByMonth();
    // mounthCalendar.forEach(function (item) {
    //   console.log(item.format("DD/ddd"));
    // });
    return { concerts: response, language, mounthCalendar }
  }

  state = {
    concerts: this.props.concerts,
    offset: 0
  }

  handlePageClick = () => {
    const { offset } = this.state;

    // this.setState({ offset: 0 }, () => {
    this.loadCommentsFromServer();
    // });
  };

  async loadCommentsFromServer() {
    const { offset } = this.state;
    const { language } = this.props;

    const response = await callApi(`/concerts/?offset=${offset}`, language);
    this.setState({ concerts: response });
  }

  render() {
    const { t, language, mounthCalendar } = this.props;
    const { concerts } = this.state;

    moment.locale(language);
    return (
      <Layout title="Афиша">
        <main>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-3">
                <div className="page__title-line page__title--calendar ">
                  <h1 className="page__title title-calendar">
                    {t("MainMenu.afisha")}
                  </h1>
                </div>
              </div>


              <div className="col-lg-10 col-9">
                <div className="calendar__wrapper">
                  <a href="#" className="calendar-slider__date">{moment(mounthCalendar[0]).format("MMMM YYYY")}</a>
                  <div className="calendar-slider__mounth">
                    {mounthCalendar.map((day, index) => (
                      <div
                        key={index}
                        className={concerts.results.some(concert => moment(concert.dt).format("YYYY-MM-DD") === moment(day).format("YYYY-MM-DD"))
                          ? "slider-mounth__day event"
                          : "slider-mounth__day"}
                      >
                        <span>{moment(day).format("D")}</span>
                        <span>{moment(day).format("ddd")}</span>

                        {/* {concerts.results.some(concert => moment(concert.dt).format("YYYY-MM-DD") === moment(day).format("YYYY-MM-DD"))} */}

                        <div className="tooltip">
                          {concerts.results.filter(concert =>
                            moment(concert.dt).format("YYYY-MM-DD") === moment(day).format("YYYY-MM-DD"))
                            .map(concert => (
                              <div className="tooltip__event" key={concert.id}>
                                <Link href={`/program-page/${concert.id}`}>
                                  <a className="tooltip__title">{concert.title}</a>
                                </Link>
                                <p className="tooltip__desc">{`${moment(day).format("HH:mm")}, ${concert.place}`}</p>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    ))}


                    <div className="calendar-slider__nav">
                      <i className="icon-arrow-left calendar-slider__arrow calendar-slider__arrow--prev "></i>
                      <i className="icon-arrow-right calendar-slider__arrow calendar-slider__arrow--next "></i>
                    </div>
                  </div>
                </div>
              </div>





              <div className="col-lg-10 col-9">
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
                          <a href="program-page.html" className="tooltip__title">
                            Сказки с оркестром
                      </a>
                          <p className="tooltip__desc">
                            15:00, Филармония-2. Концертный зал Рахманинова / Москва
                      </p>
                        </div>
                        <div className="tooltip__event">
                          <a href="calendar-program.html" className="tooltip__title">
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
                          <a href="calendar-program.html" className="tooltip__title">
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
                          <a href="program-page.html" className="tooltip__title">
                            Сказки с оркестром
                      </a>
                          <p className="tooltip__desc">
                            15:00, Филармония-2. Концертный зал Рахманинова / Москва
                      </p>
                        </div>
                        <div className="tooltip__event">
                          <a href="calendar-program.html" className="tooltip__title">
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
                          <a href="program-page.html" className="tooltip__title">
                            Сказки с оркестром
                      </a>
                          <p className="tooltip__desc">
                            15:00, Филармония-2. Концертный зал Рахманинова / Москва
                      </p>
                        </div>
                        <div className="tooltip__event">
                          <a href="calendar-program.html" className="tooltip__title">
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
                          <a href="calendar-program.html" className="tooltip__title">
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
                          <a href="program-page.html" className="tooltip__title">
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
            <div className="row justify-content-center">
              {concerts.results.map(concert => (
                <div className="col-lg-4 col-sm-6 mycol" key={concert.id}>
                  <div className="event__cart">
                    <p className="event-cart__date">
                      {moment(concert.dt.slice(0, 16)).format("D MMMM")}
                      <sup>
                        <small>{moment(concert.dt.slice(0, 16)).format("YYYY")}</small>
                      </sup> / {moment(concert.dt.slice(0, 16)).format("D")} / {moment(concert.dt.slice(0, 16)).format("HH:mm")}
                    </p>
                    <p className="event-cart__room">{concert.place}</p>
                    <Link href={`/program-page/${concert.id}`}><a><img src={concert.image.replace('media/', 'media/small/')} alt="Первью события" /></a></Link>

                    <h2 className="event-cart__title">
                      <Link href={`/program-page/${concert.id}`}><a>{concert.title}</a></Link>
                    </h2>
                    <div className="event__participant-wrapper">
                      {concert.conductors.length > 0 &&
                        <div className="event-cart__participant">
                          {t("AfishaPage.conductors")}:
                          <p className="event-cart__soloist-name">
                            {concert.conductors.map(conductor => (
                              <span key={conductor.id}>{`${conductor.first_name} ${conductor.last_name}`}</span>
                            ))}
                          </p>
                        </div>
                      }
                      {concert.soloists.length > 0 &&
                        <div className="event-cart__participant">
                          {t("AfishaPage.soloists")}:
                            <p className="event-cart__soloist-name">
                            {concert.soloists.map(soloist => (
                              <span key={soloist.id}>{`${soloist.first_name} ${soloist.last_name} (${soloist.specialty})`}</span>
                            ))}
                          </p>
                        </div>
                      }
                      <Link href={concert.link_buy}>
                        <button className="act__btn event-cart__btn" type="button">{t("AfishaPage.buyTicket")}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {concerts.count > concerts.results.length && (
              <div className="row">
                <div className="col-12">
                  <div className="event-button__wrapper">
                    <button className="act__btn visible__btn" type="button" onClick={() => this.handlePageClick()}>
                      {t("AfishaPage.showAllConcerts")}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </Layout>
    )
  }
}

export default withI18next(['common'])(Calendar);