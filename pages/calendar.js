import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';

function getDaysArrayByMonth(currentMounth, language) {
  currentMounth.locale(language);
  var daysInMonth = moment(currentMounth).daysInMonth();
  var arrDays = [];

  while (daysInMonth) {
    var current = moment(currentMounth).date(daysInMonth);
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
    const response = await callApi(`/concerts/?limit=9&offset=0&dt_after=${FirstDayOfMounth}&dt_before=${LastDayOfMounth}`, language);


    var mounthCalendar = getDaysArrayByMonth(moment(), language);

    return { concerts: response, language, mounthCalendar }
  }

  state = {
    concerts: this.props.concerts,
    offset: 0,
    currentMounth: moment(),
    mounthCalendar: this.props.mounthCalendar
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

  changeMounth = (direction) => {
    const { currentMounth } = this.state;

    if (direction === "next") {
      this.setState({ currentMounth: moment(currentMounth).add(1, 'months') }, () => this.loadAnotherMounth())
    } else if (direction === "prev") {
      this.setState({ currentMounth: moment(currentMounth).subtract(1, 'months') }, () => this.loadAnotherMounth())
    }

  }

  async loadAnotherMounth() {
    const { currentMounth } = this.state;
    const { language, mounthCalendar } = this.props;

    moment.locale(language);
    const FirstDayOfMounth = moment(currentMounth).startOf('month').format("YYYY-MM-DD");
    const LastDayOfMounth = moment(currentMounth).endOf('month').format("YYYY-MM-DD");

    const response = await callApi(`/concerts/?limit=9&offset=0&dt_after=${FirstDayOfMounth}&dt_before=${LastDayOfMounth}`, language);

    this.setState({
      mounthCalendar: getDaysArrayByMonth(currentMounth, language),
      concerts: response
    })
  }

  render() {
    const { t, language } = this.props;
    const { concerts, mounthCalendar } = this.state;

    moment.locale(language);
    return (
      <Layout title={t("MainMenu.afisha")}>
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
                        <span style={{ textTransform: 'lowercase' }}>{moment(day).format("dd")}</span>

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
                      <i onClick={() => this.changeMounth("prev")} className="icon-arrow-left calendar-slider__arrow calendar-slider__arrow--prev "></i>
                      <i onClick={() => this.changeMounth("next")} className="icon-arrow-right calendar-slider__arrow calendar-slider__arrow--next "></i>
                    </div>
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