import React from 'react';
import Link from 'next/link';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import { getYouTubeVideoId } from '../utils/common';
import Lightbox from 'react-images';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';

const Persona = () => (
  <Layout title="">
    <main className="m-before m-persona">
      <div className="container">
        <div className="row r-title">
          <div className="col-12">
            <div className="page__title-line page__title-line--orchestra">
              <div className="page__flex-wrap">
                <h1 className="page__title page__title--long">
                  Владимир Михайлович Юровский
							</h1>
              </div>
              <div className="page__flex-wrap">
                <Submenu menu="OrchestraMenu" />
              </div>
            </div>
          </div>
        </div>
        <div className="row r-photo-grid">
          <div className="col-12 d-none d-sm-block">
            <div className="program__photo-wrapper clearfix">
              <div className="program__photo-title">
                <a data-fancybox="group" href="img/gallery/big/persona/persona-title-photo1.jpg">
                  <img src="../static/img/gallery/small/persona/persona-title-photo1.jpg" />
                </a>

              </div>
              <div className="program__photo-gallery">
                <div className="photo-gallery__item">
                  <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1 group" className="popap__video popap__video--program-page"
                    id="autoplay">
                    <img src="../static/img/gallery/small/persona/persona1.jpg" alt="Фотогалерея" className="program1" />
                  </a>
                </div>
                <div className="photo-gallery__item">
                  <a data-fancybox="group" href="img/gallery/big/persona/persona2.jpg">
                    <img src="../static/img/gallery/small/persona/persona2.jpg" />
                  </a>
                </div>
                <div className="photo-gallery__item">
                  <a data-fancybox="group" href="img/gallery/big/persona/persona3.jpg">
                    <img src="../static/img/gallery/small/persona/persona3.jpg" />
                  </a>
                </div>
                <div className="photo-gallery__item">
                  <a data-fancybox="group" href="img/gallery/big/persona/persona4.jpg">
                    <img src="../static/img/gallery/small/persona/persona4.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="row r-slider">
          <div className="col-12 d-block d-sm-none mycol">
            <div className="owl-carousel program-page__carousel">
              <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/persona/persona-title-photo1.jpg">
                <img src="../static/img/gallery/small/persona/persona-title-photo1.jpg" />
              </a>
              <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video popap__video--program-page"
                rel="carousel" id="autoplay">
                <img src="../static/img/gallery/small/persona/persona1.jpg" alt="Фотогалерея" className="program1" />
              </a>
              <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/persona/persona2.jpg">
                <img src="../static/img/gallery/small/persona/persona2.jpg" />
              </a>

              <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/persona/persona3.jpg">
                <img src="../static/img/gallery/small/persona/persona3.jpg" />
              </a>
              <a data-fancybox="gallery" rel="carousel" href="img/gallery/big/persona/persona4.jpg">
                <img src="../static/img/gallery/small/persona/persona4.jpg" />
              </a>
            </div>
          </div>
        </div>
        <div className="row r-biography">
          <div className="col-md-4">
            <p className="persona__career">
              Художественный руководитель и главный дирижёр Государственного академического симфонического оркестра России имени Е. Ф.
              Светланова
					</p>
          </div>
          <div className="col-md-8">
            <div className="persona__biography">
              <p>
                Родился в 1972 году в Москве. Представитель российской музыкальной династии: сын дирижера Михаила Юровского, внук композитора
                Владимира Юровского, правнук дирижера Давида Блока (создателя Государственного симфонического оркестра кинематографии).
                Музыкальное образование получил в Академическом музыкальном училище при Московской консерватории, Дрезденской Высшей
                школе музыки имени Вебера и Берлинской Высшей школе музыки имени Эйслера.
						</p>
              <p>
                Дирижированию обучался у своего отца, затем у Александра фон Брюка, Рольфа Ройтера и сэра Колина Дэвиса, был ассистентом
                Геннадия Рождественского. В 1995 году с триумфом дебютировал на международной сцене – в рамках оперного фестиваля
                в Уэксфорде (опера «Майская ночь» Римского-Корсакова). С тех пор сотрудничает с крупнейшими театрами, среди которых
                Ковент-Гарден (Лондон), Опера Бастий (Париж), Метрополитен-опера (Нью-Йорк), Комише Опер (Берлин), Ла Фениче (Венеция),
                Ла Скала (Милан), Большой театр России и другие. Выступает с ведущими симфоническими коллективами: филармоническими
                оркестрами Берлина, Вены и Нью-Йорка, Филадельфийским, Кливлендским, Чикагским и Бостонским симфоническими оркестрами,
                Государственной капеллой Дрездена, оркестрами Гевандхауса, Консертгебау, Баварского радио и многими другими. В 2001-2013
                гг. – музыкальный руководитель оперного фестиваля в Глайндборне. В 2005-2009 гг. – главный приглашенный дирижер Российского
                национального оркестра. С 2007 – главный дирижер Лондонского филармонического оркестра и один из трех постоянных дирижеров
                Оркестра Эпохи Просвещения (наряду с сэром Саймоном Рэттлом и Иваном Фишером), с которыми провел фестивали «Открывая
                Чайковского», «Меж двух миров» (к 75-летию со дня рождения Шнитке) и другие. С 2009 сотрудничает с Камерным оркестром
                Европы. С 2017 года – художественный руководитель Фестиваля имени Энеску в Бухаресте, главный дирижер Оркестра Берлинского
                радио.
						</p>
            </div>
          </div>
        </div>
        <div className="row r-master-className">
          <div className="col-md-4">
            <h2 className="persona__title">
              Мастер классы
					</h2>
          </div>
          <div className="col-md-8">
            <ul className="master-className__list">
              <li><strong className="master-className__date">1 сентября / 12:00</strong><span> — Первые, вторые скрипки </span></li>
              <li><strong className="master-className__date">2 сентября / 14:00</strong><span> — Первые, вторые скрипки </span></li>
              <li><strong className="master-className__date">3 сентября / 12:00</strong><span> — Духовые </span></li>
              <li><strong className="master-className__date">4 сентября / 14:00</strong><span> — Альты</span></li>
            </ul>
          </div>
        </div>
        <div className="row r-concerts">
          <div className="col-md-4">
            <h2 className="persona__title">Концерты с РНМСО</h2>
          </div>
          <div className="col-md-8">
            <div className="persona__concert">
              <div className="concert__date-place">
                <a href="#" className="persona-concert__date">6 сентября<sup><small>2018</small></sup> / 19:00</a>
                <span className="persona-concert__place">МОСКВА • Большой зал Консерватории</span>
              </div>
              <div className="concert__name-participants">
                <h3 className="concert__name"><a href="#">Концерт-презентация оркестра</a></h3>
                <p className="concert__participants">
                  <span className="concert__participants-name">Владимир Юровский</span>
                  <span className="concert__participants-instrument">(дирижер) </span>
                </p>
                <p className="concert__participants">
                  <span className="concert__participants-name">Симон Трпчески</span>
                  <span className="concert__participants-instrument">(фортепиано)</span>
                </p>
              </div>
            </div>
            <div className="persona__concert">
              <div className="concert__date-place">
                <a href="#" className="persona-concert__date">1 декабря<sup><small>2018</small></sup> / 19:00</a>
                <span className="persona-concert__place">МОСКВА • Филармония-2. Концертный зал имени С. В. Рахманинова</span>
              </div>
              <div className="concert__name-participants">
                <p className="concert__participants">
                  <span className="concert__participants-name">Владимир Юровский</span>
                  <span className="concert__participants-instrument">(дирижер) </span>
                </p>
              </div>
              <p className="participants-role">Солисты:</p>
              <div className="concert__name-participants">
                <p className="concert__participants">
                  <span className="concert__participants-name">Филипп Копачевский </span>
                  <span className="concert__participants-instrument">(фортепиано) </span>
                </p>
                <p className="concert__participants">
                  <span className="concert__participants-name">Иван Почекин </span>
                  <span className="concert__participants-instrument">(скрипка)</span>
                </p>
              </div>
              <div className="concert__name-participants">
                <p className="concert__participants">
                  <span className="concert__participants-name">Елена Таросян </span>
                  <span className="concert__participants-instrument">(скрипка) </span>
                </p>
                <p className="concert__participants">
                  <span className="concert__participants-name">Ярослав Тимофеев </span>
                  <span className="concert__participants-instrument">(ведущий)</span>
                </p>
              </div>
            </div>
            <div className="persona__concert">
              <div className="concert__date-place">
                <a href="#" className="persona-concert__date">15 декабря<sup><small>2018</small></sup> / 23:00</a>
                <span className="persona-concert__place">МОСКВА • Концертый зал имени П. И. Чайковского</span>
              </div>
              <div className="concert__name-participants">
                <h3 className="concert__name"><a href="#">Мама, я меломан. Ночные концерты Московской филармонии</a></h3>
                <p className="concert__participants">
                  <span className="concert__participants-name">Татьяна Геворкян</span>
                  <span className="concert__participants-instrument">(ведущая)</span>
                </p>
                <p className="participants-role">Дирижёры:</p>
                <p className="concert__participants">
                  Владимир Юровский, Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
							</p>
              </div>
            </div>


          </div>
        </div>
      </div>

    </main>
  </Layout>
)

Persona.getInitialProps = async ({ req, res, query }) => {
  const language = req || res ? req.language || res.locals.language : null;
  const conductorID = query.id;
  const response = await callApi(`/conductors/${conductorID}`, language);
  return { conductor: response };
}
export default withI18next(['common'])(Persona);