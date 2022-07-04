import React from "react";
import "./../../assets/css/contact/contact.css";
import shape1 from "./../../assets/img/about/contact-shape-1.png";
import shape2 from "./../../assets/img/about/contact-shape-2.png";
import shape3 from "./../../assets/img/about/contact-shape-3.png";
import shape4 from "./../../assets/img/about/contact-shape-4.png";
import shape5 from "./../../assets/img/about/contact-shape-5.png";
import contact1 from "./../../assets/img/about/contact-1.png";
import contact2 from "./../../assets/img/about/contact-2.png";
import contact3 from "./../../assets/img/about/contact-3.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__inner">
          <div className="contact__wrapper">
            <div className="contact__shape">
              <img src={shape1} alt="" className="contact__shape-1" />
              <img src={shape2} alt="" className="contact__shape-2" />
              <img src={shape3} alt="" className="contact__shape-3" />
              <img src={shape4} alt="" className="contact__shape-4" />
              <img src={shape5} alt="" className="contact__shape-5" />
            </div>
            <div className="contact__content">
              <h3>Get in Touch</h3>
              <p>
                Need support, have feature requests, looking for partnerships
                orwould like to make unlimited number of API calls? We respond
                within 24 hours during business days.
              </p>
            </div>
            <form className="contact__form">
              <div className="contact__form__firstinput">
                <h4>
                  Your name
                  <span>*</span>
                </h4>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="contact__form__firstinput">
                <h4>
                  Your Email
                  <span>*</span>
                </h4>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              {/* 
                        <div className="contact__form__selectbox">
                            <div className="contact__form__selectbox__left">
                                <h4>Select a subject</h4>
                                <div className="contact__form__selectbox__select">
                                    <select className='nice-select'  name="" id="">
                                        <option value="">Service Request</option>
                                        <option value="">Service 1</option>
                                        <option value="">Service 2</option>
                                        <option value="">Service 3</option>
                                        <option value="">Service 4</option>
                                    </select>
                                    <div className="nice-select">
                                        <span className='current'>Service Request</span>
                                        <ul className='list'>
                                            <li data-value='Service Request' className='option selected'>Service Request</li>
                                            <li data-value='Service 1' className='option'></li>
                                            <li data-value='Service 2' className='option'></li>
                                            <li data-value='Service 3' className='option'></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="contact__form__selectbox__right">
                                
                            </div>
                        </div>
                                      */}
              <div className="contact__form__message">
                <h4>
                  Message
                  <span>*</span>
                </h4>
                <textarea placeholder="How can we help you?"></textarea>
              </div>

              <div className="contact__form__btn">
                <div className="contact__form__btn__agree">
                  <input type="checkbox" />
                  <label htmlFor="">Allow to all tearms & condition</label>
                </div>
                <div className="contact__btn">
                  <button>send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <section className="contact__info__item">
          <div className="contact__info__item__wrapper">
            <div className="contact__info__item__wrapper__item">
              <div className="contact__info__item__wrapper__item__inner">
                <div className="contact__info__item__wrapper__item__inner__icon">
                  <span>
                    <img src={contact1} alt="" />
                  </span>
                </div>
                <div className="contact__info__item__wrapper__item__inner__text">
                  <p>Mail</p>
                  <h4>info@Bitakon.com</h4>
                </div>
              </div>
            </div>

            <div className="contact__info__item__wrapper__item">
              <div className="contact__info__item__wrapper__item__inner">
                <div className="contact__info__item__wrapper__item__inner__icon">
                  <span className="contact__info__item__wrapper__item__inner__icon__back1">
                    <img src={contact2} alt="" />
                  </span>
                </div>
                <div className="contact__info__item__wrapper__item__inner__text">
                  <p>Support</p>
                  <h4>Join Discord</h4>
                </div>
              </div>
            </div>

            <div className="contact__info__item__wrapper__item">
              <div className="contact__info__item__wrapper__item__inner">
                <div className="contact__info__item__wrapper__item__inner__icon">
                  <span className="contact__info__item__wrapper__item__inner__icon__back2">
                    <img src={contact3} alt="" />
                  </span>
                </div>
                <div className="contact__info__item__wrapper__item__inner__text">
                  <p>Office</p>
                  <h4>Pikk 33, Tallinn, Estonia</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
