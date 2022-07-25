import React from 'react'
import Map from './map.png'
import Instaram from './instagram.png'
import Twitter from './twitter.png'
import Earth from './earth.png'

import Facebook from './facebook.png'

function Footer() {
  return (
    <div className="main-footer" >
        <div className="container1">
            <div className="row">
                {/* Colomn 1 */}
                <div className="col-md-3 col-sm-6">

                    <h4>Footer</h4>
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>About</li>
                        <li>Articles</li>
                       
                    </ul>
                </div>
                     {/* Colomn 2 */}
                     <div className="col-md-3 col-sm-6">

<h4>Help</h4>
<ul className="list-unstyled">
    <li>Contact us:</li>
    <li>ksmalksm</li>
   
</ul>
</div>
     {/* Colomn 4 */}
     <div className="col-md-3 col-sm-6">

<h4>Social media</h4>
<ul className="list-unstyled">
    <div className="socialmedia">
    <li><img className="Socialimg" src={Instaram}/></li>
    <li><img className="Socialimg" src={Twitter}/></li>
    <li><img className="Socialimg" src={Facebook}/></li>
    </div>
</ul>
</div>
     {/* Colomn 3 */}
     <div className="col-md-3 col-sm-6">

<h4></h4>
<ul className="list-unstyled">
    <li>
        <img className="fooerimg" src={Earth}/>
    </li>
</ul>
</div>


            </div>
            {/* Footer Bootom */}
            <div className="footer-bottom">
               <p className="text-xs-cente">
                   &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
               </p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
