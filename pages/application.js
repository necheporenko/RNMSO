import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';
import { Form, Text, TextArea, RadioGroup, Radio } from 'informed';

class Application extends React.Component {
  state = {}

  render() {
    const { t } = this.props;
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
                  <h2 className="application__title">{t("ApplicationPage.rules")}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>{t("ApplicationPage.rulesText")}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-lg-3 col-sm-10 offset-sm-0">
                  <div className="form__block">
                    <h2 className="application__title waves__title">{t("ApplicationPage.applicationForm")}</h2>

                    {/* <Form id="application-form" className="application__form">
                      <label htmlFor="complex-name"><span>Фамилия, имя, отчество</span>
                        <Text field="name" id="complex-name" className="form__input" />
                      </label>
                      <RadioGroup field="gender" className="radio__button">
                        <p>Есть ли необходимость в жилье?</p>
                        <label htmlFor="radio-male">
                          <Radio value="yes" id="radio-male" className="radio" />
                          <span className="radio-custom"></span>
                          <span className="label">Да</span>
                        </label>
                        <label htmlFor="radio-female">
                          <Radio value="no" id="radio-female" className="radio" />
                          <span className="radio-custom"></span>
                          <span className="label">No</span>
                        </label>
                      </RadioGroup>

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
                      <button type="submit">Submit</button>
                    </Form> */}

                    <form className="application__form" method="post" action="http://31.192.109.44/api/request/">
                      <label>
                        <span>{t("ApplicationPage.form.name")}</span>
                        <input type="text" className="form__input" name="name" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.bDay")}</span>
                        <input type="text" id="date" placeholder={t("ApplicationPage.form.dayFormat")} name="birth" className="form__input" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.placeOfBirth")}</span>
                        <input type="text" className="form__input" name="birth_place" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.citizenship")}</span>
                        <input type="text" className="form__input" name="citizenship" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.education")}</span>
                        <input type="text" className="form__input" name="education" required />
                        <b className="danger">* Это поле обязательно</b>
                        <span className="additional-description">{t("ApplicationPage.form.educationInfo")}	</span>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.awards")}</span>
                        <textarea className="form__input" rows="4" name="rewards" required></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.passport")}</span>
                        <input type="text" className="form__input" name="passport" required />
                        <span className="additional-description">{t("ApplicationPage.form.passportInfo")}</span>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.homeAddress")}</span>
                        <textarea className="form__input" rows="4" name="propiska" required></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.actualAddress")}с</span>
                        <textarea className="form__input" rows="4" name="address" required></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.phone")}</span>
                        <input type="tel" className="form__input" name="phone" required />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <div className="radio__button">
                        <p> {t("ApplicationPage.form.accompanist")} </p>
                        <label>
                          <input className="radio" type="radio" name="is_need_endmaster" value="Yes" />
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.yes")} </span>
                        </label>
                        <label>
                          <input className="radio" type="radio" name="is_need_endmaster" value="No" checked />
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.no")}</span>
                        </label>
                      </div>
                      <div className="radio__button">
                        <p> {t("ApplicationPage.form.needHouse")}</p>
                        <label>
                          <input className="radio" type="radio" name="is_need_housing" value="Yes"/>
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.yes")} </span>
                        </label>
                        <label>
                          <input className="radio" type="radio" name="is_need_housing" value="No"  checked/>
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.no")} </span>
                        </label>
                      </div>
                      <div className="radio__button">
                        <label className="checkbox__label">
                          <input className="checkbox" type="checkbox" required />
                          <span className="checkbox-custom"></span>
                          <span className="label">{t("ApplicationPage.form.agree")}</span>
                        </label>
                      </div>
                      <button className="act__btn application-form__btn" type="submit">{t("ApplicationPage.form.sendApplication")}</button>
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
