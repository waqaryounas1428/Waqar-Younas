import pic2 from "../images/2.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home">
      <div className="hero-container">
        <div className="content-wrapper">
          <div className="hero-left">
            <div className="name-title">
              <p className="name scroll-effect">
                <span className="hello">Hello, I'm</span><br />
                <span className="user-name">WAQAR YOUNAS</span><br />
                <span className="titles">Full Stack MERN Developer</span>
              </p>
            </div>

            <div className="intro scroll-effect">
              <p>
                I build digital solutions that turn ideas into real-world products.
                <br />
                As a <span className="highlight">Full Stack Developer</span>, I focus on creating clean, 
                scalable, and reliable software that solves real problems and delivers a meaningful user experience.
                <br />
              </p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-images-container scroll-effect">
              <div className="hero-image-card">
                <img 
                  src={pic2} 
                  alt="Waqar Younas - Full Stack Developer Profile"
                  className="hero-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
