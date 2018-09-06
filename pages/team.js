import React from 'react';
import Layout from '../layouts/Main';

const Team = () => (
  <Layout>
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap ">
                <h1 className="page__title ">
                  Команда
							</h1>
              </div>
              <div className="page__flex-wrap ">
                <ul className="page__list">
                  <li>
                    <a href="staf.html">Состав Оркестра</a>
                  </li>
                  <li>
                    <a href="team.html" className="active">Команда</a>
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
      <section className="team-academy">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="pedagog__cart">
                <div className="pedagog__photo">
                  <img src="../static/img/team/team1.jpg" alt="Педагог академии" />
                </div>
                <div className="pedagog-cart__description pedagog-cart__description--team">
                  <a href="persona.html">Илья Репенак</a>
                  <p>
                    <strong>артистический директор</strong>
                    Заместитель директора Государственного академического симфонического оркестра России имени Е. Ф. Светланова, директор Фонда
                    поддержки ГАСО им. Е. Ф. Светланова
								</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pedagog__cart">
                <div className="pedagog__photo">
                  <img src="../static/img/team/team2.jpg" alt="Педагог академии" />
                </div>
                <div className="pedagog-cart__description pedagog-cart__description--team">
                  <a href="persona.html">Ярослав Тимофеев</a>
                  <p>
                    <strong>шеф-редактор</strong>
                    Лауреат международных конкурсов по фортепиано, музыкальной композиции и искусству колокольного звона. Музыкальный критик,
                    автор более 750 публикаций в крупнейших российских СМИ. Регулярно выступает в качестве лектора перед концертами
                    Московской филармонии.
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

export default Team;