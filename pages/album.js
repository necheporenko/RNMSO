import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Lightbox from 'react-images';
import Layout from '../layouts/Main';


class Album extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const language = req || res ? req.language || res.locals.language : null;
    const albumID = query.id;
    const response = await callApi(`/gallery-photo/?gallery=${albumID}`, language);
    return { photos: response };
  }

  state = {
    lightboxIsOpen: false,
    currentImage: 0,
  };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage = (index) => {
    this.setState({
      currentImage: index,
    });
  }

  renderGallery = () => {
    const { photos } = this.props;
    photos.results && photos.results.map((photo, index) => (
      <a
        href={photo.image}
        onClick={(e) => this.openLightbox(index, e)}
        key={photo.id}
      >
        <img src={photo.image} />
      </a>
    ))
  }


  render() {
    const { t, photos } = this.props;
    return (
      <Layout title="">
        <main>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="come-back">
                  <Link href="/photo"><a>Вернуться к фотоальбомам</a></Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h1 className="album__title">
                  Конкурс 2018
                </h1>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="album__quantity">
                  <span className="album__value">28</span>
                  фото
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="album__waves">
                  <img src="../static/../static/img/waves.png" alt="logo" />
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="album__description">{photos.results.text}</p>
              </div>
            </div>
            <div className="row">
              <div className="photo__album">
                {this.renderGallery()}
                <Lightbox
                  images={(photos.results && photos.results.map(photo => { return { src: photo.image } })) || []}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                  onClickNext={this.gotoNext}
                  onClickPrev={this.gotoPrevious}
                  onClose={this.closeLightbox}
                  onClickThumbnail={this.gotoImage}
                  showThumbnails={true}
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default withI18next(['common'])(Album);
