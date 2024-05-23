import React from 'react';
import "./job.css";
import img_2 from "./img_2.svg";
import img_3 from "./jobimg.webp"

function Job() {
  return (
    <>
    <div className='job_nav'>
    <img src={img_2} height={100} width={230} className='img'></img>
    <button className='job_but'>Browse job offers</button>
    <p className='job_para'><a href=''>EN</a> <i className="fa-solid fa-angle-down"></i></p>
   <div className='job_ul'>
    <ul>
        <li><a href=''>About us</a> <i className="fa-solid fa-angle-down"></i></li>
        <li><a href=''>Find your team</a> <i className="fa-solid fa-angle-down"></i></li>
        <li><a href=''>Benefits</a></li>
        <li><a href=''>Development opportunities</a></li>
        <li><a href=''>Blog</a></li>
    </ul>
    </div>
    <div className='img_box'>
    <img src={img_3} width={1263} height={500} ></img>
    </div>
    </div>
    </>
  )
}

export default Job;
