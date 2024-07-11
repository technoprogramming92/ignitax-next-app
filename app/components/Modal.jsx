const Modal = () => {
  return (
    <>
      <div
        className='modal-wrapper p-relative'
        data-background='assets/img/home-01/team/team-details-bg.png'
      >
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex={-1}
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                {/* team-details area start */}
                <div className='tm-details-wrapper p-relative'>
                  <div className='tm-details-shape-1'>
                    <img
                      src='assets/img/home-01/team/team-details-shape-1.png'
                      alt=''
                    />
                  </div>
                  <div className='tm-details-shape-2'>
                    <img
                      src='assets/img/home-01/team/team-details-shape-2.png'
                      alt=''
                    />
                  </div>
                  <div className='container'>
                    <div className='row align-items-center align-items-xxl-end'>
                      <div className='col-xl-6 col-lg-6 col-md-7'>
                        <div className='tm-details-content-wrap z-index-5'>
                          <div className='tm-details-title-box mb-20'>
                            <span className='tm-hero-subtitle'>
                              Illustrator
                            </span>
                            <h4 className='tm-details-title'>Jassica Oliver</h4>
                          </div>
                          <div className='tm-details-text'>
                            <p>
                              I'm an illustrator, working for brands. My work is
                              fuelled by my observing nature and ongoing
                              curiosity, utilizing simple shapes to tell all
                              sorts of stories. My clear signature applies to
                              both my personal work as well as my commercial
                              commissions. Among my clients are Google, The New
                              York Times, The New Yorker, Facebook, Vogue, TED
                              and Twitter. Oh and I like to paint. Which still
                              feels very new to me and slows me down.
                            </p>
                          </div>
                          <div className='tm-details-portfolio mb-50'>
                            <span className='tm-details-social-title'>
                              Portfolio:
                            </span>
                            <a href='#'>Behance</a>
                            <a href='#'>Dribbble</a>
                            <a href='#'>Meduim</a>
                          </div>
                          <div className='tm-details-social'>
                            <span className='tm-details-social-title'>
                              Follow:
                            </span>
                            <a href='#'>
                              <i className='fab fa-facebook-f'></i>
                            </a>
                            <a href='#'>
                              <i className='fab fa-twitter'></i>
                            </a>
                            <a href='#'>
                              <i className='fab fa-linkedin-in'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-6 col-lg-6 col-md-5'>
                        <div className='tm-details-thumb'>
                          <img
                            src='assets/img/home-01/team/team-details-1.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* team-details area end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
