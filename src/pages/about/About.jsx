import React from "react";
import "./../../assets/css/about/about.css";
import breadcrumb from "./../../assets/img/about/breadcrumb.png";
import about1 from "./../../assets/img/about/about-shape-1.png";
import about2 from "./../../assets/img/about/about-shape-2.png";
import about3 from "./../../assets/img/about/about-shape-3.png";
import about4 from "./../../assets/img/about/about-shape-4.png";
import ice1 from "./../../assets/img/about/about-1.jpeg";
import ice2 from "./../../assets/img/about/about-2.jpeg";
import ice3 from "./../../assets/img/about/about-3.jpeg";
import ice4 from "./../../assets/img/about/about-4.jpeg";
import ice5 from "./../../assets/img/about/about-5.jpeg";
import ice6 from "./../../assets/img/about/about-6.jpeg";
import ice7 from "./../../assets/img/about/about-7.jpeg";
import counter1 from "./../../assets/img/about/counter-1.png";
import counter2 from "./../../assets/img/about/counter-2.png";
import counter3 from "./../../assets/img/about/counter-3.png";
import counter4 from "./../../assets/img/about/counter-4.png";
import counter5 from "./../../assets/img/about/counter-5.png";
import counter6 from "./../../assets/img/about/counter-6.png";
import brand1 from "./../../assets/img/about/brand-1.png";
import brand2 from "./../../assets/img/about/brand-2.png";
import brand3 from "./../../assets/img/about/brand-3.png";
import brand4 from "./../../assets/img/about/brand-4.png";
import brand5 from "./../../assets/img/about/brand-5.png";
import brand6 from "./../../assets/img/about/brand-6.png";
import brand7 from "./../../assets/img/about/brand-7.png";
import brand8 from "./../../assets/img/about/brand-8.png";
import brand9 from "./../../assets/img/about/brand-9.png";
import {FaTelegramPlane ,FaInstagram , FaDiscord , FaTwitter} from 'react-icons/fa'
import AboutSlider from "./AboutSlider";

const brand = [
  { id: 1, img: brand1 },
  { id: 2, img: brand2 },
  { id: 3, img: brand3 },
  { id: 4, img: brand4 },
  { id: 5, img: brand5 },
  { id: 6, img: brand6 },
  { id: 7, img: brand7 },
  { id: 8, img: brand8 },
  { id: 9, img: brand9 },
];

