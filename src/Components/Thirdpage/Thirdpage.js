import React from 'react'
import './Thirdpage.css'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'

function Thirdpage() {
  return (
    <div className='Page'>
      <div className="one">
        <h1>About Us</h1>
      </div>
      <div className='pic1'>
        <p className='styled-text'>We are a timepiece distributor, sales and service company.

          We commit to give total customer satisfaction by providing the widest choice of timepieces and accessories with competitive prices, uncompromised quality, and efficient service before, during and after sales, in the most convenient locations.

          We offer our employees quality of life. We give fair and competitive wages and benefits through equal opportunities and training, development and advancement.

          We treat our dealers and suppliers as our main business partners.

          We believe in protecting and sustaining each other’s interests for mutual benefit.</p>
        <img src={img1} alt="pic1" height={500} width={700} />
      </div>
      <div className='pic2'>
        <img src={img2} alt="pic2" height={500} width={700} />
        <p className='styled-text' >We are a timepiece distributor, sales and service company.

          We commit to give total customer satisfaction by providing the widest choice of timepieces and accessories with competitive prices, uncompromised quality, and efficient service before, during and after sales, in the most convenient locations.

          We offer our employees quality of life. We give fair and competitive wages and benefits through equal opportunities and training, development and advancement.

          We treat our dealers and suppliers as our main business partners.

          We believe in protecting and sustaining each other’s interests for mutual benefit.</p>
      </div>
      <div className='pic3'>
      <p className='styled-text'>We are a timepiece distributor, sales and service company.

We commit to give total customer satisfaction by providing the widest choice of timepieces and accessories with competitive prices, uncompromised quality, and efficient service before, during and after sales, in the most convenient locations.

We offer our employees quality of life. We give fair and competitive wages and benefits through equal opportunities and training, development and advancement.

We treat our dealers and suppliers as our main business partners.

We believe in protecting and sustaining each other’s interests for mutual benefit.</p>
        <img src={img3} alt="pic3" height={500} width={700} />
      </div>
      <div className='pic4'>
        <img src={img4} alt="pic4" height={500} width={700} />
        <p className='styled-text'>We are a timepiece distributor, sales and service company.

          We commit to give total customer satisfaction by providing the widest choice of timepieces and accessories with competitive prices, uncompromised quality, and efficient service before, during and after sales, in the most convenient locations.

          We offer our employees quality of life. We give fair and competitive wages and benefits through equal opportunities and training, development and advancement.

          We treat our dealers and suppliers as our main business partners.

          We believe in protecting and sustaining each other’s interests for mutual benefit.</p>
      </div>
      <div className='end'>
        <div className="footer-parts">
          <div className="footer-parts-h3">Opening Hours</div>
          <div className="footer-parts-p">
            Mon - Thu : 7:00 AM - 10:00 PM <br />
            Friday : 7:00 AM - 11:00 PM <br />
            Sat - Sun : 7:00 AM - 11:45 PM
          </div>
        </div>
        <div className="footer-parts">
          <div className="footer-parts-h3">Our Location</div>
          <div className="footer-parts-p">
            3rd phace MG Layout,<br />
            Opp - Smaple School,<br />
            Pl Name - Free Time Learn,<br />
            Andhra Pradesh, Guntur(Dt),<br />
            India - 524002
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage