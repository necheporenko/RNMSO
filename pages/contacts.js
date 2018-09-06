import React from 'react';
import Layout from '../layouts/Main';

const Contacts = () => (
  <Layout title="Контакты">
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap ">
                <h1 className="page__title ">
                  Контакты
							</h1>
              </div>
              <div className="page__flex-wrap ">
                <ul className="page__list">
                  <li>
                    <a href="staf.html">Состав Оркестра</a>
                  </li>
                  <li>
                    <a href="team.html">Команда</a>
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
                    <a href="contacts.html" className="active">Контакты</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
      <section className="contacts">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="contacts__title">
                Концертный комплекс «Филармония-2» Мичуринский проспект, Олимпийская деревня, дом 1
						</h3>
            </div>
            <div className="col-lg-2 offset-lg-1 col-sm-6 offset-sm-0">
              <div className="question__mail">
                <span>Общие вопросы </span>
                <a href="#">info@site.ru</a>
              </div>

            </div>
            <div className="col-lg-2 offset-lg-1 col-sm-6 offset-sm-0">
              <div className="question__mail">
                <span>Запросы прессы: </span>
                <a href="#">pr@site.ru</a>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-12 d-none d-md-block d-lg-block d-xl-block">
              <div className="contacts__social-block">
                <a href="#" className=" contacts__link contacts__link--facebook"><i className="icon-icon-facebook"></i>facebook</a>
                <a href="#" className="contacts__link contacts__link--vk"><i className="icon-icon-vk"></i>vkontakte</a>
                <a href="#" className="contacts__link contacts__link--instagram"><i className="icon-icon-instagram"></i>instagram</a>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="container">
          <div className="row">
            <div className="col-12 mycol">
              <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A558aa8ed7fb72dcc60fa82209381424f13c9cbed6526279c300e0bb998503930&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default Contacts;