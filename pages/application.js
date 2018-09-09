import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';

class Application extends React.Component {
  state = {

  }

  render() {
    const { t } = this.props;
    const { concerts } = this.state;
    return (
      <Layout title="Заявка на участие в отборе">
        <main className="m-before ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page__title-line page__title-line--orchestra">
                  <div className="page__flex-wrap">
                    <h1 className="page__title page__title--long">
                      {t("ApplicationPage.application")}
                    </h1>
                  </div>
                  <div className="page__flex-wrap">
                    <Submenu menu="OrchestraMenu" activePage="application" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="s-application">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="application__title">
                    Правила отбора
						</h2>
                </div>
              </div>
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
                <div className="col-lg-6 offset-lg-3 col-sm-10 offset-sm-0">
                  <div className="form__block">
                    <h2 className="application__title waves__title">
                      Форма подачи заявки
							</h2>
                    <form className="application__form">
                      <label>
                        <span>Фамилия, имя, отчество</span>
                        <input type="text" className="form__input" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>Дата рождения</span>
                        <input type="text" id="date" placeholder="ДД.ММ.ГГГГ" className="form__input error" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>Место рождения</span>
                        <input type="text" className="form__input" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>Гражданство</span>
                        <input type="text" className="form__input" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>Образование</span>
                        <input type="text" className="form__input" required />
                        <b className="danger">* Это поле обязательно</b>
                        <span className="additional-description">
                          название учебного заведения / факультет или отделение / инструмент / педагог / год поступления / год окончания / специальность
                          / № диплома
									</span>
                      </label>
                      <label>
                        <span>Награды, победы в конкурсах</span>
                        <textarea className="form__input" rows="4" required></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>Паспорт</span>
                        <input type="text" className="form__input" required />
                        <span className="additional-description">серия, номер, кем, когда выдан </span>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>Домашний адрес (прописка)</span>
                        <textarea className="form__input" rows="4" required></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>Фактический адрес</span>
                        <textarea className="form__input" rows="4" required></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>Телефон для связи (домашний, мобильный)</span>
                        <input type="tel" className="form__input" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <div className="radio__button">
                        <p> Нужен ли концертмейстер для прослушиваний? </p>
                        <label>
                          <input className="radio" type="radio" name="concertmaster" value="Yes" />
                          <span className="radio-custom"></span>
                          <span className="label">Да</span>
                        </label>
                        <label>
                          <input className="radio" type="radio" name="concertmaster" value="No" checked />
                          <span className="radio-custom"></span>
                          <span className="label">Нет</span>
                        </label>
                      </div>
                      <div className="radio__button">
                        <p> Есть ли необходимость в жилье?</p>
                        <label>
                          <input className="radio" type="radio" name="houm" value="Yes" />
                          <span className="radio-custom"></span>
                          <span className="label">Да</span>
                        </label>
                        <label>
                          <input className="radio" type="radio" name="houm" value="No" checked />
                          <span className="radio-custom"></span>
                          <span className="label">Нет</span>
                        </label>
                      </div>
                      <div className="radio__button">
                        <label className="checkbox__label">
                          <input className="checkbox" type="checkbox" name="checkbox-test" checked />
                          <span className="checkbox-custom"></span>
                          <span className="label">Я даю согласие на обработку моих персональных данных в соответствии с ФЗ-152</span>
                        </label>
                      </div>
                      <button className="act__btn application-form__btn" type="submit"> Отправить заявку</button>
                    </form>
                  </div>
                </div>
              </div>


            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

export default withI18next(['common'])(Application);