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
    let tags = [];

    // get video tags
    response.results.map(video => {
      video.tags.split(" ").map(tag => {
        if (tag && !tags.includes(tag)) {
          tags.push(tag);
        }
      }
      )
    })
    return { videos: response.results, notMainVideos, tags }
  }

  state = {
    videos: this.props.videos,
    currentFilter: this.props.t("VideosPage.allVideos"),
    isSelected: false,
    notMainVideos: this.props.notMainVideos
  };

  render() {
    const { t, tags } = this.props;
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
                  <button className="filter__btn filter"
                    style={currentFilter === t("VideosPage.allVideos") ? StyleActiveTag : {}}
                    onClick={() => this.setState({ currentFilter: '' })}>{t("VideosPage.allVideos")}</button>

                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      className="filter__btn filter"
                      style={currentFilter === tag ? StyleActiveTag : {}}
                      onClick={() => this.setState({ currentFilter: tag })}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="row justify-content-center">

              <div className="col-lg-8" style={{ paddingBottom: '20px' }}>
                {notMainVideos[0] && notMainVideos.filter(video => currentFilter === t("VideosPage.allVideos") ? video : video.tags.includes(currentFilter)).slice(0, 1).map(video => (
                  <figure className="video__carts top__cart">
                    <div className="link__frame">
                      <a data-fancybox href={video.video} className="popap__video" id="autoplay">
                        <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.video)}/mqdefault.jpg`} alt="Превью видео" className="video__img" />
                      </a>
                    </div>
                    <figcaption>
                      <h3 className="video__title">{video.title}</h3>
                      {video.place && <p className="director">{video.place}</p>}
                      <div className="video__text" dangerouslySetInnerHTML={{ __html: video.text }}></div>
                      <ul className="hashtag">
                        {video.tags.split(" ").map((tag, index) => (
                          <li className="tags" key={index}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </figcaption>
                  </figure>
                ))
                }
              </div>

            </div>
            <div className="video-carts__flex-wrapper">
              {notMainVideos.length > 1 && notMainVideos.filter(video => currentFilter === t("VideosPage.allVideos") ? video : video.tags.includes(currentFilter)).slice(1).map(video => (
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
                        {video.place && <p className="director">{video.place}</p>}

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
                            #{tag}
                          </li>
                        ))}
                      </ul>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout >
    )
  }
}

export default withI18next(['common'])(Video);
