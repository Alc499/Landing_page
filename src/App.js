import React, {useRef} from 'react';
import './style.css';

const App = () => {
  const formRef = useRef(null);
  
  return (
    <>
      <header className="header container">
        <div className="header__wrapper">
          <div className="header__repairs">
            <img src="http://media.lpgenerator.ru/images/46615/bez-imeni-1_18.png#size_139x84" alt="logo" />
          </div>
        </div>
      </header>

      <main>
        <div className="main-wrapper">
          <section className="presentaiton container">
            <div className="presentaiton__wrapper wrapper">
              <div className="presentaiton__check-mark">
                <img src="http://media.lpgenerator.ru/images/46615/3_130.png#size_55x38" alt="check-mark" />
              </div>

              <div className="presentation__content">
                <h1 className="presentaiton__header">ремонт "под ключ" <br /> без хлопот</h1>
                <p>Преобразим вашу квартиру, дом или офис!</p>
              </div>

              <div className="form-container">
                <div className="form-container__content">
                  <h2 className="form-container__header">Заполните <br /> форму</h2>
                  <span>и получите уникальное предложение: </span>
                </div>

                <form className="form-container__form" action="post">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Имя*"
                    className="form-container__form-input"
                    ref={formRef}
                  />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Телефон*"
                    className="form-container__form-input"
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail*"
                    className="form-container__form-input"
                  />
                  <button type="button" className="form-container__form-button button">получить предложение</button>
                </form>
              </div>
            </div>
          </section>
      
          <section className="advantages container">
            <div className="advantages__wrapper wrapper">
              <h2 className="sub-header advantages__header">
                Ощутите все преимущества работы <br /> с профессионалами:
              </h2>
      
              <ul className="advantages__list">
                <li className="advantages__list-point">
                  <div className="advantages__list-point-roller">
                    <div className="advantages__img">
                      <img src="http://media.lpgenerator.ru/images/46615/3_38.jpg#size_444x217" alt="builder" />
                    </div>
        
                    <div className="advantages__content">
                      <h3 className="advantages__content-header">
                        От А до Я
                      </h3>
        
                      <p>
                        проведем для вас все работы, от
                        составления сметы и выбора
                        материалов и до уборки строительного
                        мусора
                      </p>
                    </div>
                  </div>
                </li>
      
                <li className="advantages__list-point">
                  <div className="advantages__list-point-contract">
                    <div className="advantages__img">
                      <img src="http://media.lpgenerator.ru/images/46615/4_29.jpg#size_444x217" alt="builder" />
                    </div>
        
                    <div className="advantages__content">
                      <h3 className="advantages__content-header">
                        Гарантированный результат
                      </h3>
        
                      <p>
                        проведем для вас все работы, от
                        составления сметы и выбора
                        материалов и до уборки строительного
                        мусора
                      </p>
                    </div>
                  </div>
                </li>
      
                <li className="advantages__list-point">
                  <div className="advantages__list-point-builder">
                    <div className="advantages__img">
                      <img src="http://media.lpgenerator.ru/images/46615/5_23.jpg#size_444x218" alt="builder" />
                    </div>
        
                    <div className="advantages__content">
                      <h3 className="advantages__content-header">
                        Только профессионалы
                      </h3>
        
                      <p>
                        проведем для вас все работы, от
                        составления сметы и выбора
                        материалов и до уборки строительного
                        мусора
                      </p>
                    </div>
                  </div>
                </li>
      
                <li className="advantages__list-point">
                  <div className="advantages__list-point-money">
                    <div className="advantages__img">
                      <img src="http://media.lpgenerator.ru/images/46615/6_15.jpg#size_443x218" alt="builder" />
                    </div>
        
                    <div className="advantages__content">
                      <h3 className="advantages__content-header">
                        Цены для всех
                      </h3>
        
                      <p>
                        проведем для вас все работы, от
                        составления сметы и выбора
                        материалов и до уборки строительного
                        мусора
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
      
          <section className="result-garanty container">
            <div className="result-garanty__wrapper wrapper">
              <img
                src="http://media.lpgenerator.ru/images/46615/9_82.png#size_191x172"
                alt="100% garanty"
              />
      
              <div className="result-garanty__content">
                <h2 className="sub-header">
                  Закажи ремонт под ключ <br /> у опытных мастеров - 
                </h2>
      
                <p className="result-garanty__content-text">
                  и вам не придется беспокоиться ни минуты. Мы воплотим в жизнь любую вашу задумку, <br />
                  освежим и обновим любой интерьер, приведем помещение к идеальному состоянию.
                </p>
      
                <p className="result-garanty__content-text">
                  Результат нашей работы будет радовать вас не один год: к каждому проекту мы <br />
                  относимся с максимальным вниманием и берем полную ответственность за качество.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <div className="footer__container wrapper">
          <div className="footer__contacts">
            <ul className="footer__contacts-list">
              <li>
                <a
                  href="tel:0990012086"
                  className="footer__contacts-link"
                >
                  +38 (099) 001 20 86
                </a>
              </li>
              <li>
                <a
                  href="tel:0684407047"
                  className="footer__contacts-link"
                >
                  +38 (068) 440 70 47
                </a>
              </li>
            </ul>
          </div>
      
          <div className="footer__button">
            <button 
              className="button"
              onClick={() => formRef.current.focus()}
            >получить предложение</button>
          </div>
      
          <div className="footer__email">
            <a
              href="mailto:a.o.musienko@gmail.com"
              className="footer__contacts-link"
            >
              a.o.musienko@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;