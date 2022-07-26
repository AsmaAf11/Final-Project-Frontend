import React from 'react'
import Map from './map.png'
import Instaram from './instagram.png'
import Twitter from './twitter.png'
import Earth from './earth.png'
import { CDBFooter } from 'cdbreact';
import { CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Facebook from './facebook.png'

function Footer() {
  return (
    <>
    
    <CDBFooter className="shadow">

          <hr/>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={Map} width="30px" />
              <span className="ml-3 h5 font-weight-bold">Articles</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            Every thing you need to know and more,Explore sections and fined your bla bla
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Sections
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Home</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Catagories</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/signup">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/login">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <img className="Socialimg" src={Earth}/>
        
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
    </>
  )
}

export default Footer
