import React from 'react';
import "./investors.css";
import Nav_bar from './nav_bar';
import img from "./img_1.png";
import img_1 from "./1img.jpg";
import img_2 from "./2img.jpg";
import img_3 from "./3img.jpg";
import Footer from './footer';


function Investors() {
  return (
    <>
    <div className='nav'>
      <Nav_bar/>
    </div>
    <div className='investor_relations'>
        <div className='para'>
        <p>Investor Relations</p>
        </div>
    </div>
    <div className='box_3'>
        <ul>
            <li>Financial Result</li>
            <li>Current Reports</li>
            <li>Corporate Governance</li>
            <li>Compliance</li>
            <li>ESG</li>
            <li>Shares</li>
            <li>General Meetings</li>
        </ul>

    </div>
    <div className='box_4'>
    <div className='box_5'>
        <h3>2023</h3>
        <ul>
            <li><p className='ul'>Q3</p></li>
            <li>Result presentation</li>
            <li>Press release</li>
            <li>Selected historical consolidated financial information</li>
            <li>Financial data</li>
            <li>Result call</li>
        </ul>
    </div>
    </div>
    <div className='box_6'>
        <img src={img} width={550}></img>
    </div>
    <div className='box_7'> 
     <div className='hover_top'>
        <img src={img_1} height={205}></img>
        <div className='intro'>
            <h3>Presentation</h3>
            <button>View more</button>
        </div>
    </div>
     <div className='hover_top'>
        <img src={img_2} height={205}></img>
        <div className='intro'>
            <h3>Calendar</h3>
            <button>View more</button>
        </div>
    </div>
    <div className='hover_top'>
        <img src={img_3} height={205}></img>
        <div className='intro'>
            <h3>IR Contacts</h3>
            <button>View more</button>
      </div>
    </div>
    </div>
    <div className='box_8'>
      <Footer/>
    </div>
    </>
  )
}

export default Investors;
