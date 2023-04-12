import React from 'react'
import '../styles/footer.css'
import appstore from '../Images/appstore-icon-big.png'
import playstore from '../Images/playstore-icon-big.png'
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import linkedin from '../Images/linkedin.png'
import youtube from '../Images/youtube.png'


function Footer() {
  return (
    <div className='Main-footer'>
    <div className='shopNonStop'>
    <div className='footerFirst'>
    <h1>Shop Non-Stop on Meesho</h1>
    <p>Trusted by more than 1 Crore Indians
    Cash on Delivery | Free Delivery</p>
    <img className='imgfir' src={appstore}/>
    <img className='imgsec' src={playstore}/>
    
    </div>
    <div className='footerSecond'>
    <div className='containsp'>
    <p>Careers </p>
    <p>Become a supplier </p>
    <p> Hall of Fame </p>
    <p>Legal and Policies </p>
    <p>Meesho Tech Blog </p>
    <p> Notices and Returns </p>
    </div>
    </div>
    <div className='footerthird'>
    <div className='upperFoot'>
    <h2>Reach out to us</h2>
    <img src={facebook}/>
    <img src={twitter}/>
    <img src={youtube}/>
    <img src={linkedin}/>
    <h2>Contact us</h2>
    <p>Fashnear Technologies Private Limited,
    CIN: U74900KA2015PTC082263
    06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
    E-mail address: query@meesho.com
    © 2015-2022 Meesho.com</p>
    </div>
   
   

    </div>

    </div>


    </div>
   
    
   
  )
}

export default Footer