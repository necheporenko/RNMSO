import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';
import { Form, Text, TextArea, RadioGroup, Radio } from 'informed';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.doForm = this.doForm.bind(this);
    this.state = {
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handlebDate = (e) => {
    this.setState({
      bDate: e.target.value.reverse().replace('.' , '-')
    })
  }


  handleCitizenship = (e) => {
    this.setState({
      citizenship: e.target.value
    })
  }

  handleEducation = (e) => {
    this.setState({
      education: e.target.value
    })
  }

  handleAwards = (e) => {
    this.setState({
      awards: e.target.value
    })
  }

  handleAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  handlePassport = (e) => {
    this.setState({
      passport: e.target.value
    })
  }

  handleActualAddress = (e) => {
    this.setState({
      actualAddress: e.target.value
    })
  }

  handlePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  handleRadioFirstLineTrue = (e) => {
    this.setState({
      radioFirstLineTrue: e.target.checked
    })
  }

  handleRadioFirstLineFalse = (e) => {
    this.setState({
      radioFirstLineFalse: e.target.checked
    })
  }

  handleRadioSecondLineTrue = (e) => {
    this.setState({
      radioSecondLineTrue: e.target.checked
    })
  }

  handleRadioSecondLineFalse = (e) => {
    this.setState({
      radioSecondLineFalse: e.target.checked
    })
  }


  doForm = (e) => {
    const dataObj = {
      name: this.state.name,
      birthdayDate: this.state.bDay,
      citizenship: this.state.citizenship,
      education: this.state.education,
      awards: this.state.awards,
      address: this.state.address,
      actualAdress: this.state.address,
      phone: this.state.phone,
      passport: this.state.passport,
      radioFirstLineTrue: this.state.radioFirstLineTrue,
      radioFirstLineFalse: this.state.radioFirstLineFalse,
      radioSecondLineTrue: this.state.radioFirstLineTrue,
      radioSecondLineFalse: this.state.radioFirstLineFalse

    }

    this.setState({
      newObj: this.dataObj
    })

    submitForm(JSON.stringify(this.state.dataObj))

  }



  submitForm = async (data) => {
    await callApi('/request', "ru", {
      method: 'POST',
      body: {data}
    })
  };



  // submitForm = async () => {
  //   await callApi('/request', "ru", {
  //     method: 'POST', body: {
  //       address
  //         :
  //         "string",
  //       birth
  //         :
  //         "2000-08-08",
  //       birth_place
  //         :
  //         "22",
  //       citizenship
  //         :
  //         "string",
  //       created
  //         :
  //         "2018-09-13T11:04:17.211871Z",
  //       education
  //         :
  //         "string",
  //       id
  //         :
  //         1,
  //       is_need_endmaster
  //         :
  //         true,
  //       is_need_housing
  //         :
  //         true,
  //       name
  //         :
  //         "string",
  //       passport
  //         :
  //         "string",
  //       phone
  //         :
  //         "string",
  //       propiska
  //         :
  //         "string",
  //       rewards
  //         :
  //         "string"
  //     }
  //   });
  // }

  render() {
    const { t } = this.props;
    return (
      <Layout title={t("ApplicationPage.application")}>
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
                        <input type="text" className="form__input" name="name" required value={this.state.name} onChange={this.handleName} />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.bDay")}</span>
                        <input type="text" id="date" placeholder={t("ApplicationPage.form.dayFormat")} name="birth" className="form__input" required value={this.state.bDate} onChange={this.handlebDate} />
                        <b className="danger">* Это поле обязательно</b>
                      </label>

                      <label>
                        <span>{t("ApplicationPage.form.citizenship")}</span>
                        <input type="text" className="form__input" name="citizenship" required value={this.state.citizenship} onChange={this.handleCitizenship} />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.education")}</span>
                        <input type="text" className="form__input" name="education" required value={this.state.education} onChange={this.handleEducation}/>
                        <b className="danger">* Это поле обязательно</b>
                        <span className="additional-description">{t("ApplicationPage.form.educationInfo")}	</span>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.awards")}</span>
                        <textarea className="form__input" rows="4" name="rewards" required value={this.state.awards} onChange={this.handleAwards}></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.passport")}</span>
                        <input type="text" className="form__input" name="passport" required value={this.state.passport} onChange={this.handlePassport}/>
                        <span className="additional-description">{t("ApplicationPage.form.passportInfo")}</span>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.homeAddress")}</span>
                        <textarea className="form__input" rows="4" name="propiska" required value={this.state.address} onChange={this.handleAddress}></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.actualAddress")}с</span>
                        <textarea className="form__input" rows="4" name="address" required value={this.state.actualAdress} onChange={this.handleActualAdress}></textarea>
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.phone")}</span>
                        <input type="tel" className="form__input" name="phone" required value={this.state.phone} onChange={this.handlePhone} />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <div className="radio__button">
                        <p> {t("ApplicationPage.form.accompanist")} </p>
                        <label>
                          <input className="radio" type="radio" name="is_need_endmaster" value="true" value={this.state.radioFirstLineTrue} onChange={this.handleRadioFirstLineTrue}/>
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.yes")} </span>
                        </label>
                        <label>
                          <input className="radio" type="radio" name="is_need_endmaster" value="false" defaultChecked value={this.state.radioFirstLineFalse} onChange={this.handleRadioFirstLineFalse} />
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.no")}</span>
                        </label>
                      </div>
                      <div className="radio__button">
                        <p> {t("ApplicationPage.form.needHouse")}</p>
                        <label>
                          <input className="radio" type="radio" name="is_need_housing" value="true" value={this.state.radioSecondLineTrue} onChange={this.handleRadioSecondLineTrue}/>
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.yes")} </span>
                        </label>
                        <label>
                          <input className="radio" type="radio" name="is_need_housing" value="false" defaultChecked value={this.state.radioSecondLineFalse} onChange={this.handleRadioSecondLineFalse}/>
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.no")} </span>
                        </label>
                      </div>
                      <div className="radio__button">
                        <label className="checkbox__label">
                          <input className="checkbox" type="checkbox" name="isAgree" defaultChecked required style={{ display: 'block', opacity: 0 }} />
                          <span className="checkbox-custom"></span>
                          <span className="label">{t("ApplicationPage.form.agree")}</span>
                        </label>
                      </div>
                      <button
                        className="act__btn application-form__btn"
                        // onClick={() => this.submitForm()}
                         onClick={() => this.doForm()}
                      >
                        {t("ApplicationPage.form.sendApplication")}
                      </button>
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
