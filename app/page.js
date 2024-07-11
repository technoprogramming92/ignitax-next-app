"use client";
import PreLoader from "./components/PreLoader";
import Offcanvas from "./components/Offcanvas";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Main1 from "./components/Main1";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className='tp-magic-cursor'>
      {/* <PreLoader /> */}
      {/* <!-- Begin magic cursor  
   ======================== --> */}
      <div id='magic-cursor'>
        <div id='ball'></div>
      </div>
      {/* <!-- End magic cursor --> */}
      {/* tp-offcanvus-area */}
      <Offcanvas />
      <Header />
      <Modal />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <Main1 />
          <Footer />
        </div>
      </div>
      <div className='tp-footer-shape-wrap z-index-5 smooth'>
        <a href='contact.html'>
          <div className='tp-footer-shape p-relative'>
            <img
              className='img-1'
              src='assets/img/home-01/footer/footer-circle-shape-1.png'
              alt=''
            />
            <img
              className='img-2'
              src='assets/img/home-01/footer/footer-circle-shape-2.png'
              alt=''
            />
            <span></span>
          </div>
        </a>
      </div>
    </div>
  );
}
