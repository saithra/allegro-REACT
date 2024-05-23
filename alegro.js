import React, { useState } from 'react'
import "./alegro.css"
import img from "./img5.jpg";
import img1 from "./img7.jpg";
import img2 from "./img8.jpg";
import Box from './home';
import Nav_bar from './nav_bar';


function Home() {

  return (
    <>
    <Nav_bar/>
    <div className='slide_nav'>
    <div className='box2'>
      <input type='radio' id='radio1' name='radios'></input>
      <input type='radio' id='radio2' name='radios'></input>
      <input type='radio' id='radio3' name='radios'></input>

    <div className='slide_1'>
    <div className='slide_2'>
     <img src={img} width={1263} height={800} ></img>
    <div className='allegro_news'>
    <div className='text_div'><br/><br/><br/><br/>
      <h3>ALLEGRO NEWS</h3>
      <p>Allegro outspaces retail market growth in Q3 and readies for the peak season</p>
      <button>Read More</button>
    </div>
    </div>
    </div>
    </div>

    <div className='slide_1'>
    <div className='slide_2'>
     <img src={img1} width={1263} height={800} ></img>
    <div className='allegro_news_1'>
    <div className='text_div'><br/><br/><br/><br/><br/><br/><br/><br/>
      <h3>ALLEGRO NEWS</h3>
      <p>Alegro grows strongly, improving margins and reducing leverages</p>
      <button>Read More</button>
    </div>
    </div>
    </div>
    </div>

    <div className='slide_1'>
    <div className='slide_2'>
     <img src={img2} width={1263} height={800} ></img>
    <div className='allegro_news_2'>
    <div className='text_div' id='text_div_1'><br/><br/><br/>
      <p>Alegro maintains growth and improves margins in poland during Q1,with its Allegro.CZ marketplace now up and running in Czechia</p>
      <button className='button'>Read More</button>
      </div>
    </div>
    </div>
    </div>
  <div className='manual'>
    <label for="radio1" className='manuals'></label>
    <label for="radio2" className='manuals'></label>
    <label for="radio3" className='manuals'></label>
  </div>
    </div>
{/* prev and next button */}
 <div className='prev_but'>
    <button className='prev'><i class="fa-solid fa-angle-left"></i></button>
    <button className='next'><i class="fa-solid fa-angle-right"></i></button>
  </div>
  </div>
  

  <div className='box3'>
    <div className='white_box'>
      <h2>About Allegro</h2>
      <p>For over two decades, we have been serving consumers and promoting the idea of entrepreneurship in one of the most innovative areas of the economy. We are the favorite shopping destination for Poles and the biggest e-commerce player of European origin, creating the place to do business for over 135 thousand companies, most of them small and medium enterprises. We create innovations that impact the daily lives of millions of Europeans, allowing them to shop for products they need while saving money and time.</p>
      <button className='button_1'>Read More</button>
    </div>
  </div>
 <Box/>
    </>
  )
}

 

export default Home;

