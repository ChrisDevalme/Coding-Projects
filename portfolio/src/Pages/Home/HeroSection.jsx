export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--title">Hey I'm Chris</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-titile--color">
                            Full Stack{" "} 
                            <br />
                            Developer
                        </span>
                    </h1>
                    <p className="hero--section-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    </p>
                </div>
                <button className="btn btn-primary">Contact Me</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img-2(1).png" alt="Hero Section"/>
            </div>
        </section>
    )
}