import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';


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


class Staff extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const language = req || res ? req.language || res.locals.language : null;
    const response = await callApi('/orchestra-members', language)
    return { members: response.results, language }
  }

  state = {
    currentMember: {},
    modalIsOpen: false
  };

  openModal = async (memberId) => {
    const { language } = this.props;
    const currentMember = await callApi(`/orchestra-members/${memberId}`, language)

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
      <Layout >
        <main className="m-before m-video">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page__title-line page__title-line--orchestra">
                  <div className="page__flex-wrap">
                    <h1 className="page__title page__title--long">
                      {t("OrchestraMenu.staff")}
                    </h1>
                  </div>
                  <div className="page__flex-wrap">
                    <Submenu menu="OrchestraMenu" activePage="staff" />
                  </div>
                </div>
              </div>
            </div>
          </div>


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
                  {t("OrchestraMembers.firstViolins")}
                </h2>
                {this.renderMember(3)}
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  {t("OrchestraMembers.secondViolins")}
                </h2>
                {this.renderMember(4)}
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
                {this.renderMember(18)}
              </div>
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
                {this.renderMember(10)}
              </div>
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
      </Layout>
    )
  }
}

export default withI18next(['common'])(Staff);