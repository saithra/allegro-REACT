import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className='footer'>
      <ul>
        <h3>Who we are</h3>
        <li>At a glance</li>
        <li>In the community</li>
        <li>Meet the team</li>
      </ul>
      <ul>
        <h3>What we do</h3>
        <li>Our business model</li>
        <li>Innovation</li>
      </ul>
      <ul>
        <h3>Press office</h3>
        <li>News</li>
        <li>Archive</li>
        <li>Email alerts</li>
      </ul>
      <ul>
        <h3>Investors</h3>
        <li>Financial Results</li>
        <li>Current reports</li>
        <li>Corporate Governance</li>
        <li>Shares</li>
        <li>Presentations</li>
        <li>Calendar</li>
        <li>IR Contacts</li>
      </ul>
      <ul>
        <h3>Jobs</h3>
      </ul>
      <ul>
        <h3>Contact</h3>
      </ul>
   </footer>
   <footer className='footer_1'>
    <p>Copyright © 2023 Allegro. All rights reserved</p>
   </footer>
    </div>
  )
}

export default Footer;
