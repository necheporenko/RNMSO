import React from 'react';
import Layout from '../layouts/Main';

const Calendar = () => (
  <Layout title="Афиша">
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-3">
            <div className="page__title-line page__title--calendar ">
              <h1 className="page__title title-calendar">
                Афиша
						</h1>
            </div>
          </div>
          <div className="col-lg-10 col-9">
            <div className="calendar__wrapper">
              <a href="#" className="calendar-slider__date">Октябрь 2018</a>
              <div className="calendar-slider__mounth">
                <div className="slider-mounth__day">
                  <span>1</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>2</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>3</span>
                  <span>ср</span>
                </div>
                <div className="slider-mounth__day">
                  <span>4</span>
                  <span>чт</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>5</span>
                  <span>пт</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="program-page.html" className="tooltip__title">
                        Сказки с оркестром
										</a>
                      <p className="tooltip__desc">
                        15:00, Филармония-2. Концертный зал Рахманинова / Москва
										</p>
                    </div>
                    <div className="tooltip__event">
                      <a href="calendar-program.html" className="tooltip__title">
                        Мама, я Меломан
										</a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
										</p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>6</span>
                  <span>сб</span>
                </div>
                <div className="slider-mounth__day">
                  <span>7</span>
                  <span>вс</span>
                </div>
                <div className="slider-mounth__day">
                  <span>8</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>9</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>10</span>
                  <span>ср</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>11</span>
                  <span>чт</span>
                  <div className="tooltip">

                    <div className="tooltip__event">
                      <a href="calendar-program.html" className="tooltip__title">
                        Мама, я Меломан
										</a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
										</p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>12</span>
                  <span>пт</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>13</span>
                  <span>сб</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="program-page.html" className="tooltip__title">
                        Сказки с оркестром
										</a>
                      <p className="tooltip__desc">
                        15:00, Филармония-2. Концертный зал Рахманинова / Москва
										</p>
                    </div>
                    <div className="tooltip__event">
                      <a href="calendar-program.html" className="tooltip__title">
                        Мама, я Меломан
										</a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
										</p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>14</span>
                  <span>вс</span>
                </div>
                <div className="slider-mounth__day">
                  <span>15</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>16</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>17</span>
                  <span>ср</span>
                </div>
                <div className="slider-mounth__day">
                  <span>18</span>
                  <span>чт</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>19</span>
                  <span>пт</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="program-page.html" className="tooltip__title">
                        Сказки с оркестром
										</a>
                      <p className="tooltip__desc">
                        15:00, Филармония-2. Концертный зал Рахманинова / Москва
										</p>
                    </div>
                    <div className="tooltip__event">
                      <a href="calendar-program.html" className="tooltip__title">
                        Мама, я Меломан
										</a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
										</p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day event">
                  <span>20</span>
                  <span>сб</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="calendar-program.html" className="tooltip__title">
                        Мама, я Меломан
										</a>
                      <p className="tooltip__desc">
                        23:00, Концертный зал Чайковского / Москва
										</p>
                    </div>
                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>21</span>
                  <span>вс</span>
                </div>
                <div className="slider-mounth__day">
                  <span>22</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>23</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>24</span>
                  <span>ср</span>
                </div>
                <div className="slider-mounth__day">
                  <span>25</span>
                  <span>чт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>26</span>
                  <span>пт</span>
                </div>
                <div className="slider-mounth__day event">
                  <span>27</span>
                  <span>сб</span>
                  <div className="tooltip">
                    <div className="tooltip__event">
                      <a href="program-page.html" className="tooltip__title">
                        Сказки с оркестром
										</a>
                      <p className="tooltip__desc">
                        15:00, Филармония-2. Концертный зал Рахманинова / Москва
										</p>
                    </div>

                  </div>
                </div>
                <div className="slider-mounth__day">
                  <span>28</span>
                  <span>вс</span>
                </div>
                <div className="slider-mounth__day">
                  <span>29</span>
                  <span>пн</span>
                </div>
                <div className="slider-mounth__day">
                  <span>30</span>
                  <span>вт</span>
                </div>
                <div className="slider-mounth__day">
                  <span>31</span>
                  <span>ср</span>
                </div>
              </div>
              <div className="calendar-slider__nav">
                <i className="icon-arrow-left calendar-slider__arrow calendar-slider__arrow--prev "></i>
                <i className="icon-arrow-right calendar-slider__arrow calendar-slider__arrow--next "></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">

          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart">
              <p className="event-cart__date">
                6 сентября
							<sup>
                  <small>2018</small>
                </sup> / чт / 19:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="#">
                <img src="../static/img/event1.jpg" alt="Первью события" />
              </a>
              <h2 className="event-cart__title">
                <a href="#">
                  Концерт-презентация оркестра
							</a>
              </h2>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Дирижёр - Василий Петренко
							</div>
                <div className="event-cart__participant">
                  Солист:
								<p className="event-cart__soloist-name">
                    Симон Трпчески (фортепиано)
								</p>
                </div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart">
              <p className="event-cart__date">
                14 сентября
							<sup>
                  <small>2018</small>
                </sup> / пт / 19:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="#">
                <img src="../static/img/event2.jpg" alt="Первью события" />
              </a>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Дирижёр - Дмитрий Крюков
							</div>
                <div className="event-cart__participant">
                  Солисты:
								<p className="event-cart__soloist-name">
                    <span>Филипп Копачевский (фортепиано)</span>
                    <span>Иван Почекин (скрипка)</span>
                    <span>Елена Таросян (скрипка)</span>
                  </p>
                </div>
                <div className="event-cart__participant">
                  Ярослав Тимофеев (ведущий)
							</div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart">
              <p className="event-cart__date">
                30 сентября
							<sup>
                  <small>2018</small>
                </sup> / вс / 23:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="calendar-program.html">
                <img src="../static/img/event3.jpg" alt="Первью события" />
              </a>
              <h2 className="event-cart__title">
                <a href="calendar-program.html">
                  Мама, я меломан. Ночные концерты Московской филармонии
							</a>
              </h2>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Татьяна Геворкян (ведущая)
							</div>
                <div className="event-cart__participant">
                  Дирижёры:
								<p className="event-cart__soloist-name">
                    Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
								</p>
                </div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart event__cart--hidden-md">
              <p className="event-cart__date">
                6 сентября
							<sup>
                  <small>2018</small>
                </sup> / чт / 19:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="#">
                <img src="../static/img/event1.jpg" alt="Первью события" />
              </a>
              <h2 className="event-cart__title">
                <a href="#">
                  Концерт-презентация оркестра
							</a>
              </h2>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Дирижёр - Василий Петренко
							</div>
                <div className="event-cart__participant">
                  Солист:
								<p className="event-cart__soloist-name">
                    Симон Трпчески (фортепиано)
								</p>
                </div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart event__cart--hidden-lg">
              <p className="event-cart__date">
                14 сентября
							<sup>
                  <small>2018</small>
                </sup> / пт / 19:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="#">
                <img src="../static/img/event2.jpg" alt="Первью события" />
              </a>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Дирижёр - Дмитрий Крюков
							</div>
                <div className="event-cart__participant">
                  Солисты:
								<p className="event-cart__soloist-name">
                    <span>Филипп Копачевский (фортепиано)</span>
                    <span>Иван Почекин (скрипка)</span>
                    <span>Елена Таросян (скрипка)</span>
                  </p>
                </div>
                <div className="event-cart__participant">
                  Ярослав Тимофеев (ведущий)
							</div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart event__cart--hidden-lg">
              <p className="event-cart__date">
                30 сентября
							<sup>
                  <small>2018</small>
                </sup> / вс / 23:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="calendar-program.html">
                <img src="../static/img/event3.jpg" alt="Первью события" />
              </a>
              <h2 className="event-cart__title">
                <a href="calendar-program.html">
                  Мама, я меломан. Ночные концерты Московской филармонии
							</a>
              </h2>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Татьяна Геворкян (ведущая)
							</div>
                <div className="event-cart__participant">
                  Дирижёры:
								<p className="event-cart__soloist-name">
                    Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
								</p>
                </div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart event__cart--hidden-lg">
              <p className="event-cart__date">
                6 сентября
							<sup>
                  <small>2018</small>
                </sup> / чт / 19:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="#">
                <img src="../static/img/event1.jpg" alt="Первью события" />
              </a>
              <h2 className="event-cart__title">
                <a href="#">
                  Концерт-презентация оркестра
							</a>
              </h2>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Дирижёр - Василий Петренко
							</div>
                <div className="event-cart__participant">
                  Солист:
								<p className="event-cart__soloist-name">
                    Симон Трпчески (фортепиано)
								</p>
                </div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart event__cart--hidden-lg">
              <p className="event-cart__date">
                14 сентября
							<sup>
                  <small>2018</small>
                </sup> / пт / 19:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="#">
                <img src="../static/img/event2.jpg" alt="Первью события" />
              </a>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Дирижёр - Дмитрий Крюков
							</div>
                <div className="event-cart__participant">
                  Солисты:
								<p className="event-cart__soloist-name">
                    <span>Филипп Копачевский (фортепиано)</span>
                    <span>Иван Почекин (скрипка)</span>
                    <span>Елена Таросян (скрипка)</span>
                  </p>
                </div>
                <div className="event-cart__participant">
                  Ярослав Тимофеев (ведущий)
							</div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-sm-6 mycol">
            <div className="event__cart event__cart--hidden-lg">
              <p className="event-cart__date">
                30 сентября
							<sup>
                  <small>2018</small>
                </sup> / вс / 23:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="calendar-program.html">
                <img src="../static/img/event3.jpg" alt="Первью события" />
              </a>
              <h2 className="event-cart__title">
                <a href="calendar-program.html">
                  Мама, я меломан. Ночные концерты Московской филармонии
							</a>
              </h2>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Татьяна Геворкян (ведущая)
							</div>
                <div className="event-cart__participant">
                  Дирижёры:
								<p className="event-cart__soloist-name">
                    Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
								</p>
                </div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 mycol ">
            <div className="event__cart event__cart--hidden">
              <p className="event-cart__date">
                30 сентября
							<sup>
                  <small>2018</small>
                </sup> / вс / 23:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="calendar-program.html">
                <img src="../static/img/event3.jpg" alt="Первью события" />
              </a>
              <h2 className="event-cart__title">
                <a href="calendar-program.html">
                  Мама, я меломан. Ночные концерты Московской филармонии
							</a>
              </h2>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Татьяна Геворкян (ведущая)
							</div>
                <div className="event-cart__participant">
                  Дирижёры:
								<p className="event-cart__soloist-name">
                    Арсентий Ткаченко, Сергей Акимов, Дмитрий Матвиенко, Ариф Дадашев, Александр Хумала, Пётр Гладыш
								</p>
                </div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mycol ">
            <div className="event__cart event__cart--hidden">
              <p className="event-cart__date">
                6 сентября
							<sup>
                  <small>2018</small>
                </sup> / чт / 19:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="#">
                <img src="../static/img/event1.jpg" alt="Первью события" />
              </a>
              <h2 className="event-cart__title">
                <a href="#">
                  Концерт-презентация оркестра
							</a>
              </h2>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Дирижёр - Василий Петренко
							</div>
                <div className="event-cart__participant">
                  Солист:
								<p className="event-cart__soloist-name">
                    Симон Трпчески (фортепиано)
								</p>
                </div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mycol ">
            <div className="event__cart event__cart--hidden">
              <p className="event-cart__date">
                14 сентября
							<sup>
                  <small>2018</small>
                </sup> / пт / 19:00
						</p>
              <p className="event-cart__room">
                Москва • Большой зал Консерватории
						</p>
              <a href="#">
                <img src="../static/img/event2.jpg" alt="Первью события" />
              </a>
              <div className="event__participant-wrapper">
                <div className="event-cart__participant">
                  Дирижёр - Дмитрий Крюков
							</div>
                <div className="event-cart__participant">
                  Солисты:
								<p className="event-cart__soloist-name">
                    <span>Филипп Копачевский (фортепиано)</span>
                    <span>Иван Почекин (скрипка)</span>
                    <span>Елена Таросян (скрипка)</span>
                  </p>
                </div>
                <div className="event-cart__participant">
                  Ярослав Тимофеев (ведущий)
							</div>
                <button className="act__btn event-cart__btn" type="button">Купить билет</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="event-button__wrapper">
              <button className="act__btn visible__btn" type="button">
                Показать все концерты
						</button>
            </div>

          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default Calendar;