import React from 'react';
import './Landing.css';
import { FaSearch } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { useRef } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image1 from '../../assets/images/image1.png';
import mobile from '../../assets/images/mobile.jpg';
import digital from '../../assets/images/digital.jpg';
import content from '../../assets/images/content.jpg';
import video from '../../assets/images/video.jpg';
import web from '../../assets/images/web.jpg';
import design from '../../assets/images/design.jpg';
import image2 from '../../assets/images/image2.png';

import ismail from '../../assets/images/ismail.jpeg';
import anas from '../../assets/images/anas.jpeg';
import sohaib from '../../assets/images/sohaib.jpg';
import bakr from '../../assets/images/bakr.jpg';
import samir from '../../assets/images/samir.jpg';

function Landing() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };
  return (


    <body className="landing-page__wrapper">

      <div className="hero">
        <header>
          <h3 className="main-navigation__logo">WorkHub</h3>
          <nav ref={navRef}>
            <a href="#freelancers">For Freelancers</a>
            <a href="#quote">Why WorkHub</a>
            <a href="#reviews">Client Reviews</a>
            <a href="#categories">Categories</a>
            <a href="#clients">For Clients</a>
            <a href="#contact">Contact Us</a>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button
            className="nav-btn"
            onClick={showNavbar}>
            <FaBars />
          </button>
          <div className="login-singup-wrapper">
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Sign Up</a>
          </div>
        </header>
        <div className="text-hero" id="home">
          <h1>Welcome to WorkHub</h1>
          <p>Find the best freelance services for your business</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for any service..." />
            <FaSearch className="search-icon" />

          </div>
          <br></br><br></br>

        </div>
        <div classe="svg-hero" style={{ height: '150px', overflow: 'hidden' }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C149.99,150.00 351.77,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff ' }}></path>
          </svg>
        </div>
      </div>

      <section className="wave-contenedor website" id="freelancers">
        <LazyLoadImage src={image1} alt="" />
        <div className="contenedor-textos-main">
          <h2 class="title left">For Freelancers</h2>
          <p class="parrafo"><FaStar class="etoile"></FaStar><b style={{ color: '#2DB67C', fontSize: '20px' }}>     Showcase benefits:</b><br></br><q>Elevate your freelancing career with WorkHub’s tailored opportunities designed specifically for students. Benefit from a platform that offers flexibility and a variety of short-term projects.</q><br></br><br></br>
            <FaStar class="etoile"></FaStar><b style={{ color: '#2DB67C', fontSize: '20px' }}>     Showcase your skill:</b><br></br><q>Create a detailed profile to highlight your skills and past work, making it easier for employers to find and hire you.</q><br></br><br></br>
            <FaStar class="etoile"></FaStar><b style={{ color: '#2DB67C', fontSize: '20px' }}>     Connect with the Community:</b><br></br><q>Join a growing community of students and freelancers, sharing experiences and opportunities within a supportive environment.</q>  </p>
          <a href='/signup' id="quote" class="cta">Get Started</a>
        </div>
      </section>
      <section class="info" >
        <div class="contenedor">
          {/* <h2 class="title left" >Ismail OUKHA & Anas LAMAIIZ, <b style={{ color: 'black' }}>Developers</b></h2><br></br><br></br> */}
          <p>“WorkHub is the ultimate freelancing platform tailored for students. Discover project-based job opportunities, showcase your skills, and manage your freelance work with innovative AI-driven insights."<br></br></p>
        </div>
      </section>
      <section className="cards contenedor" id="reviews">
        <h2 className="title">Client Reviews</h2><br></br><br></br>
        <div className="content-cards">
          <article className="card">
            <div className="person-icon">
              <LazyLoadImage
                src={bakr} alt="John Doe" className="person-image" />
            </div><br></br>
            <h3>John Doe</h3>
            <p><q>I recently had the pleasure of using WorkHub. This website is a great tool for students to find jobs and post their own services.</q></p>
          </article>
          <article className="card">
            <div className="person-icon">
              <LazyLoadImage
                src={samir} alt="Rohit Sharma" className="person-image" />
            </div><br></br>
            <h3>Rohit Sharma</h3>
            <p><q>The website is also secure and provides a secure payment system. Payment is done through the website and is secure and reliable.</q></p>
          </article>
          <article className="card">
            <div className="person-icon">
              <LazyLoadImage
                src={sohaib} alt="Manas Singh" className="person-image" />
            </div><br></br>
            <h3>Manas Singh</h3>
            <p><q>Overall, I highly recommend WorkHub for freelancer students looking for jobs or services. The website is reliable, secure, and user-friendly.</q></p>
          </article>
        </div>
      </section>

      <section class="gallery">
        <div class="contenedor">
          <h2 class="title">Categories</h2><br /><br />
          <div class="gallery-cont" id="categories">
            <div class="category-item">
              <a href="/mobile-development">
                <LazyLoadImage src={mobile} alt="Mobile Development" />
                <p class="category-name">Mobile Development</p>
              </a>
            </div>
            <div class="category-item">
              <a href="/digital-marketing">
                <LazyLoadImage src={digital} alt="Digital Marketing" />
                <p class="category-name">Digital Marketing</p>
              </a>
            </div>
            <div class="category-item">
              <a href="/content-creation">
                <LazyLoadImage src={content} alt="Content Creation" />
                <p class="category-name">Content Creation</p>
              </a>
            </div>
            <div class="category-item">
              <a href="/video-editing">
                <LazyLoadImage src={video} alt="Video Editing" />
                <p class="category-name">Video Editing</p>
              </a>
            </div>
            <div class="category-item">
              <a href="/web-development">
                <LazyLoadImage src={web} alt="Web Development" />
                <p class="category-name">Web Development</p>
              </a>
            </div>
            <div class="category-item">
              <a href="/graphic-design">
                <LazyLoadImage src={design} alt="Graphic Design" />
                <p class="category-name">Graphic Design</p>
              </a>
            </div>
          </div>
        </div>
      </section>



      <section class="info-last" id="clients">
        <div class="contenedor last-section">
          <div class="contenedor-textos-main">
            <h2 class="title left">For Clients</h2>
            <p class="parrafo"><FaStar class="etoile"></FaStar><b style={{ color: '#2DB67C', fontSize: '20px' }}>     Access Top Talent:</b><br></br><q>Tap into a pool of skilled student freelancers eager to contribute to your projects, helping you achieve your business goals efficiently.</q><br></br><br></br>
              <FaStar class="etoile"></FaStar><b style={{ color: '#2DB67C', fontSize: '20px' }}>     Secure Platform:</b><br></br><q>njoy a trustworthy and user-friendly platform designed to ensure smooth and secure transactions, from posting jobs to making payments.</q><br></br><br></br>
              <FaStar class="etoile"></FaStar><b style={{ color: '#2DB67C', fontSize: '20px' }}>     Highlight potential:</b><br></br><q>Be among the first to benefit from a new platform dedicated to connecting you with skilled freelancers and fulfilling your project needs.</q> </p>
            <a href="/signup" class="cta">Get started</a>

          </div>
          <LazyLoadImage
            src={image2} alt="" />
        </div>

        <div classe="svg-wave" style={{ height: '150px', overflow: 'hidden' }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C149.99,150.00 351.77,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#6575FB' }}></path>
          </svg>
        </div>
      </section>
      <footer id="contact">
        <div class="container-footer"></div>
        <h2 class="title">Contact us</h2>
        <div className="content-cards1">
          <article className="card1">
            <div className="person-icon">
              <LazyLoadImage
                src={ismail} alt="Ismail OUKHA" className="" />
            </div><br></br>
            <h3>To be added</h3>
            <p>
              <a class="xx" href="https://github.com/KanishkaPatel26">
                <FaGithub />
              </a>
              <span style={{ marginRight: '10px' }}></span>
              <a class="xx" href="https://www.linkedin.com/in/kanishka-patel-76aaa324b/">
                <FaLinkedin />
              </a>
            </p>
          </article>
          <article className="card1">
            <div className="person-icon">
              <LazyLoadImage
                src={anas} alt="Anas Lamaiz" className="" />
            </div><br></br>
            <h3>To be added</h3>
            <p>
              <a class="xx" href="https://github.com/Shristi267">
                <FaGithub />
              </a>
              <span style={{ marginRight: '10px' }}></span>
              <a class="xx" href="https://www.linkedin.com/in/shristi-rai-980166256/">
                <FaLinkedin />
              </a>
            </p>
          </article>
        </div>
      </footer>
    </body>

  );
}

export default Landing;
