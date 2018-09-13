import React from 'react';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import { getYouTubeVideoId } from '../utils/common';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';

const StyleActiveTag = { background: '#CD4428', color: '#fff' };

class Video extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const language = req || res ? req.language || res.locals.language : null;
    const response = await callApi('/video', language);
    const notMainVideos = response.results.filter(video => (video.is_main !== true));
    return { videos: response.results, notMainVideos }
  }

  state = {
    videos: this.props.videos,
    currentFilter: this.props.t("VideosPage.allVideos"),
    isSelected: false,
    notMainVideos: this.props.notMainVideos
  };

  render() {
    const { t } = this.props;
    const { videos, currentFilter, notMainVideos } = this.state;
    return (
      <Layout title="Видео">
        <main className="m-before m-video">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page__title-line">
                  <h1 className="page__title">
                    {t("MediaMenu.video")}
                  </h1>
                  <Submenu menu="MediaMenu" activePage="video" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mycol">
                {videos.filter(video => video.is_main === true).map(video => (
                  <div className="main__video" key={video.id}>
                    <a data-fancybox href={video.video} className="popap__video">
                      <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.video)}/maxresdefault.jpg`} alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="controls top__controls">
                  {console.log(currentFilter, t("VideosPage.allVideos"))}
                  <button className="filter__btn filter" style={currentFilter === t("VideosPage.allVideos") ? StyleActiveTag : {}} onClick={() => this.setState({ currentFilter: '' })}>{t("VideosPage.allVideos")}</button>
                  <button className="filter__btn filter" style={currentFilter === t("VideosPage.videoblog") ? StyleActiveTag : {}} onClick={() => this.setState({ currentFilter: t("VideosPage.videoblog") })}>#{t("VideosPage.videoblog")}</button>
                  <button className="filter__btn filter" style={currentFilter === t("VideosPage.concerts") ? StyleActiveTag : {}} onClick={() => this.setState({ currentFilter: t("VideosPage.concerts") })}>#{t("VideosPage.concerts")}</button>
                  <button className="filter__btn filter" style={currentFilter === t("VideosPage.rehearsals") ? StyleActiveTag : {}} onClick={() => this.setState({ currentFilter: t("VideosPage.rehearsals") })}>#{t("VideosPage.rehearsals")}</button>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {notMainVideos[0] && notMainVideos[0].tags.includes(currentFilter) && (
                <div className="col-lg-8 ">
                  <figure className="video__carts top__cart">
                    <div className="link__frame">
                      <a data-fancybox href={notMainVideos[0].video} className="popap__video" id="autoplay">
                        <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(notMainVideos[0].video)}/mqdefault.jpg`} alt="Превью видео" className="video__img" />
                      </a>
                    </div>
                    <figcaption>
                      <h3 className="video__title">{notMainVideos[0].title}</h3>
                      <div className="video__text" dangerouslySetInnerHTML={{ __html: notMainVideos[0].text }}></div>
                      <ul className="hashtag">
                        {notMainVideos[0].tags.split(" ").map((tag, index) => (
                          <li className="tags" key={index}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </figcaption>
                  </figure>
                </div>
              )}

            </div>
            <div className="video-carts__flex-wrapper">
              {notMainVideos.length > 1 && notMainVideos.slice(1).filter(video => video.tags.includes(currentFilter)).map(video => (
                <div className="mix video__basis videoblog concert repetition" key={video.id}>
                  <figure className="video__carts">
                    <div className="link__frame">
                      <a data-fancybox href={video.video} className="popap__video" id="autoplay">
                        <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.video)}/mqdefault.jpg`} alt="Превью видео" className="video__img" />
                      </a>
                    </div>
                    <figcaption>
                      <h3 className="video__title">{video.title}</h3>
                      <div className="video__text">
                        <div dangerouslySetInnerHTML={{ __html: video.text }}></div>

                        {video.conductors.length > 0 && (
                          <p className="director">
                            <span>{t("AfishaPage.conductors")}: </span>
                            {video.conductors.map(conductor => (`${conductor.first_name} ${conductor.last_name}`))}
                          </p>
                        )}

                        <p className="programm" dangerouslySetInnerHTML={{ __html: video.program }}></p>
                      </div>

                      <ul className="hashtag">
                        {video.tags.split(" ").map((tag, index) => (
                          <li className="tags" key={index}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </figcaption>
                  </figure>
                </div>
              ))}


              {/* <div className="mix video__basis videoblog concert">
                <figure className="video__carts">
                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview4.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Видеоблог РНМСО. Выпуск 7
                </h3>
                    <div className="video__text">
                      Единственной космической субстанцией Гумбольдт считал материю, наделенную внутренней активностью, несмотря на это освобождение
                      трогательно наивно. Сомнение порождает и обеспечивает данный принцип восприятия, не учитывая мнения авторитетов.
                      Катарсис естественно преобразует трансцендентальный предмет деятельности. Реальность трансформирует гений.
                </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #видеоблог
                  </li>
                      <li className="tags">
                        #концерты
                  </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis concert">
                <figure className="video__carts">
                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview5.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Ночные концерты Московской филармонии «Мама, я меломан»
                </h3>
                    <div className="video__text">
                      <p className="showman">
                        Татьяна Геворкян (ведущая)
                  </p>
                      <p className="director">
                        <span>
                          Дирижёры:
                    </span>
                        Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
                  </p>
                      <p className="programm">
                        <span>
                          В программе:
                    </span>
                        Россини — Увертюра к опере «Сорока-воровка» Вагнер — Вступление к первому акту и антракт к третьему акту оперы «Лоэнгрин»
                        Дюка — «Ученик Чародея» Прокофьев — Фрагменты музыки балета «Золушка» Маркес — Danson № 2 Бернстайн — Сюита из мюзикла
                        «Вестсайдская история»
                  </p>
                    </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #концерты
                  </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis videoblog concert repetition">
                <figure className="video__carts">
                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview3.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Видеоблог РНМСО. Выпуск 8
                </h3>
                    <div className="video__text">
                      Закон исключённого третьего нетривиален. Сомнение осмысляет мир. Искусство методологически выводит данный дуализм. Ассоциация,
                      по определению, выводит трагический гравитационный парадокс. Эсхатологическая идея порождена временем.
                </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #видеоблог
                  </li>
                      <li className="tags">
                        #концерты
                  </li>
                      <li className="tags">
                        #репетиции
                  </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis videoblog concert">
                <figure className="video__carts">

                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview4.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Видеоблог РНМСО. Выпуск 7
                </h3>
                    <div className="video__text">
                      Единственной космической субстанцией Гумбольдт считал материю, наделенную внутренней активностью, несмотря на это освобождение
                      трогательно наивно. Сомнение порождает и обеспечивает данный принцип восприятия, не учитывая мнения авторитетов.
                      Катарсис естественно преобразует трансцендентальный предмет деятельности. Реальность трансформирует гений.
                </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #видеоблог
                  </li>
                      <li className="tags">
                        #концерты
                  </li>

                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis concert">
                <figure className="video__carts">
                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview5.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Ночные концерты Московской филармонии «Мама, я меломан»
                </h3>
                    <div className="video__text">
                      <p className="showman">
                        Татьяна Геворкян (ведущая)
                  </p>
                      <p className="director">
                        <span>
                          Дирижёры:
                    </span>
                        Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
                  </p>
                      <p className="programm">
                        <span>
                          В программе:
                    </span>
                        Россини — Увертюра к опере «Сорока-воровка» Вагнер — Вступление к первому акту и антракт к третьему акту оперы «Лоэнгрин»
                        Дюка — «Ученик Чародея» Прокофьев — Фрагменты музыки балета «Золушка» Маркес — Danson № 2 Бернстайн — Сюита из мюзикла
                        «Вестсайдская история»
                  </p>
                    </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #концерты
                  </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis videoblog concert repetition">
                <figure className="video__carts">
                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview3.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Видеоблог РНМСО. Выпуск 8
                </h3>
                    <div className="video__text">
                      Закон исключённого третьего нетривиален. Сомнение осмысляет мир. Искусство методологически выводит данный дуализм. Ассоциация,
                      по определению, выводит трагический гравитационный парадокс. Эсхатологическая идея порождена временем.
                </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #видеоблог
                  </li>
                      <li className="tags">
                        #концерты
                  </li>
                      <li className="tags">
                        #репетиции
                  </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis videoblog concert">
                <figure className="video__carts">

                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview4.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Видеоблог РНМСО. Выпуск 7
                </h3>
                    <div className="video__text">
                      Единственной космической субстанцией Гумбольдт считал материю, наделенную внутренней активностью, несмотря на это освобождение
                      трогательно наивно. Сомнение порождает и обеспечивает данный принцип восприятия, не учитывая мнения авторитетов.
                      Катарсис естественно преобразует трансцендентальный предмет деятельности. Реальность трансформирует гений.
                </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #видеоблог
                  </li>
                      <li className="tags">
                        #концерты
                  </li>

                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis concert">
                <figure className="video__carts">
                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview5.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Ночные концерты Московской филармонии «Мама, я меломан»
                </h3>
                    <div className="video__text">
                      <p className="showman">
                        Татьяна Геворкян (ведущая)
                  </p>
                      <p className="director">
                        <span>
                          Дирижёры:
                    </span>
                        Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
                  </p>
                      <p className="programm">
                        <span>
                          В программе:
                    </span>
                        Россини — Увертюра к опере «Сорока-воровка» Вагнер — Вступление к первому акту и антракт к третьему акту оперы «Лоэнгрин»
                        Дюка — «Ученик Чародея» Прокофьев — Фрагменты музыки балета «Золушка» Маркес — Danson № 2 Бернстайн — Сюита из мюзикла
                        «Вестсайдская история»
                  </p>
                    </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #концерты
                  </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis videoblog concert repetition">
                <figure className="video__carts">
                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview3.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Видеоблог РНМСО. Выпуск 8
                </h3>
                    <div className="video__text">
                      Закон исключённого третьего нетривиален. Сомнение осмысляет мир. Искусство методологически выводит данный дуализм. Ассоциация,
                      по определению, выводит трагический гравитационный парадокс. Эсхатологическая идея порождена временем.
                </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #видеоблог
                  </li>
                      <li className="tags">
                        #концерты
                  </li>
                      <li className="tags">
                        #репетиции
                  </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix video__basis videoblog concert">
                <figure className="video__carts">

                  <div className="link__frame">
                    <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                      <img src="../static/img/video-preview4.jpg" alt="Превью видео" className="video__img" />
                    </a>
                  </div>
                  <figcaption>
                    <h3 className="video__title">
                      Видеоблог РНМСО. Выпуск 7
                </h3>
                    <div className="video__text">
                      Единственной космической субстанцией Гумбольдт считал материю, наделенную внутренней активностью, несмотря на это освобождение
                      трогательно наивно. Сомнение порождает и обеспечивает данный принцип восприятия, не учитывая мнения авторитетов.
                      Катарсис естественно преобразует трансцендентальный предмет деятельности. Реальность трансформирует гений.
                </div>
                    <ul className="hashtag">
                      <li className="tags">
                        #видеоблог
                  </li>
                      <li className="tags">
                        #концерты
                  </li>

                    </ul>
                  </figcaption>
                </figure>
              </div>
              <div className="mix concert video__basis"> */}
              {/* <figure className="video__carts">
                <div className="link__frame">
                  <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                    <img src="../static/img/video-preview5.jpg" alt="Превью видео" className="video__img" />
                  </a>
                </div>
                <figcaption>
                  <h3 className="video__title">
                    Ночные концерты Московской филармонии «Мама, я меломан»
                </h3>
                  <div className="video__text">
                    <p className="showman">
                      Татьяна Геворкян (ведущая)
                  </p>
                    <p className="director">
                      <span>
                        Дирижёры:
                    </span>
                      Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
                  </p>
                    <p className="programm">
                      <span>
                        В программе:
                    </span>
                      Россини — Увертюра к опере «Сорока-воровка» Вагнер — Вступление к первому акту и антракт к третьему акту оперы «Лоэнгрин»
                      Дюка — «Ученик Чародея» Прокофьев — Фрагменты музыки балета «Золушка» Маркес — Danson № 2 Бернстайн — Сюита из мюзикла
                      «Вестсайдская история»
                  </p>
                  </div>
                  <ul className="hashtag">
                    <li className="tags">
                      #концерты
                  </li>
                  </ul>
                </figcaption>
              </figure>
            </div> */}
            </div>
          </div>
        </main>
      </Layout >
    )
  }
}

export default withI18next(['common'])(Video);
