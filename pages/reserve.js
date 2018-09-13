import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';

Modal.setAppElement('#__next');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',
    borderRadius: '12px',
    border: "2px solid #ebe2cc",
    width: '65%'
  }
}
class Reserve extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const language = req || res ? req.language || res.locals.language : null;
    const response = await callApi('/reserve-members', language)
    return { members: response.results, language }
  }

  state = {
    currentMember: {},
    modalIsOpen: false,
    isLaureate: false
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
    const { isLaureate } = this.state;

    const filteredMembers = members.filter(member =>
      isLaureate
        ? member.group === group && member.laureate == true
        : member.group === group);

    return (
      <div className="reserve-composition" style={{ marginBottom: filteredMembers.length > 0 ? '60px' : '0' }}>
        {filteredMembers.map(member => (
          <figure className="reserve__participant" key={member.id} onClick={() => this.openModal(member.id)}>
            <a href="#modal">
              <div className="dots_wr">
                <img src={member.image} alt="Участник резерва" />
                <span className="img-dots"></span>
              </div>
            </a>
            <figcaption className="participant__description">
              <p className="participant__name">
                <span className="participant__first-name">{member.first_name}</span>
                <span className="participant__family-name">{member.last_name}</span>
              </p>
              <p className="participant__progress">{member.status} </p>
            </figcaption>
          </figure>
        ))}
      </div>
    )
  }



  render() {
    const { t, members } = this.props;
    const { currentMember, isLaureate } = this.state;
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
                      <button className={!isLaureate ? 'filter__btn filter active' : 'filter__btn filter'}
                        onClick={() => this.setState({ isLaureate: false })}>
                        {t("ReservePage.allList")}
                      </button>
                      <button className={isLaureate ? 'filter__btn filter active' : 'filter__btn filter'}
                        onClick={() => this.setState({ isLaureate: true })}>
                        {t("ReservePage.laureates")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
              <div className="modal-name__wrapper">
                <div className="modal__left">
                  <img src={currentMember.image} className="modal__photo" alt="Состав оркестра" />
                  <div className="modal-name__wrapper">
                    <p className="modal__name">
                      <span className="modal__first-name">{currentMember.first_name}</span>
                      <span className="modal__family-name">{currentMember.last_name}</span>
                    </p>
                  </div>
                </div>
                <div className="modal__right" dangerouslySetInnerHTML={{ __html: currentMember.biography }}></div>
              </div>
            </Modal>

            <section className="reserve__instrument">
              <div className="container">
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.violins")}
                  </h2>
                  {/* <div className="reserve-composition"> */}
                  {this.renderMember(17)}
                  {/* </div> */}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.alti")}
                  </h2>

                  {this.renderMember(5)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.cello")}
                  </h2>

                  {this.renderMember(6)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.contrabasses")}
                  </h2>

                  {this.renderMember(7)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.flutes")}
                  </h2>

                  {this.renderMember(8)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.oboes")}
                  </h2>
                </div>
                {this.renderMember(18)}
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.clarinets")}
                  </h2>

                  {this.renderMember(9)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.bassoons")}
                  </h2>
                </div>
                {this.renderMember(10)}
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.horn")}
                  </h2>

                  {this.renderMember(16)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.pipes")}
                  </h2>

                  {this.renderMember(15)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.trombones")}
                  </h2>

                  {this.renderMember(14)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.tuba")}
                  </h2>

                  {this.renderMember(13)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.harps")}
                  </h2>

                  {this.renderMember(12)}
                </div>
                <div className="instrument__block">
                  <h2 className="reserve__section-title">
                    {t("OrchestraMembers.drums")}
                  </h2>

                  {this.renderMember(11)}
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