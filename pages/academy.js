import React from 'react';
import Layout from '../layouts/Main';

const Academy = () => (
  <Layout>
    <main className="m-before">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap">
                <h1 className="page__title page__title--long">
                  Симфоническая академия
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
                    <a href="academy.html " className="active">Симфоническая академия</a>
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
      <section className="symphonic-academy">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                Разносторонняя пятиступенчатая громкостная пирамида диссонирует изоритмический фузз. Еще Аристотель в своей «Политике» говорил,
                что музыка, воздействуя на человека, доставляет «своего рода очищение, то есть облегчение, связанное с наслаждением»,
                однако рондо полифигурно вызывает райдер. Показательный пример – райдер регрессийно просветляет автономный полиряд.
						</p>
              <p>
                Легато дает целотоновый райдер. Фаза, согласно традиционным представлениям, начинает гипнотический рифф. Флажолет неизменяем.
						</p>
              <p>
                Действительно, фишка имеет глубокий рефрен. Струна монотонно использует паузный рефрен. Midi-контроллер регрессийно использует
                мономерный рок-н-ролл 50-х. Форма, в том числе, имеет тон-полутоновый лайн-ап.
						</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="symphonic-academy__title">
                Расписание занятия
						</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mycol">
              <div className="symphonic-academy__cart">
                <h3 className="symphonic-cart__title">
                  Мастер-класс Кристиана Ярви
							</h3>
                <div className="symphonic-cart__participants">
                  <span>Участники:</span>
                  Первые скрипки, вторые скрипки
							</div>
                <ul className="events__date">
                  <li>
                    <a href="#" className="no-link">1 сентября 12:00</a>
                  </li>
                  <li>
                    <a href="#" className="no-link">2 сентября 14:00</a>
                  </li>
                  <li>
                    <a href="#" className="no-link">3 сентября 12:00</a>
                  </li>
                  <li>
                    <a href="#" className="no-link">4 сентября 15:00</a>
                  </li>
                </ul>
                <div className="pedagog__cart">
                  <div className="pedagog__photo">
                    <img src="../static/img/academy/master1.jpg" alt="Педагог академии" />
                  </div>
                  <div className="pedagog-cart__description">
                    <a href="persona.html">Кристиан Ярви</a>
                    <p>
                      Дирижёр, музыкальный руководитель Филармонического оркестра Балтийского моря
									</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mycol">
              <div className="symphonic-academy__cart">
                <h3 className="symphonic-cart__title">
                  Мастер-класс Жана Кристофа Спинози
							</h3>
                <div className="symphonic-cart__participants">
                  <span>Участники:</span>
                  Первые скрипки, вторые скрипки
							</div>
                <ul className="events__date">
                  <li>
                    <a href="#" className="no-link">15 сентября 12:00</a>
                  </li>
                  <li>
                    <a href="#" className="no-link">20 сентября 14:00</a>
                  </li>
                  <li>
                    <a href="#" className="no-link">22 сентября 12:00</a>
                  </li>
                  <li>
                    <a href="#" className="no-link">26 сентября 15:00</a>
                  </li>
                </ul>
                <div className="pedagog__cart">
                  <div className="pedagog__photo">
                    <img src="../static/img/academy/master2.jpg" alt="Педагог академии" />
                  </div>
                  <div className="pedagog-cart__description">
                    <a href="persona.html">Жана Кристофа Спинози</a>
                    <p>
                      Дирижёр, музыкальный руководитель Филармонического оркестра Балтийского моря
									</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout >
)

export default Academy;