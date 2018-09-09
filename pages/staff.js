import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';

const Staff = ({ t, members }) => (
  <Layout>
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap">
                <h1 className="page__title page__title--long">
                  {t("OrchestraMenu.staff")}
                </h1>
              </div>
              <div className="page__flex-wrap">
                <Submenu menu="OrchestraMenu" activePage="staff" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reserve__instrument">
        <div className="container">
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Первые скрипки
					</h2>
            <div className="reserve-composition">
              <figure className=" mix reserve__participant laureate">
                <a href="#modal">
                  <div className="dots_wr">
                    <img src="../static/img/staff/staff1.jpg" alt="Состав оркестра" />
                    <span className="img-dots"></span>
                  </div>
                </a>
                <figcaption className="participant__description ">
                  <p className="participant__name">
                    <span className="participant__first-name">Анна</span>
                    <span className="participant__family-name">Апетьян</span>
                  </p>
                  <p className="participant__progress">
                    Лауреат I Всероссийского конкурса артистов сифмонического оркестра, I премия
								</p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Вторые скрипки
					</h2>
            <div className="reserve-composition">
              <figure className=" mix reserve__participant ">
                <a href="#modal">
                  <div className="dots_wr">
                    <img src="../static/img/staff/staff1.jpg" alt="Состав оркестра" />
                    <span className="img-dots"></span>
                  </div>
                </a>
                <figcaption className="participant__description ">
                  <p className="participant__name">
                    <span className="participant__first-name">Анна</span>
                    <span className="participant__family-name">Апетьян</span>
                  </p>
                  <p className="participant__progress">
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Альты
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Виолончели
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Контрабасы
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Флейты
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Гобои
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Кларнеты
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Фаготы
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Валторны
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Трубы
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Тромбоны
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Туба
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Арфы
					</h2>
          </div>
          <div className="instrument__block">
            <h2 className="reserve__section-title">
              Ударные
					</h2>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

Staff.getInitialProps = async ({ req, res }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const response = await callApi('/orchestra-members', language)
  return { members: response.results }
}

export default withI18next(['common'])(Staff);