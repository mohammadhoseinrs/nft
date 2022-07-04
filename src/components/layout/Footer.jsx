import React from "react";
import "../../assets/css/layout/footer.css";
import logo from "./../../assets/img/logo/logo-bit.png";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__top">
        <div className="footer__top__container">
          <div className="footer__top__container__inner">
            <div className="footer__left">
              <div className="mb-50">
                <div className="footer__info">
                  <div className="footer__logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos exercitationem laboriosam officiis aperiam omnis magnam
                  </p>
                  <div className="footer__social">
                    <a href="#">
                      <GrFacebookOption />
                    </a>
                    <a href="#">
                      <GrTwitter />
                    </a>
                    <a href="#">
                      <GrLinkedinOption />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__allright">
              <div className="footer__right1">
                <div className="footer-col-2 mb-50">
                  <h3 className="footer__widget-title">Marketplace</h3>
                  <ul>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                  </ul>
                </div>
              </div>
              <div className="footer__right2">
                <div className="footer-col-3 mb-50">
                  <h3 className="footer__widget-title">Community</h3>
                  <ul>
                    <li>Create</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                  </ul>
                </div>
              </div>
              <div className="footer__right3">
                <div className="footer-col-4 mb-50">
                  <h3 className="footer__widget-title">Resources</h3>
                  <ul>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                  </ul>
                </div>
              </div>
              <div className="footer__right4">
                <div className="mb-50 footer-col-5">
                  <h3 className="footer__widget-title">Marketplace</h3>
                  <ul>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                    <li>Create A Store</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer__bottom">
        <div className="footer__bottom__conatiner">
          <div className="footer__bottom__conatiner__left">
            <p>
              <a href="#">©Bitakon</a>, 2022 All rights reserved.
            </p>
          </div>
          <div className="footer__bottom__conatiner__right">
            <p>Terms</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
