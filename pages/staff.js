import React from 'react';
import Layout from '../layouts/Main';

const Home = () => (
  <Layout>
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap">
                <h1 className="page__title page__title--long">
                  Состав оркестра
							</h1>
              </div>
              <div className="page__flex-wrap">
                <ul className="page__list">
                  <li>
                    <a href="staf.html" className="active">Состав Оркестра</a>
                  </li>
                  <li>
                    <a href="team.html">Команда</a>
                  </li>
                  <li>
                    <a href="academy.html">Симфоническая академия</a>
                  </li>
                  <li>
                    <a href="academy-masters.html">Педагоги академии</a>
                  </li>
                  <li>
                    <a href="conductors.html">Дирижёры сезона 2018-2019</a>
                  </li>
                  <li>
                    <a href="soloists.html">Солисты сезона 2018-2019</a>
                  </li>
                  <li>
                    <a href="application.html">Подать заявку</a>
                  </li>
                  <li>
                    <a href="contacts.html">Контакты</a>
                  </li>
                </ul>
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

export default Home