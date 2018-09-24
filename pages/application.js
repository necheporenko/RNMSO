import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';
import { Form, Text, TextArea, RadioGroup, Radio } from 'informed';
import { apiUrl } from '../constants/settings';
import { toast, ToastContainer } from 'react-toastify';
import '../static/sass/toast.sass';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.doForm = this.doForm.bind(this);
    this.state = {
      dataObj: {}
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleBirthday = (e) => {
    this.setState({
      birthday: e.target.value
    })
  }

  handleBirthPlace = (e) => {
    this.setState({
      birthPlace: e.target.value,
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
    // e.preventDefault();
    const dataObj = {
      name: this.state.name,
      birth: this.state.birthday,
      birth_place: this.state.birthPlace,
      citizenship: this.state.citizenship,
      education: this.state.education,
      rewards: this.state.awards,
      propiska: this.state.address,
      address: this.state.address,
      phone: this.state.phone,
      passport: this.state.passport,
      is_need_endmaster: this.state.radioFirstLineTrue ? this.state.radioFirstLineTrue : false,
      // radioFirstLineFalse: this.state.radioFirstLineFalse,
      is_need_housing: this.state.radioSecondLineTrue ? this.state.radioSecondLineTrue : false,
      // radioSecondLineFalse: this.state.radioFirstLineFalse
    }

    this.setState({
      newObj: dataObj
    })
    console.log(dataObj)

    //console.log(JSON.stringify(dataObj))
    // console.log(dataObj)
    this.submitForm(dataObj);


  }
  // submitForm = async (data) => {
  //   await console.log(data)
  //   await callApi('/request', "ru")
  //   console.log(2)
  // };

  submitForm = (dataObj) => {
    const { t } = this.props;
    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    // console.log(myHeaders, dataObj)
    fetch(`${apiUrl}/request/`, {
      method: "POST",
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Origin': 'http://localhost:3002',
        // 'Access-Control-Allow-Credentials': true,

        'Accept': '*/*',
        'Content-Type': 'application/json',

        // 'Host': '31.192.109.44'
        // 'Cookie': 'csrftoken=ydCDOcCJgMYC0lzN2zrBxbbAdMXjpu68py6alSBl6wYwJShR9vN3DseahCqT5Gtu; sessionid=4ytzi3yt4n2a5xa84d5902eiijhovvq1',
        // 'X-CSRFToken': 'XbzEVU56DDdgWBUvfhf13QJb068ZMWmmOw3bsA4ItndaF8CzmdBt97ML4WBzs8JI'
      },
      method: 'no-cors',
      body: JSON.stringify(dataObj)
    })
      .then((function (response) {
        if (response.ok) {
          toast.success(t("ApplicationPage.form.succes"), {
            position: toast.POSITION.TOP_CENTER
          })
        }
      }))
      .catch(toast.error(t("ApplicationPage.form.error"), {
        position: toast.POSITION.TOP_CENTER
      }))
  }


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


                    <form className="application__form" /*onSubmit={() => this.doForm()}*/>
                      <label>
                        <span>{t("ApplicationPage.form.name")}</span>
                        <input type="text" className="form__input" name="name" required value={this.state.name} onChange={this.handleName} />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.bDay")}</span>
                        <input type="text" placeholder={t("ApplicationPage.form.dayFormat")} name="birth" className="form__input" required value={this.state.birthday} onChange={this.handleBirthday} />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.placeOfBirth")}</span>
                        <input type="text" className="form__input" name="birth_place" required value={this.state.birthPlace} onChange={this.handleBirthPlace} />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.citizenship")}</span>
                        <input type="text" className="form__input" name="citizenship" required value={this.state.citizenship} onChange={this.handleCitizenship} />
                        <b className="danger">* Это поле обязательно</b>
                      </label>
                      <label>
                        <span>{t("ApplicationPage.form.education")}</span>
                        <input type="text" className="form__input" name="education" required value={this.state.education} onChange={this.handleEducation} />
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
                        <input type="text" className="form__input" name="passport" required value={this.state.passport} onChange={this.handlePassport} />
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
                          <input className="radio" type="radio" name="is_need_endmaster" required value={this.state.radioFirstLineTrue} onChange={this.handleRadioFirstLineTrue} />
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.yes")} </span>
                        </label>
                        <label>
                          <input className="radio" type="radio" name="is_need_endmaster" value={this.state.radioFirstLineFalse} onChange={this.handleRadioFirstLineFalse} />
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.no")}</span>
                        </label>
                      </div>
                      <div className="radio__button">
                        <p> {t("ApplicationPage.form.needHouse")}</p>
                        <label>
                          <input className="radio" type="radio" name="is_need_housing" required value={this.state.radioSecondLineTrue} onChange={this.handleRadioSecondLineTrue} />
                          <span className="radio-custom"></span>
                          <span className="label">{t("ApplicationPage.form.yes")} </span>
                        </label>
                        <label>
                          <input className="radio" type="radio" name="is_need_housing" value={this.state.radioSecondLineFalse} onChange={this.handleRadioSecondLineFalse} />
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

        <ToastContainer />
      </Layout>
    )
  }
}

export default withI18next(['common'])(Application);
