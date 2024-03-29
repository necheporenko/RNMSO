import React from 'react';
import Layout from '../layouts/Main';

const AcademyMasters = () => (
  <Layout>
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap">
                <h1 className="page__title page__title--long">
                  Преподаватели симфонической академии
							</h1>
              </div>
              <div className="page__flex-wrap">
                <ul className="page__list">
                  <li>
                    <a href="staf.html">Состав Оркестра</a>
                  </li>
                  <li>
                    <a href="team.html">Команда</a>
                  </li>
                  <li>
                    <a href="academy.html">Симфоническая академия</a>
                  </li>
                  <li>
                    <a href="academy-masters.html" className="active">Педагоги академии</a>
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
      <section className="team-academy">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="pedagog__cart">
                <div className="pedagog__photo">
                  <img src="../static/img/master/master1.jpg" alt="Педагог академии" />
                </div>
                <div className="pedagog-cart__description">
                  <a href="#">Кристиан Ярви</a>
                  <p>
                    Дирижёр, музыкальный руководитель Филармонического оркестра Балтийского моря
								</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pedagog__cart">
                <div className="pedagog__photo">
                  <img src="../static/img/master/master2.jpg" alt="Педагог академии" />
                </div>
                <div className="pedagog-cart__description">
                  <a href="persona.html">Жан Кристоф Спинози </a>
                  <p>
                    Скрипач, дирижёр, художественный руководитель Ensemble Matheus
								</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default AcademyMasters;