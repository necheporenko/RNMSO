import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';
import Modal from 'react-modal';

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
    // videos: this.props.videos,
    currentMember: {},
    modalIsOpen: false
  };

  openModal = async () => {
    const { language } = this.props;
    const currentMember = await callApi('/orchestra-members/2', language)

    this.setState({ modalIsOpen: true, currentMember });
    console.log(currentMember)
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
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
                  Первые скрипки
                </h2>
                {members.filter(member => member.group === 3).map(member => (
                  <div className="reserve-composition" onClick={this.openModal} key={member.id}>
                    <figure className=" mix reserve__participant laureate">
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
                ))}

              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Вторые скрипки
                </h2>
                <div className="reserve-composition">
                  <figure className=" mix reserve__participant ">
                    <a href="#modal">
                      <div className="dots_wr">
                        <img src="../static/img/staff/staff1.jpg" alt="Состав оркестра" />
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
                </div>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Альты
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Виолончели
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Контрабасы
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Флейты
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Гобои
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Кларнеты
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Фаготы
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Валторны
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Трубы
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Тромбоны
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Туба
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Арфы
            </h2>
              </div>
              <div className="instrument__block">
                <h2 className="reserve__section-title">
                  Ударные
            </h2>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

export default withI18next(['common'])(Staff);