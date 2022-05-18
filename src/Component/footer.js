import React from 'react'
import styled from 'styled-components'
import Gs from '../Theme/globalStyles'
import { Link } from 'react-router-dom';

import EmailImg from '../Assets/images/email.svg'

const Footer = () => {
    return (
      <FooterOuter>
        <FooterBar>
            <Gs.Container>
                <Footercolumns>
                    <Col2>
                        <h5>Profile</h5>
                        <Link to='/'>My NFTs</Link>
                        <Link to='/'>Friends</Link>
                        <Link to='/'>Messages</Link>
                        <Link to='/'>Gananas</Link>
                        <Link to='/'>Referrals</Link>
                        <Link to='/'>Activity</Link>  
                    </Col2>
                    <Col2>
                        <h5>Marketplace</h5>
                        <Link to='/'>Trending</Link>
                        <Link to='/'>Ranking</Link>
                        <Link to='/'>Top Music</Link>
                        <Link to='/'>Top Art</Link>
                        <Link to='/'>Top Sports</Link>
                    </Col2>
                    <Col2>
                        <h5>Gananas</h5>
                        <Link to='/'>About</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Suggestions</Link>
                        <Link to='/'>Contact</Link>
                    </Col2>
                    <Col6>
                        <h5>Sign Up Newsletter</h5>
                        <FooterSearchBar>
                            <img src={EmailImg} alt="" />
                            <input type="text" placeholder="Enter Email Address" />
                            <Link to='/'>Subscribe</Link>
                        </FooterSearchBar>
                        <SocialMedia>
                          <Link to='/'><i class="fab fa-facebook-f"></i></Link>
                          <Link to='/'><i class="fab fa-twitter"></i></Link>
                          <Link to='/'><i class="fab fa-instagram"></i></Link>
                          <Link to='/'><i class="fab fa-youtube"></i></Link>
                        </SocialMedia>
                    </Col6>
                </Footercolumns>
                
            </Gs.Container>
        </FooterBar>
        <CopyrightBar>
          <Gs.Container>
              <Link to='/'>© copyright 2021 </Link>
              <Link to='/'>Privacy Policy</Link>
              <Link to='/'>Terms of Service</Link>
          </Gs.Container>
        </CopyrightBar>
      </FooterOuter> 
        
    )
}


const FooterOuter = styled.div`
  
`;
const FooterBar = styled.div`
  background: #1C1C1C;
  padding:45px 0px 80px;
`;

const Footercolumns = styled(Gs.Flexdiv)`
  align-items:flex-start;
`;

const Col2 = styled.div`
  width:20%;
  h5
  {
    font-size: 16px;
    line-height: 24px;
    color:#fff;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top:0px;
    margin-bottom:25px;
  }
  a
  {
    font-size: 13px;
    line-height: 19px;
    color:rgb(255 255 255 / 70%);
    letter-spacing: 0.05em;
    display:block;
    margin-bottom:15px;
    &:last-child
    {
        margin-bottom:0px;
    }
    &:hover
    {
        color:rgb(255 255 255 / 95%);
    }
  }
`;

const Col6 = styled(Col2)`
  width:40%;
`;

const FooterSearchBar = styled.div`
  max-width:520px;
  width:100%;
  position:relative;
  input
  {
    background: #FFFFFF;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    border:none;
    border-radius: 3px;
    padding:20px 0px 20px 62px;
    width:100%;
    
    font-size:14px;
    line-height: 21px;
    letter-spacing: 0.02em;
    ::placeholder {
      color: #9C9C9C;
    }
  }
  img
  {
    position:absolute;
    left:18px;
    top:15px;
  }
  a
  {
    font-size:18px;
    line-height: 27px;
    font-weight:600;
    color:#000000;
    padding:17px 33px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    background: #E5E400;
    border-radius: 0px 3px 3px 0px;
    position:absolute;
    right:0px;
    top:0px;
  }
`;
const SocialMedia = styled(Gs.Flexdiv)`
  justify-content:flex-start;
  align-items:flex-start;
  margin-top:30px;
  a
  {
    width:40px;
    height:40px;
    line-height:40px;
    border-radius:50%;
    background-color:#3C3C3C;
    text-align:center;
    margin-right:10px;
    margin-bottom:0px;
    &:hover
    {
      background-color:#E5E400;
    }
    i
    {
      color:#fff;
      font-size:18px;
      line-height:40px;
      letter-spacing: 0.02em;
    }
  }
`;

const CopyrightBar = styled.div`
  background: #363636;
  padding:13px 0px;
  text-align:center;
  a
  {
    font-size: 14px;
    font-weight:400;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-right: 28px;
    position:relative;
    &:after
    {
      content:'';
      position:absolute;
      right:-14px;
      top:3px;
      background-color:#fff;
      width:1px;
      height:14px;
    }
    &:last-child:after
    {
      display:none;
    }
    &:hover
    {
      color:rgb(255 255 255 / 70%);
    }
  }
`;

export default Footer