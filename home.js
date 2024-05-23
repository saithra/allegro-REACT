import React from 'react';
import "./home.css";
import Footer from './footer';



function Box() {
  return (
    <>
    <div className='body'>
    <div className='box_1'>
      <h4>Latest News</h4>

    <div className='grid'>
     <div>
      <h3>Allegro appoints Roy Perticucci to lead its growth further as the new CEO from september</h3>
     </div>
     <div>
      <h3>Allegro takes another leap to widen its international presence by finalizing the acquisition of Mall Group and WE|DO</h3>
      <p>The merger between Allegro, Mall Group, and WE|DO will strengthen the companies’ position as a leading marketplace platform for European customers and merchants, propelling the group’s international expansion. The move will improve the shopping experience and provide the broadest selection at best</p>
     </div>
     <div>
      <h3>Allegro launches CEO succession process, Francois Nuyts remains in charge until his successor is found</h3>
      <p>Allegro.eu’s Board of Directors launches a succession process for the Allegro CEO, aiming to search for the perfect candidate from within or outside the group, as Francois Nuyts continues to lead the company. The current CEO plans to stay at the helm until as long as the end of 2022 to ensure the</p>
     </div>
     <div>
      <h3>Allegro meets its raised financial expectations and sets further growth plans, as it aims at scaling its model internationally</h3>
      <p>Financial highlights Gross merchandise value (GMV), or the gross value of goods sold via Allegro, grew by 16.7% YoY to PLN 12.7bn in Q4, up by 21.3% YoY to PLN 42.6bn in all 2021 thanks to Allegro’s unparalleled offer and competitive pricing. Number of active buyers grew to 13.5m in Q4, up 2.9% YoY</p>
     </div>
    </div>
    </div>
    </div>
    <div className='black_box'><p>July 4,2022</p></div>
    <div className='black_box_1'><p>April 4,2022</p></div>
    <div className='black_box_2'><p>February 24,<br></br>2022</p></div>
    <div className='black_box_3'><p>February 24,<br></br>2022</p></div>
   <div className='last_box'>
   <Footer/>
   </div>
    </>
  )
}

export default Box;
