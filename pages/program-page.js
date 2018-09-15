import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import i18n from '../i18n';
import moment from 'moment';
import callApi from '../utils/api';
import { getYouTubeVideoId } from '../utils/common';
import Lightbox from 'react-images';
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

class ProgramPage extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const FirstDayOfMounth = moment().startOf('month').format("YYYY-MM-DD");
    const LastDayOfMounth = moment().endOf('month').format("YYYY-MM-DD");

    const language = req || res ? req.language || res.locals.language : null;
    const response = await callApi(`/concerts/?limit=9&offset=0&dt_after=${FirstDayOfMounth}&dt_before=${LastDayOfMounth}`, language);


    var mounthCalendar = getDaysArrayByMonth(moment(), i18n.languagege);


    const concertID = query.id;
    const responseConcert = await callApi(`/concerts/${concertID}`, language);

    return { concert: responseConcert, concerts: response, mounthCalendar, language };
  }

  state = {
    concerts: this.props.concerts,
    offset: 0,
    currentMounth: moment(),
    mounthCalendar: this.props.mounthCalendar
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.i18n.language !== i18n.language) {
      return { concerts: nextProps.concerts, mounthCalendar: nextProps.mounthCalendar }
    }
    return null;
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
    const { t, language, concert } = this.props;
    const { concerts, mounthCalendar } = this.state;
    moment.locale(i18n.language);

    return (
      <Layout title={concert.title}>
        <main className="calendar--program">
          <div className="container">
            <div className="row">
              <div className="col-12 d-none d-xl-block">
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
                              <Link as={`/program-page/${concert.id}`} href={`/program-page?id=${concert.id}`} key={concert.id}>
                                <div className="tooltip__event">
                                  <a className="tooltip__title">{concert.title}</a>
                                  <p className="tooltip__desc">{`${moment(concert.dt.slice(0, 16)).format("HH:mm")}, ${concert.place}`}</p>
                                </div>
                              </Link>
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
            {/* <div className="row">
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
          </div> */}
            {concert.id && (
              <div>
                <div className="row">
                  <div className="col-xl-2 col-md-3 col-8">
                    <div className="slider__date">
                      <div className="date__day date__day--program ">
                        <span>{moment(concert.dt.slice(0, 16)).format("D")}</span>
                        <sup>
                          <small>{moment(concert.dt.slice(0, 16)).format("MMMM YYYY")}</small>
                        </sup>
                      </div>
                      <div className="date__time">
                        <span className="day">{moment(concert.dt.slice(0, 16)).format("dd")}</span>
                        <span className="time">{moment(concert.dt.slice(0, 16)).format("HH:mm")}</span>
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
                      <a href={concert.link_buy} target="_blank">
                        <button className="act__btn act__btn--program-page" type="button">
                          {t("AfishaPage.buyTicket")}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 d-block  d-xl-none ordercol">
                    <div className="program-button__wrapper program-button__wrapper--second">
                      <a href={concert.link_buy} target="_blank">
                        <button className="act__btn act__btn--program-page" type="button">
                          {t("AfishaPage.buyTicket")}
                        </button>
                      </a>
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

                        {concert.conductors.map(conductor => (
                          <p key={conductor.id}>{`${conductor.first_name} ${conductor.last_name}`}
                          </p>
                        ))}

                      </div>
                      <div className="short-descriotion__item">
                        <span>{t("AfishaPage.soloists")}:</span>
                        <p>
                          {concert.soloists.map(soloist => (
                            <p key={soloist.id} style={{ display: 'flex' }}>
                              {`${soloist.first_name} ${soloist.last_name} `}
                              <span style={{ marginLeft: '5px' }}>{`(${soloist.specialty.toLowerCase()})`}</span>
                            </p>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="in-program">
                      <p className="in-program__title">{t("MainPage.inProgramme")}</p>
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
                      <a href={concert.link_buy} target="_blank">
                        <button className="act__btn act__btn--program-page bottom__btn--program-page" type="button">
                          {t("AfishaPage.buyTicket")}
                        </button>
                      </a>
                    </div>
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

export default withI18next(['common'])(ProgramPage);


