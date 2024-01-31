import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {

  return (
    <>
      {/*========== SCROLL TOP ==========*/}
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon" />
      </a>

      {/*========== Navbar ==========*/}
      <Navbar />

      <main className="l-main">
        {/*========== Welcome ==========*/}
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
            <div className="home__img">
              <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1706715201/Nocotine/3_i7hx8s.png" alt="" className="vert-move" />
            </div>
            <div className="home__data">
              <h1 className="home__title">Nocotine 🚭</h1>
              <p className="home__description">
                A supportive hub for those breaking free from smoking habits. We offer tools, discussions, and a caring community, fostering a positive journey toward a smoke-free life.
              </p>
            </div>
          </div>
        </section>
        {/*========== About ==========*/}
        <section className="share section bd-container" id="about">
          <div className="share__container bd-grid">
            <div className="share__data">
              <h2 className="section-title-center">
                How Nicotine was Born? <br />{" "}
              </h2>
              <p className="share__description">
                No-cotine traces its roots back to a realization – the struggle individuals face in quitting smoking lacked a comprehensive and supportive solution. Motivated by this insight, our project was conceived to bridge the gap between the challenge of nicotine addiction and the need for a holistic, empowering platform. We aspire to create a safe digital space that guides and supports individuals on their journey to a smoke-free life, ensuring that no one feels alone in their pursuit of a healthier lifestyle.
              </p>
            </div>
            <div className="share__img">
              <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1706715201/Nocotine/4_szb7nc.png" alt="" className='move-round' />
            </div>
          </div>
        </section>
        {/* ================  =================
    <section className="share section bd-container" id="learn_more">
      <div className="share__container bd-grid">
        <div className="share__data">
          <img src="./img/GDSC.png" alt="" />
        </div>
        <div className="share__img about__GDSC">
          <h2 className="section-title-center">
            About <br /> GDSC IGDTUW 🌍{" "}
          </h2>
          <p className="share__description">
            GDSC IGDTUW is a community interested in exploring new technology.
            Our club promotes various Google technologies and aims to help the
            students to nurture their passion for technology and build projects
            that positively impact the society.
          </p>
        </div>
      </div>
    </section>
    {/* =============Theme UN SDG============ */}
        {/* <section className="share section bd-container" id="theme">
      <div className="share__container bd-grid">
        <div className="share__data">
          <h2 className="section-title-center">Theme 🌟</h2>
          <p className="share__description">
            The Sustainable Development Goals or Global Goals are a collection
            of 17 interlinked global goals designed to be a "blueprint to
            achieve a better and more sustainable future for all". The SDGs were
            set up in 2015 by the United Nations General Assembly and are
            intended to be achieved by the year 2030.
          </p>
        </div>
        <div className="share__img">
          <img src="./img/SDG.png" alt="" />
        </div>
      </div>
    </section>  */}
        {/*========== CATEGORIES ==========*/}
        <section className="decoration section bd-container" id="features">
          <h2 className="section-title">Features of Nicotine</h2>
          <div className="decoration__container bd-grid">
            <div className="decoration__data">
              <img
                src="https://res.cloudinary.com/dx0dgujbj/image/upload/c_scale,h_1080,w_1080/v1706716271/Nocotine/Untitled%20design-4/2_b6coag.png"
                alt=""
                className="decoration__img"
                id="apple_render"
              />
              <h3 className="decoration__title">Reading Area</h3>
              <p>Dive into our Reading Corner – a source of inspiration, success stories, and expert insights. Let these words guide you on your journey to a smoke-free life.</p><br></br>
              {/*<a href="./view/designsolve.html" class="button button-link">Details</a>*/}
              <div className="button">
                <a
                  href="./readingArea"
                  className="button-link"
                  style={{ color: "white" }}
                >
                  Try Here
                </a>
              </div>
            </div>
            <div className="decoration__data">
              <img
                src="https://res.cloudinary.com/dx0dgujbj/image/upload/c_scale,w_1920/v1706715201/Nocotine/5_tn1tld.png"
                alt=""
                className="decoration__img"
                id="burger_render"
              />
              <h3 className="decoration__title">Smoke-Free Tracker</h3>
              <p>Visualize progress with an intuitive heatmap and streak counter.ecord daily feelings through audio journaling for a holistic approach.</p><br></br>
              <div className="button">
                <a
                  href="https://prydebot.streamlit.app/"
                  target="_blank"
                  className="button-link"
                  style={{ color: "white" }}
                >
                  Try Here
                </a>
              </div>
            </div>
            <div className="decoration__data">
              <img
                src="https://res.cloudinary.com/dx0dgujbj/image/upload/c_scale,h_1080,w_1080/v1706716271/Nocotine/Untitled%20design-4/1_ylvtm5.png"
                alt=""
                className="decoration__img"
                id="milk_render"
              />
              <h3 className="decoration__title">Hypnotherapy Sessions</h3>
              <p>Immerse yourself in transformative audio sessions designed to aid in quitting smoking.
                Holistic support for mental and emotional well-being on your quit journey. </p><br></br>
              <div className="button">
                <a
                  href="./view/hacksolve.html"
                  className="button-link"
                  style={{ color: "white" }}
                >
                  Try Here
                </a>
              </div>
              {/*<div 
                    class="apply-button" 
                    data-hackathon-slug="hack-n-solve" 
                    data-button-theme="light"
                    style="height: 44px; width: 312px"
                  ></div>*/}
            </div>
          </div>
        </section>

        {/* Team */}
        <section class="decoration section bd-container" id="team">
          <h2 class="section-title">Team</h2>
          <div class="decoration__container bd-grid team-grid">
            {/* <div class="decoration__data team_data">
              <img src="https://hygenie-gsc.netlify.app/img/Team/pooja_gera.jpg" alt="" class="decoration__img" id="team_render" />
              <h3 class="decoration__title">Pooja Gera</h3>
              <p>I speak Python &#128013; and I love solving problems with technology &#129302;.</p>
            </div> */}
            <div class="decoration__data team_data">
              <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1687075071/WhatsApp_Image_2023-06-18_at_1.24.29_PM_d7tjzm.jpg" alt="" class="decoration__img" id="team_render" />
              <h3 class="decoration__title">Sneha Chauhan</h3>
              <p>Empowering Minds, Elevating Lives: The Optimistic Developer 🚀</p>
            </div>
            <div class="decoration__data team_data">
              <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1689487397/WhatsApp_Image_2023-07-16_at_10.40.05_AM_h2qwva.jpg" alt="" class="decoration__img" id="team_render" />
              <h3 class="decoration__title">Akanksha Jha</h3>
              <p>I transform challenges into digital solutions and development is my escape. &#128161;&#x2728;</p>
            </div>
            <div class="decoration__data team_data">
              <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1706717813/Nocotine/Screenshot_2024-01-31_214621_trw5mh.png" alt="" class="decoration__img" id="team_render" />
              <h3 class="decoration__title">Aditya</h3>
              <p>I think creatively to build sustainable technological solutions! &#128176;</p>
            </div>
          </div>
        </section>

        {/*========== FOOTER (Socials) ==========*/}
        <section className="footer " id="contact_us">
          <div className="footer__container bd-container bd-grid">
            <div className="footer__social">
              <h2 className="footer__title" style={{ color: "white" }}>
                Built with &#129293; by Team Nocotine
              </h2>
              <div className="footer__icons">
                <a
                  href="https://www.instagram.com/gdsc_igdtuw/"
                  className="footer__logo"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://twitter.com/gdsc_igdtuw" className="footer__logo">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dscigdtuw/mycompany/"
                  className="footer__logo"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="https://www.youtube.com/c/DSCIGDTUW"
                  className="footer__logo"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*========== SCROLL REVEAL ==========*/}
      {/*========== MAIN JS ==========*/}
      {/* Timeline.js */}
      {/* Sponsors */}
    </>

  )
}

export default Home