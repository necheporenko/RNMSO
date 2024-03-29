import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';
import { IP } from '../constants/settings';

const Photo = ({ t, gallery }) => (
  <Layout title={t("MediaMenu.photo")}>
    <main className="m-before">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line">
              <h1 className="page__title">
                {t("MediaMenu.photo")}
              </h1>
              <Submenu menu="MediaMenu" activePage="photo" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {gallery.length > 0 && gallery.map(album => (
            <div className="col-lg-4 col-md-6" key={album.id}>
              <div className="gallery__flex-wrapper">
                <Link as={`/album/${album.id}`} href={`/album?id=${album.id}`}>
                  <a className="gallery__link">
                    {album.main_photo && <img src={`${IP}/media/small/${album.main_photo.image.substring(6)}`} alt="Фотогаллерея" />}
                    <div className="gallery__desk">
                      <h5 className="gallery__title">{album.title}</h5>
                      <p className="gallery__quantity">
                        <span className="quantity__value">{album.count_photo} </span>
                        {t("PhotosPage.photos")}
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </Layout>
)


Photo.getInitialProps = async ({ req, res }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const response = await callApi('/gallery', language);
  return { gallery: response.results }
}

export default withI18next(['common'])(Photo);
