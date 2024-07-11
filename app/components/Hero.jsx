const Hero = () => {
  return (
    <>
      <div className='tp-hero-area tp-hero-ptb main-slider'>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-xxl-12'>
              <div className='tp-hero-title-wrap mb-35 p-relative'>
                <div className='tp-hero-shape-1'>
                  <img
                    src='assets/img/home-01/hero/hero-bg-shape-1-1.svg'
                    alt=''
                  />
                </div>
                <div className='tp-hero-title-box text-center'>
                  <h1 className='tp-hero-title tp_fade_bottom'>
                    <span className='p-relative'>
                      Creative
                      <span className='tp-hero-subtitle d-none d-lg-block '>
                        Hello <br /> People! We’re
                      </span>
                      <span className='tp-hero-shape-2 d-none d-md-block'>
                        <img
                          src='assets/img/home-01/hero/hero-shape-1-1.png'
                          alt=''
                        />
                      </span>
                    </span>
                    <br />
                    Digital
                    <span className='tp-hero-title-img'>
                      <img
                        className='tp-zoom-img'
                        src='assets/img/home-01/hero/hero-1-1.png'
                        alt=''
                      />
                    </span>
                    Studio
                  </h1>
                </div>
              </div>
              <div className='tp-hero-content tp_fade_bottom'>
                <p>
                  <span></span>
                  Global digital design studio partnering with brands and
                  businesses that create exceptional experiences. We are design
                  and development agency based in Netherland.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
