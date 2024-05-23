import React from 'react';
import "./contact.css";
import Nav_bar from './nav_bar';
import Footer from './footer';


function Contact() {
  return (
    <>
    <div className='nav'>
      <Nav_bar/>
    </div>
    <div className='investor_relations'>
        <div className='para'>
        <p>Contact</p>
        </div>
    </div>
    <div className='para_1'>
        <p>Allegro.eu SA., Allegro Sp. z o.o., Ceneo.pl Sp. z o.o., eBilet Polska Sp. z o.o., Allegro Finance Sp. z o.o., Allegro Pay Sp. z o.o. OpenNet.pl Sp. z o.o. Internet Mall a.s., Internet Mall Slovakia a.s., Netretail sp. z o.o., Internet Mall Hungary Kft., m-HU Internet Kft., MIMOVRSTE, spletna trgovina, d.o.o., Internet Mall d.o.o., CZC.cz s.r.o. WE|DO CZ s.r.o, WE|DO SK s.r.o “SkyNet Custom Brokers” Sp. z o.o. belong to one group.</p>
    </div>
    <div>
        <ul className='need_help'>
            <li>
            <h2>Need help?</h2>
            <p><a href=''>Allegro Help Center </a></p>
            </li>
            <li>
            <h2>We are socially responsible </h2>
            <p>Check our<a href=''> Corporate Social Responsibility Report</a></p>
            </li>
            <li>
            <h2>Do you want to join us?</h2>
            <p>Check current job offers at<a href=''> Allegro</a>,<a href=''> Ceneo</a> or in <a href=''>eBilet Polska</a>!</p>
            </li>
            <li>
            <h2>Do you want to do business with us?</h2>
            <p>Selling with<a href=''> Allegro</a> and<a href=''> Ceneo </a>is easy</p>
            </li>
            <li>
            <h2>Do you want to be Allegro's vendor?</h2>
            <p>Please fill the<a href=''> form</a> to become our vendor</p>
            </li>
            <li>
            <h2>Media contact</h2>
            <p>Allegro:<a href=''> prasa@allegro.pl </a></p>
            <p><a href=''>Allegro Press Office </a></p>
            </li>
        </ul>
        <ul className='need_help_1'>
            <li>
            <h2>Contact for analysts and investors:</h2>
            <p><a href=''>ir@allegro.eu </a></p>
            </li>
            <li>
            <h2>Information about Allegro.eu</h2>
            <p>Allegro.eu société anonyme, incorporated and existing under the laws of Luxembourg, with its registered office currently at 1, rue Hildegard von Bingen, L-1282 Luxembourg, Grand Duchy of Luxembourg, registered with the Luxembourg Trade and Companies Register (Registre de Commerce et des Sociétés, Luxembourg) under number B214830.</p>
            </li>
            <li>
            <h2>Correspondence address</h2>
            <p>Allegro.eu SA</p>
            <p>1, rue Hildegard von Bingen</p>
            <p>L-1282 Luxembourg</p>
            </li>
            <li>
                <h2>Information about the company operating Allegro.pl and Allegrolokalnie.pl platforms</h2>
                <p>Allegro Sp. z o.o. with its registered office in Poznań, at ul. Wierzbięcice 1B, 61-569 Poznań, entered into the register of entrepreneurs kept by the District Court Poznań - Nowe Miasto and Wilda in Poznań, 8th Commercial Division of the National Court Register under KRS number: 0000635012, share capital: PLN 40 000 000 with a tax identification number NIP 525-26-74-798, REGON 365331553</p>
            </li>
            <li>
                <h2>Correspondence address</h2>
                <p>Allegro Sp. z o.o.</p>
                <p>ul. Wierzbięcice 1B</p>
                <p>61-569 Poznań</p>
            </li>
            <li>
                <h2>Data Protection Officer</h2>
                <p>Michał Wierucki</p>
                <p>ul. Wierzbięcice 1B, 61-569 Poznań, Poland</p>
                <p>e-mail:<a href=''> iod@allegro.pl</a></p>
            </li>
        </ul>
    </div>
    <div className='box_8'>
      <Footer/>
    </div>
    </>
  )
}

export default Contact
