import Awards from "./Awards";

const { default: Brand } = require("./Brand");
const { default: Hero } = require("./Hero");
const { default: Projects } = require("./Projects");
const { default: Services } = require("./Services");
const { default: Team } = require("./Team");
const { default: Testimonials } = require("./Testimonials");

const Main1 = () => {
  return (
    <div>
      <main>
        {/* <!-- hero area start --> */}
        <Hero />
        {/* <!-- hero area end --> */}
        <div className='tp-hero-bottom-img-wrap'>
          <div className='tp-hero-bottom-img'>
            <video loop='' muted={false} autoPlay='' playsInline=''>
              <source
                src='https://html.hixstudio.net/videos/liko/liko.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>

        {/* <!-- brand area start --> */}
        <Brand />
        {/* <!-- brand area end --> */}

        {/* <!-- service area start --> */}
        <Services />
        {/* <!-- service area end --> */}

        {/* <!-- project area start --> */}
        <Projects />
        {/* <!-- project area end --> */}

        {/* <!-- award area start --> */}
        <Awards />
        {/* <!-- award area end --> */}

        {/* <!-- team area start --> */}
        <Team />
        {/* <!-- team area end --> */}

        {/* <!-- testimonial area start --> */}
        <Testimonials />
        {/* <!-- testimonial area end --> */}
      </main>
    </div>
  );
};
export default Main1;
