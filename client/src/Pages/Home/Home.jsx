import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Hero from "../../assets/img/hero.png";
import Logo from "../../assets/img/logo.png";
import icon from "../../assets/img/icon.png";
import CardLazy from "../../assets/img/card.png";
import DigitalLazy from "../../assets/img/digital.png";
import GrowLazy from "../../assets/img/grow.png";
import User1 from "../../assets/img/user-1.jpg";
import User2 from "../../assets/img/user-2.jpg";
import User3 from "../../assets/img/user-3.jpg";
import Downarrow from "../../assets/img/downvote.png";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div class="app-home">
      <header className="header">
        <nav className="nav">
          <img
            // src="../img/logo.png"
            src={Logo}
            alt="Bankist logo"
            className="nav__logo"
            id="logo"
          />
          <ul className="nav__links">
            <li className="nav__item">
              <a className="nav__link" href="#section--1">
                Activities
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#section--2">
                Options
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#section--3">
                Testimonials
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link nav__link--btn" href="#section--2">
                Login
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__title">
          <h1>
            Know
            {/* <!-- Green highlight effect --> */}
            <span className="highlight">more</span>
            about
            <br />
            <span className="highlight">us</span>
          </h1>
          <h4>
            We started our journey in 2013 and work largely to utilize the
            potential of the youth and directing it towards activities that will
            lead to inclusive social development, enabling the achievement of
            SDGs.
          </h4>
          <button className="btn--text btn--scroll-to temp">
            Learn more
            <img src={Downarrow} alt="Down Arrow" className="down_arrow" />
          </button>
          <img src={Hero} className="header__img" alt="Minimalist bank items" />
        </div>
      </header>

      <section className="section" id="section--1">
        <div className="section__title">
          <h2 className="section__description">Activities</h2>
          <h3 className="section__header">
            All the support you need to bring about a change.
          </h3>
        </div>

        <div className="features">
          <img src={DigitalLazy} data-src="img/digital.png" alt="Computer" />
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                {/* <use xlink:href="img/icons.svg#icon-monitor"></use> */}
              </svg>
            </div>
            <h5 className="features__header">Community centric challenges</h5>
            <p>
              We cater towards social issues and challenges that are faced by
              many everyday and try to create a social impact through the
              potential and power of youth. We create oppurtunities for the
              youth to drive change through our "Changemaker Academy".
            </p>
          </div>

          <div className="features__feature">
            <div className="features__icon">
              <svg>
                {/* <use xlink:href="img/icons.svg#icon-trending-up"></use> */}
              </svg>
            </div>
            <h5 className="features__header">Creating a social impact</h5>
            <p>
              The changemaker team presents their plans for making a social
              impact based on the detailed case study prsented by our team. It
              is the innovation and passion that should drive the plan. It is
              the desire to bring in a change that we are searching for.
            </p>
          </div>
          <img src={GrowLazy} data-src="img/grow.png" alt="Plant" />

          <img src={CardLazy} data-src="img/card.png" alt="Credit card" />
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                {/* <use xlink:href="img/icons.svg#icon-credit-card"></use> */}
              </svg>
            </div>
            <h5 className="features__header">Implementation of solution</h5>
            <p>
              The changemaker teams connect with social impact organizations and
              create a detailed plan for the implementation of the solution. You
              work with the community for next 16 weeks to execute the plans and
              do your bit in bringing the change.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="section--2">
        <div className="section__title">
          <h2 className="section__description">Options</h2>
          <h3 className="section__header">
            Everything brought together for you.
          </h3>
        </div>

        <div className="operations">
          <div className="operations__tab-container">
            <button
              className="btn operations__tab operations__tab--1 operations__tab--active"
              data-tab="1"
            >
              <a
                href="https://drive.google.com/drive/folders/1uZPC8srcpWBKu1KZ2wuFJ-zpy-7NSam2?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <span>01</span>Upload the problems
              </a>
            </button>
            <Link
              to="/admin-login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <button
                className="btn operations__tab operations__tab--2"
                data-tab="2"
              >
                <span>02</span>Admin login
              </button>
            </Link>
            <Link
              to="/team-login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <button
                className="btn operations__tab operations__tab--3"
                data-tab="3"
              >
                <span>03</span>Team login
              </button>
            </Link>
          </div>
          <div className="operations__content operations__content--1 operations__content--active">
            <div className="operations__icon operations__icon--1">
              <svg>
                {/* <use xlink:href="img/icons.svg#icon-upload"></use> */}
              </svg>
            </div>
            <h5 className="operations__header">
              Upload the problems you see around you.
            </h5>
            <p>
              We continuously try to bring a change in the society but we cannot
              do it wothout your help and support. We need you to do your bit
              and upload in the drive all the issues you see and face around you
              and our changemakers will show their talent and passion to do good
              and bring a change by creating scalable and sustainable solutions.
              <br />{" "}
              <a
                href="https://drive.google.com/drive/folders/1uZPC8srcpWBKu1KZ2wuFJ-zpy-7NSam2?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined">Upload Here</Button>
              </a>
            </p>
          </div>

          <div className="operations__content operations__content--2 operations__content--active">
            <div className="operations__icon operations__icon--2">
              <svg>
                {/* <use xlink:href="img/icons.svg#icon-home"></use> */}
              </svg>
            </div>
            <h5 className="operations__header">Login as an admin.</h5>
            <p>
              <Link to="/admin-login" target="_blank">
                <Button variant="outlined">Admin Login</Button>
              </Link>
              <br />
            </p>
          </div>
          <div className="operations__content operations__content--3 operations__content--active">
            <div className="operations__icon operations__icon--3">
              <svg>
                {/* <use xlink:href="img/icons.svg#icon-user-x"></use> */}
              </svg>
            </div>
            <h5 className="operations__header">Login as a Mentor.</h5>
            <p>
              <Link to="/team-login" target="_blank">
                <Button variant="outlined">Mentor Login</Button>
              </Link>
              <br />
            </p>
          </div>
          <div className="operations__content operations__content--3 operations__content--active">
            <div className="operations__icon operations__icon--3">
              <svg>
                {/* <use xlink:href="img/icons.svg#icon-user-x"></use> */}
              </svg>
            </div>
            <h5 className="operations__header">Login as a changemaker.</h5>
            <p>
              <Link to="/team-login" target="_blank">
                <Button variant="outlined">Changemaker Login</Button>
              </Link>
              <br />
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="section--3">
        <div className="section__title section__title--testimonials">
          <h2 className="section__description">Still not sure about us?</h2>
          <h3 className="section__header">
            Many have already joined us to help bring in a social change.Listen
            from them itself.
          </h3>
        </div>

        {/* <div className="slider"> */}
        {/* <div className="slide slide--1"> */}
        <div className="testimonial">
          <h5 className="testimonial__header">
            A great contributor towards vaccination.
          </h5>
          <blockquote className="testimonial__text">
            The simplicity and convenience plus the effectiveness of the
            solution provided by the changemakers was monumental in helping us
            procure vaccinations for old and undprevileged individuals of our
            area. The platform created by the changemakers helped us in
            gathering precise details that were needed to gather vaccinations
            for the needy.
          </blockquote>
          <address className="testimonial__author">
            <img src={User1} alt="" className="testimonial__photo" />
            <h6 className="testimonial__name">Aarav Prakash</h6>
            <p className="testimonial__location">Bangalore, India</p>
          </address>
          {/* </div> */}
        </div>

        {/* <div className="slide slide--2"> */}
        <div className="testimonial">
          <h5 className="testimonial__header">
            The awareness towards girls education
          </h5>
          <blockquote className="testimonial__text">
            This hackathon has provided us with a beautiful platform where we
            can promote and encourage education among girls and empower them in
            the process. This goes a long way in instilling confidence in the
            girls and helping them become self reliant and independent. It has
            helped us bring a positive change when it comes to gender equality.
          </blockquote>
          <address className="testimonial__author">
            <img src={User2} alt="" className="testimonial__photo" />
            <h6 className="testimonial__name">Reeta Malik</h6>
            <p className="testimonial__location">Hyderabad, India</p>
          </address>
        </div>
        {/* </div> */}

        {/* <div className="slide slide--3"> */}
        <div className="testimonial">
          <h5 className="testimonial__header">Feeding the underpriveleged.</h5>
          <blockquote className="testimonial__text">
            I have always tried everyting in my capacity to help and feed the
            underpriveleged. I try and make sure that no one has to sleep
            through the night hungry. But i was not able to ensure the same
            earlier but now because of the mapping and tracking platform that
            has been provided to me through this hackathon I am able to ensure
            more and more people are fed and amazingly enough I'm also able to
            keep a track of their diet.
          </blockquote>
          <address className="testimonial__author">
            <img src={User3} alt="" className="testimonial__photo" />
            <h6 className="testimonial__name">Prashant Raj</h6>
            <p className="testimonial__location">Lucknow, India</p>
          </address>
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>

      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            Join us today and be a force of change!
          </h3>
        </div>
      </section>

      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://connecting-dreams.org/about-us/"
              target="_blank"
            >
              About
            </a>
          </li>

          <li className="footer__item">
            <a className="footer__link" href="#">
              Terms of Use
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Careers
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Blog
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://connecting-dreams.org/about-us/"
              target="_blank"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <img src={icon} alt="Logo" className="footer__logo" />
      </footer>

      <div className="modal hidden">
        <button className="btn--close-modal">&times;</button>
        <h2 className="modal__header">
          Open your bank account <br />
          in just <span className="highlight">5 minutes</span>
        </h2>
        <form className="modal__form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button className="btn">Next step &rarr;</button>
        </form>
      </div>
      <div className="overlay hidden"></div>
    </div>
  );
};

export default Home;
