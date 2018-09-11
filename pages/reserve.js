import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';


class Reserve extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const language = req || res ? req.language || res.locals.language : null;
    const response = await callApi('/oreserve-members', language)
    return { members: response.results, language }
  }

  state = {
    currentMember: {},
    modalIsOpen: false
  };

  openModal = async (memberId) => {
    const { language } = this.props;
    const currentMember = await callApi(`/reserve-members/${memberId}`, language)

    this.setState({ modalIsOpen: true, currentMember });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  renderMember = (group) => {
    const { members } = this.props;
    return members.filter(member => member.group === group).map(member => (
      <div className="reserve-composition" key={member.id}>
        <figure className="reserve__participant laureate" onClick={() => this.openModal(member.id)}>
          <a href="#modal">
            <div className="dots_wr">
              <img src={member.image} alt="Состав оркестра" />
              <span className="img-dots"></span>
            </div>
          </a>
          <figcaption className="participant__description ">
            <p className="participant__name">
              <span className="participant__first-name">{member.first_name}</span>
              <span className="participant__family-name">{member.last_name}</span>
            </p>
            <p className="participant__progress">{member.status} </p>
          </figcaption>
        </figure>
      </div>
    ))
  }

  render() {
    const { t, members } = this.props;
    const { currentMember } = this.state;
    return (
      <Layout title="Резерв">
        <div className="remodal-bg">
          <main>
            <section className="reserve__top-line">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="page__title page__title--reserve">
                      {t("MainMenu.reserve")}
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="reserve__title-text">
                      Эти слова совершенно справедливы, однако рондо вызывает миксолидийский канал. Микрохроматический интервал, по определению,
                      сложен. Фьюжн образует форшлаг. Громкостнoй прогрессийный период многопланово вызывает деструктивный звукоряд.
							      </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="controls controls--reserve">
                      <button className="filter__btn filter reset active" data-filter="all">{t("ReservePage.allList")}</button>
                      <button className="filter__btn filter" data-filter="laureate">{t("ReservePage.laureates")}</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="reserve__instrument">
              <div className="container">
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.violins")}
                  </h2>
                  <div className="reserve-composition">
                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
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

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />
                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">
                          Лауреат I Всероссийского конкурса артистов сифмонического оркестра, II премия
									</p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description ">
                        <p className="participant__name">
                          <span className="participant__first-name">Анна</span>
                          <span className="participant__family-name">Апетьян</span>
                        </p>
                        <p className="participant__progress">
                          Лауреат I Всероссийского конкурса артистов сифмонического оркестра, II премия
									</p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />

                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">
                          Лауреат I Всероссийского конкурса артистов сифмонического оркестра, III премия
									</p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description ">
                        <p className="participant__name">
                          <span className="participant__first-name">Анна</span>
                          <span className="participant__family-name">Апетьян</span>
                        </p>
                        <p className="participant__progress">
                          Лауреат I Всероссийского конкурса артистов сифмонического оркестра, III премия
									</p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />
                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">
                          Лауреат I Всероссийского конкурса артистов сифмонического оркестра, III премия
									</p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
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

                    <figure className=" mix reserve__participant ">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />

                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">

                        </p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
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

                    <figure className=" mix reserve__participant ">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static//img/reserve/reserve2.jpg" alt="Участник резерва" />
                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">
                        </p>
                      </figcaption>
                    </figure>

                  </div>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.alti")}
                  </h2>
                  <div className="reserve-composition">
                    <figure className=" mix reserve__participant ">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
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

                    <figure className=" mix reserve__participant ">

                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />

                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">
                        </p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description ">
                        <p className="participant__name">
                          <span className="participant__first-name">Анна</span>
                          <span className="participant__family-name">Апетьян</span>
                        </p>
                        <p className="participant__progress">
                          Лауреат I Всероссийского конкурса артистов сифмонического оркестра, II премия
									</p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant ">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />

                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">
                        </p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description ">
                        <p className="participant__name">
                          <span className="participant__first-name">Анна</span>
                          <span className="participant__family-name">Апетьян</span>
                        </p>
                        <p className="participant__progress">
                          Лауреат I Всероссийского конкурса артистов сифмонического оркестра, III премия
									</p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant ">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />
                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">
                        </p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant laureate">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
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

                    <figure className=" mix reserve__participant ">

                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />

                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">

                        </p>
                      </figcaption>
                    </figure>

                    <figure className=" mix reserve__participant ">
                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve1.jpg" alt="Участник резерва" />
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

                    <figure className=" mix reserve__participant ">

                      <a href="#modal">
                        <div className="dots_wr">
                          <img src="../static/img/reserve/reserve2.jpg" alt="Участник резерва" />

                          <span className="img-dots"></span>
                        </div>
                      </a>
                      <figcaption className="participant__description">
                        <p className="participant__name">
                          <span className="participant__first-name">Александра</span>
                          <span className="participant__family-name">Афанасьева</span>
                        </p>
                        <p className="participant__progress">
                        </p>
                      </figcaption>
                    </figure>

                  </div>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.cello")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.contrabasses")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.flutes")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.oboes")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.clarinets")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.bassoons")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.horn")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.pipes")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.trombones")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.tuba")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.harps")}
                  </h2>
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.drums")}
                  </h2>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    )
  }
}


export default withI18next(['common'])(Reserve);