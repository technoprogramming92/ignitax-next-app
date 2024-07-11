const Footer = () => {
  return (
    <>
      <footer>
        {/* footer area start */}
        <div className='tp-footer-area black-bg pt-90'>
          <div className='container-fluid'>
            <div className='tp-footer-wrap'>
              <div className='row align-items-end'>
                <div className='col-xl-5 col-lg-6'>
                  <div className='tp-footer-menu menu-anim'>
                    <ul className='counter-row tp-text-anim'>
                      <li className='active'>
                        <a href='portfolio-details-1.html'>Projects</a>
                      </li>
                      <li className='active'>
                        <a href='service.html'>What we do</a>
                      </li>
                      <li className='active'>
                        <a href='about-us.html'>About</a>
                      </li>
                      <li className='active'>
                        <a href='blog-modern.html'>Blog</a>
                      </li>
                      <li className='active'>
                        <a href='contact.html'>Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-xl-5 col-lg-6'>
                  <div className='tp-footer-middle-wrap'>
                    <div className='tp-footer-content'>
                      <h4 className='tp-footer-big-title footer-big-text'>
                        Let's Contact!
                      </h4>
                    </div>
                    <div className='row'>
                      <div className='col-xl-6 col-lg-6 col-md-6'>
                        <div className='tp-footer-widget'>
                          <h4 className='tp-footer-title tp_fade_bottom'>
                            Say hello at:
                          </h4>
                          <div className='tp-footer-widget-info'>
                            <div className='tp-footer-widget-info-mail tp_fade_bottom'>
                              <a href='mailto:contact@agency.com'>
                                contact@agency.com
                              </a>
                            </div>
                            <div className='tp-footer-widget-info-location tp_fade_bottom'>
                              <a
                                href='https://www.google.com/maps/@54.581385,-101.7562167,7.5z?entry=ttu'
                                target='_blank'
                              >
                                389 Street St. <br /> San Francisco,CA
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-6 col-lg-6 col-md-6'>
                        <div className='tp-footer-widget'>
                          <h4 className='tp-footer-title tp_fade_bottom'>
                            Stalk us
                          </h4>
                          <ul className='tp-footer-widget-social'>
                            <li className='tp_fade_bottom'>
                              <a href='#'>Facebook</a>
                            </li>
                            <li className='tp_fade_bottom'>
                              <a href='#'>Instagram</a>
                            </li>
                            <li className='tp_fade_bottom'>
                              <a href='#'>Behance</a>
                            </li>
                            <li className='tp_fade_bottom'>
                              <a href='#'>Dribbble</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer area end */}

          {/* copyright area start */}
          <div className='container-fluid'>
            <div className='tp-copyright-wrap'>
              <div className='row align-items-center'>
                <div className='col-xl-6 col-md-4'>
                  <div className='tp-copyright-logo text-center text-md-start'>
                    <a href='index.html'>
                      <img src='assets/img/logo/logo-white.png' alt='' />
                    </a>
                  </div>
                </div>
                <div className='col-xl-6 col-md-8'>
                  <div className='tp-copyright-text text-center text-md-end'>
                    <p>Copyright © 2024 Themepure. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* copyright area end */}
        </div>
        {/* footer area start */}
      </footer>
    </>
  );
};
export default Footer;
