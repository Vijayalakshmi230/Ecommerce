import React from 'react'
import './Thirdpage.css'

function Thirdpage() {
  return (
    <div className='end'>
      <div className='login'>
        <form>
          <label></label>
        </form>
      </div>
      <div className="footer-parts">
        <div className="footer-parts-h3">About</div>
        <div className="footer-parts-p">
        </div>
      </div>
      <div className="footer-parts">
        <div className="footer-parts-h4">Opening Hours</div>
        <div className="footer-parts-q">
          Mon - Thu : 7:00 AM - 10:00 PM <br />
          Friday : 7:00 AM - 11:00 PM <br />
          Sat - Sun : 7:00 AM - 11:45 PM
        </div>
      </div>
      <div className="footer-parts">
        <div className="footer-parts-h5">Our Location</div>
        <div className="footer-parts-r">
          3rd phace MG Layout,<br />
          Opp - Smaple School,<br />
          Pl Name - Free Time Learn,<br />
          Andhra Pradesh, Guntur(Dt),<br />
          India - 524002
        </div>
        <div className="footer-icons">
          <ul typeof='none'>
            <li><a href="#!"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#!"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#!"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#!"><i class="fa fa-google-plus"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Thirdpage