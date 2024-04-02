export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hello, I'm Chris</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Software</span>{" "}
              <br />
              Engineer
            </h1>
            <p className="hero--section-description">
              I love building captivating software applications and
              <br /> being a life long learner!
            </p>
          </div>
          <a href="mailto:cdevalme@gmail.com"><button className="btn btn-primary btn-hero">Contact Me</button></a>
        </div>
        <div className="hero--section--img">
        <img src="./img/hero_img-2(1).png" alt="Hero Section"/>
        </div>
      </section>
    );
  }