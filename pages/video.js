import React from 'react';
import { withI18next } from '../lib/withI18next';
import callApi from '../utils/api';
import Layout from '../layouts/Main';
import Submenu from '../components/moleculs/Submenu';

const Video = ({ t }) => (
  <Layout title="Видео">
    <main className="m-before m-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page__title-line">
              <h1 className="page__title">
                {t("MediaMenu.video")}
              </h1>
              <Submenu menu="MediaMenu" activePage="video" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mycol">
            <div className="main__video">
              <a data-fancybox href="https://vimeo.com/63186969" className="popap__video">
                <img src="../static/img/video-preview1.jpg" alt="Превью видео" className="video__img" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="controls top__controls">
              <button className="filter__btn filter reset" data-filter="all">Все видео</button>
              <button className="filter__btn filter" data-filter="videoblog">#видеоблог</button>
              <button className="filter__btn filter" data-filter="concert">#концерты</button>
              <button className="filter__btn filter" data-filter="repetition">#репетиции</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <figure className="video__carts top__cart">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview2.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 9
							</h3>
                <div className="video__text">
                  Смысл жизни, как следует из вышесказанного, контролирует позитивизм. Принцип восприятия ментально порождает и обеспечивает
                  онтологический знак. Дедуктивный метод выводит неоднозначный смысл жизни, хотя в официозе принято обратное. Искусство
                  принимает во внимание субъективный бабувизм.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>
                  <li className="tags">
                    #репетиции
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="video-carts__flex-wrapper">
          <div className="mix video__basis videoblog concert repetition">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview3.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 8
							</h3>
                <div className="video__text">
                  Закон исключённого третьего нетривиален. Сомнение осмысляет мир. Искусство методологически выводит данный дуализм. Ассоциация,
                  по определению, выводит трагический гравитационный парадокс. Эсхатологическая идея порождена временем.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>
                  <li className="tags">
                    #репетиции
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis videoblog concert">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview4.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 7
							</h3>
                <div className="video__text">
                  Единственной космической субстанцией Гумбольдт считал материю, наделенную внутренней активностью, несмотря на это освобождение
                  трогательно наивно. Сомнение порождает и обеспечивает данный принцип восприятия, не учитывая мнения авторитетов.
                  Катарсис естественно преобразует трансцендентальный предмет деятельности. Реальность трансформирует гений.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis concert">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview5.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Ночные концерты Московской филармонии «Мама, я меломан»
							</h3>
                <div className="video__text">
                  <p className="showman">
                    Татьяна Геворкян (ведущая)
								</p>
                  <p className="director">
                    <span>
                      Дирижёры:
									</span>
                    Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
								</p>
                  <p className="programm">
                    <span>
                      В программе:
									</span>
                    Россини — Увертюра к опере «Сорока-воровка» Вагнер — Вступление к первому акту и антракт к третьему акту оперы «Лоэнгрин»
                    Дюка — «Ученик Чародея» Прокофьев — Фрагменты музыки балета «Золушка» Маркес — Danson № 2 Бернстайн — Сюита из мюзикла
                    «Вестсайдская история»
								</p>
                </div>
                <ul className="hashtag">
                  <li className="tags">
                    #концерты
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis videoblog concert repetition">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview3.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 8
							</h3>
                <div className="video__text">
                  Закон исключённого третьего нетривиален. Сомнение осмысляет мир. Искусство методологически выводит данный дуализм. Ассоциация,
                  по определению, выводит трагический гравитационный парадокс. Эсхатологическая идея порождена временем.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>
                  <li className="tags">
                    #репетиции
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis videoblog concert">
            <figure className="video__carts">

              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview4.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 7
							</h3>
                <div className="video__text">
                  Единственной космической субстанцией Гумбольдт считал материю, наделенную внутренней активностью, несмотря на это освобождение
                  трогательно наивно. Сомнение порождает и обеспечивает данный принцип восприятия, не учитывая мнения авторитетов.
                  Катарсис естественно преобразует трансцендентальный предмет деятельности. Реальность трансформирует гений.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>

                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis concert">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview5.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Ночные концерты Московской филармонии «Мама, я меломан»
							</h3>
                <div className="video__text">
                  <p className="showman">
                    Татьяна Геворкян (ведущая)
								</p>
                  <p className="director">
                    <span>
                      Дирижёры:
									</span>
                    Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
								</p>
                  <p className="programm">
                    <span>
                      В программе:
									</span>
                    Россини — Увертюра к опере «Сорока-воровка» Вагнер — Вступление к первому акту и антракт к третьему акту оперы «Лоэнгрин»
                    Дюка — «Ученик Чародея» Прокофьев — Фрагменты музыки балета «Золушка» Маркес — Danson № 2 Бернстайн — Сюита из мюзикла
                    «Вестсайдская история»
								</p>
                </div>
                <ul className="hashtag">
                  <li className="tags">
                    #концерты
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis videoblog concert repetition">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview3.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 8
							</h3>
                <div className="video__text">
                  Закон исключённого третьего нетривиален. Сомнение осмысляет мир. Искусство методологически выводит данный дуализм. Ассоциация,
                  по определению, выводит трагический гравитационный парадокс. Эсхатологическая идея порождена временем.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>
                  <li className="tags">
                    #репетиции
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis videoblog concert">
            <figure className="video__carts">

              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview4.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 7
							</h3>
                <div className="video__text">
                  Единственной космической субстанцией Гумбольдт считал материю, наделенную внутренней активностью, несмотря на это освобождение
                  трогательно наивно. Сомнение порождает и обеспечивает данный принцип восприятия, не учитывая мнения авторитетов.
                  Катарсис естественно преобразует трансцендентальный предмет деятельности. Реальность трансформирует гений.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>

                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis concert">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview5.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Ночные концерты Московской филармонии «Мама, я меломан»
							</h3>
                <div className="video__text">
                  <p className="showman">
                    Татьяна Геворкян (ведущая)
								</p>
                  <p className="director">
                    <span>
                      Дирижёры:
									</span>
                    Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
								</p>
                  <p className="programm">
                    <span>
                      В программе:
									</span>
                    Россини — Увертюра к опере «Сорока-воровка» Вагнер — Вступление к первому акту и антракт к третьему акту оперы «Лоэнгрин»
                    Дюка — «Ученик Чародея» Прокофьев — Фрагменты музыки балета «Золушка» Маркес — Danson № 2 Бернстайн — Сюита из мюзикла
                    «Вестсайдская история»
								</p>
                </div>
                <ul className="hashtag">
                  <li className="tags">
                    #концерты
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis videoblog concert repetition">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview3.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 8
							</h3>
                <div className="video__text">
                  Закон исключённого третьего нетривиален. Сомнение осмысляет мир. Искусство методологически выводит данный дуализм. Ассоциация,
                  по определению, выводит трагический гравитационный парадокс. Эсхатологическая идея порождена временем.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>
                  <li className="tags">
                    #репетиции
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix video__basis videoblog concert">
            <figure className="video__carts">

              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview4.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Видеоблог РНМСО. Выпуск 7
							</h3>
                <div className="video__text">
                  Единственной космической субстанцией Гумбольдт считал материю, наделенную внутренней активностью, несмотря на это освобождение
                  трогательно наивно. Сомнение порождает и обеспечивает данный принцип восприятия, не учитывая мнения авторитетов.
                  Катарсис естественно преобразует трансцендентальный предмет деятельности. Реальность трансформирует гений.
							</div>
                <ul className="hashtag">
                  <li className="tags">
                    #видеоблог
								</li>
                  <li className="tags">
                    #концерты
								</li>

                </ul>
              </figcaption>
            </figure>
          </div>
          <div className="mix concert video__basis">
            <figure className="video__carts">
              <div className="link__frame">
                <a data-fancybox href="https://www.youtube.com/watch?v=fQmvMavhmco;autoplay=1" className="popap__video" id="autoplay">
                  <img src="../static/img/video-preview5.jpg" alt="Превью видео" className="video__img" />
                </a>
              </div>
              <figcaption>
                <h3 className="video__title">
                  Ночные концерты Московской филармонии «Мама, я меломан»
							</h3>
                <div className="video__text">
                  <p className="showman">
                    Татьяна Геворкян (ведущая)
								</p>
                  <p className="director">
                    <span>
                      Дирижёры:
									</span>
                    Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
								</p>
                  <p className="programm">
                    <span>
                      В программе:
									</span>
                    Россини — Увертюра к опере «Сорока-воровка» Вагнер — Вступление к первому акту и антракт к третьему акту оперы «Лоэнгрин»
                    Дюка — «Ученик Чародея» Прокофьев — Фрагменты музыки балета «Золушка» Маркес — Danson № 2 Бернстайн — Сюита из мюзикла
                    «Вестсайдская история»
								</p>
                </div>
                <ul className="hashtag">
                  <li className="tags">
                    #концерты
								</li>
                </ul>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)


Video.getInitialProps = async ({ req, res }) => {
  const language = req || res ? req.language || res.locals.language : null;
  // const response = await callApi('/press', language);
  // return { press: response.results }
}

export default withI18next(['common'])(Video);