export default function About() {
  return (
    <section className="about">
      <div className="about__top">
        <img src={breadcrumb} alt="" />
      </div>
      <section className="about__inner">
        <div className="about__inner__shape">
          <img src={about1} alt="" className="about__shape-1" />
          <img src={about2} alt="" className="about__shape-2" />
          <img src={about3} alt="" className="about__shape-3" />
          <img src={about4} alt="" className="about__shape-4" />
        </div>
        <div className="about__container">
          <div className="about__container__inner">
            <span>About Foundation</span>
            <h3 className="about__title">
              We do not create the future. We explore it.
            </h3>
          </div>
          <div className="about__container__shape">
            <div className="about__container__shape__left">
              <img className="about-b35" src={ice1} alt="" />
            </div>
            <div className="about__container__shape__right">
              <div className="about__container__shape__right__top">
                <div className="about__container__shape__right__top__item">
                  <img className="about-b35" src={ice2} alt="" />
                </div>
                <div className="about__container__shape__right__top__item2">
                  <img className="about-b35" src={ice3} alt="" />
                </div>
                <div className="about__container__shape__right__top__item2">
                  <img className="about-b35" src={ice4} alt="" />
                </div>
              </div>
              <div className="about__container__shape__right__bottom">
                <div className="about__container__shape__right__bottom__item1">
                  <img className="about-b35" src={ice5} alt="" />
                </div>
                <div className="about__container__shape__right__bottom__item2">
                  <img className="about-b35" src={ice6} alt="" />
                </div>
                <div className="about__container__shape__right__bottom__item3">
                  <img className="about-b35" src={ice7} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSlider />

      <section className="about__mission">
        <div className="about__mission__container">
          <div className="about__mission__container__inner">
            <div className="about__mission__container__inner__item">
              <div className="about__mission__container__inner__item__top">
                <span>Our Mission</span>
                <p>
                  At Bitakon, we're excited about a brand new type of digital
                  good called a non-fungible token, or NFT. NFTs have exciting
                  new properties:unique, provably scarce, tradeable, and usable
                  across multiple applications. Just like physical goods, you
                  can do whatever you want with them!
                </p>
              </div>
              <div className="about__mission__container__inner__item__bottom">
                <span className="mission__counter-vr-br"></span>
                <span className="mission__counter-vr-br mission__counter-vr-br-2"></span>
                <span className="mission__counter-hr-br"></span>
                <div className="about__mission__container__inner__item__bottom__inner">
                  <div className="about__mission__container__inner__item__bottom__inner__item">
                    <div className="about__mission__container__inner__item__bottom__inner__item__item">
                      <div className="mission__counter-icon mr-10">
                        <img src={counter1} alt="" />
                      </div>
                      <div className="mission__counter-content">
                        <h4>3</h4>
                        <p>Since Launching</p>
                      </div>
                    </div>
                  </div>
                  <div className="about__mission__container__inner__item__bottom__inner__item">
                    <div className="about__mission__container__inner__item__bottom__inner__item__item justify-center">
                      <div className="mission__counter-icon mr-10">
                        <img src={counter2} alt="" />
                      </div>
                      <div className="mission__counter-content">
                        <h4>
                          <span>0</span>
                          M+
                        </h4>
                        <p>Total User</p>
                      </div>
                    </div>
                  </div>
                  <div className="about__mission__container__inner__item__bottom__inner__item">
                    <div className="about__mission__container__inner__item__bottom__inner__item__item justify-end">
                      <div className="mission__counter-icon mr-10">
                        <img src={counter3} alt="" />
                      </div>
                      <div className="mission__counter-content">
                        <h4>
                          <span>0</span>+
                        </h4>
                        <p>Total Employees</p>
                      </div>
                    </div>
                  </div>
                  <div className="about__mission__container__inner__item__bottom__inner__item">
                    <div className="about__mission__container__inner__item__bottom__inner__item__item">
                      <div className="mission__counter-icon mr-10">
                        <img src={counter4} alt="" />
                      </div>
                      <div className="mission__counter-content">
                        <h4>
                          <span>0</span>
                          M+
                        </h4>
                        <p>Total Collections</p>
                      </div>
                    </div>
                  </div>
                  <div className="about__mission__container__inner__item__bottom__inner__item">
                    <div className="about__mission__container__inner__item__bottom__inner__item__item justify-center">
                      <div className="mission__counter-icon mr-10">
                        <img src={counter5} alt="" />
                      </div>
                      <div className="mission__counter-content">
                        <h4>
                          <span>0</span>
                          k+
                        </h4>
                        <p>NFT Created</p>
                      </div>
                    </div>
                  </div>
                  <div className="about__mission__container__inner__item__bottom__inner__item">
                    <div className="about__mission__container__inner__item__bottom__inner__item__item justify-end">
                      <div className="mission__counter-icon mr-10">
                        <img src={counter6} alt="" />
                      </div>
                      <div className="mission__counter-content">
                        <h4>
                          $<span>10</span>
                          B+
                        </h4>
                        <p>Trading Volume</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about__icon">
        <span className="about__icon__top"></span>
        <div className="about__icon__container">
          <div className="about__icon__container__inner">
            {brand.map((brand) => (
              <div
                key={brand.id}
                className="about__icon__container__inner__item"
              >
                <div className="about__icon__container__inner__item__inner">
                  <img src={brand.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join__area">
        <div className="join__area__container">
          <div className="join__area__top">
            <h3>Interested in joining us?</h3>
          </div>
          <div className="join__area__main">
            <div className="join__area__main__item">
              <div className="join__thumb">
                <img src={counter3} alt="" />
              </div>
              <h3 className="join__title">
                Join our
                <span>Community</span>
              </h3>
              <div className="join__social">
                <a href="#">
                  <FaTelegramPlane />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaDiscord />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="join__area__main__item">
            <div className="join__thumb">
                <img src={counter5} alt="" />
              </div>
              <div className="join__content">
                <h3 className="join__title">
                Become a  
                <span>Creator</span>
                </h3>
                <div className="join__btn">
                  <a href="#">sign up</a>
                </div>
              </div>
            </div>
            <div className="join__area__main__item">
            <div className="join__thumb">
                <img src={counter1} alt="" />
              </div>
              <div className="join__content">
                <h3 className="join__title">
                Reach out to
                <span>our team</span>
                </h3>
                <div className="join__btn-gradient">
                  <a href="#">team@Bitakon.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
