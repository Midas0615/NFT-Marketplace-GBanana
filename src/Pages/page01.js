import React, { Component } from 'react';
import styled from 'styled-components';
import Gs from './../Theme/globalStyles';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import LogoV from '../Assets/images/logo-vertical.png'
import UserImg from '../Assets/images/user.png'
import LockImg from '../Assets/images/lock.png'
import MoonImg from '../Assets/images/moon.png'
import ProductImg1 from '../Assets/images/image1.jpg'
import ProductImg2 from '../Assets/images/image2.jpg'
import ProductImg3 from '../Assets/images/image3.jpg'
import ProductImg4 from '../Assets/images/image4.jpg'
import ProductImg5 from '../Assets/images/image5.jpg'
import SearchSection from '../Component/SearchSection'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


class Page01 extends Component {
  render() {
    return (
      <>
      <SearchSection />
      <div>
        <Main>
          <Gs.Container>
            <HomeSigninform>
              <img src={LogoV} alt="" className="logo" />
              <h3>Sign In</h3>
              <FormGroup>
                <img src={UserImg} alt="" />
                <input type="text" placeholder="Enter email or username" />
              </FormGroup>
              <FormGroup>
                <img src={LockImg} alt="" />
                <input type="password" placeholder="Password" />
              </FormGroup>
              <FormBottom>
                <label class="container">
                  <input type="checkbox" />Remeber me
                  <span class="checkmark"></span>
                </label>
                <Link to='/' className="f-password">forgot password ?</Link>
              </FormBottom>
              <Gs.YellowButton><Link to='/'>Log In</Link></Gs.YellowButton>
              <p>Don't have an account ? <Link to='/sign-up'>Sign up now</Link></p>
            </HomeSigninform>
            <Trending>
              <Gs.MainTitle>Trending</Gs.MainTitle>
              <CarouselCategoryName>
                <p>Top Digital Art</p>
              </CarouselCategoryName>
              <Carousel responsive={responsive} infinite={true}>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>201</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg1} alt="" />
                  </div>
                  <p className="props">0.005 ETH  |  98 of 100</p>
                  <p className="des">Psycho Mountains</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer active"><img src={MoonImg} alt="" /></div>
                    <p>50</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg2} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">Is the future here?</p>
                  <p className="des2"><span>Place a bid</span></p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>140</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg3} alt="" />
                  </div>
                  <p className="props">0.032 ETH | 10 of 20</p>
                  <p className="des">Loopring (A1)</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>20</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg4} alt="" />
                  </div>
                  <p className="props">0.032 ETH | 10 of 20</p>
                  <p className="des">Crypto Zombie Official. Gen..</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>425</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg5} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">The Wizards Common Room</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer active"><img src={MoonImg} alt="" /></div>
                    <p>50</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg2} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">Is the future here?</p>
                  <p className="des2"><span>Place a bid</span></p>
                </div>
              </Carousel>
              <Gs.YellowButton className="slider-button"><Link to='/'>View All<i class="fas fa-angle-right"></i></Link></Gs.YellowButton>
            </Trending>
          </Gs.Container>
          <hr/>
          <Gs.Container>
          <Trending>
              <CarouselCategoryName>
                <p>Top Music</p>
              </CarouselCategoryName>
              <Carousel responsive={responsive} infinite={true}>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>201</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg1} alt="" />
                  </div>
                  <p className="props">0.005 ETH  |  98 of 100</p>
                  <p className="des">Psycho Mountains</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer active"><img src={MoonImg} alt="" /></div>
                    <p>50</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg2} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">Is the future here?</p>
                  <p className="des2"><span>Place a bid</span></p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>140</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg3} alt="" />
                  </div>
                  <p className="props">0.032 ETH | 10 of 20</p>
                  <p className="des">Loopring (A1)</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>20</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg4} alt="" />
                  </div>
                  <p className="props">0.032 ETH | 10 of 20</p>
                  <p className="des">Crypto Zombie Official. Gen..</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>425</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg5} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">The Wizards Common Room</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer active"><img src={MoonImg} alt="" /></div>
                    <p>50</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg2} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">Is the future here?</p>
                  <p className="des2"><span>Place a bid</span></p>
                </div>
              </Carousel>
              <Gs.YellowButton className="slider-button"><Link to='/'>View All<i class="fas fa-angle-right"></i></Link></Gs.YellowButton>
            </Trending>
          </Gs.Container>
          <hr/>
          <Gs.Container>
          <Trending>
              <CarouselCategoryName>
                <p>Top Sports</p>
              </CarouselCategoryName>
              <Carousel responsive={responsive} infinite={true} >
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>201</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg1} alt="" />
                  </div>
                  <p className="props">0.005 ETH  |  98 of 100</p>
                  <p className="des">Psycho Mountains</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer active"><img src={MoonImg} alt="" /></div>
                    <p>50</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg2} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">Is the future here?</p>
                  <p className="des2"><span>Place a bid</span></p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>140</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg3} alt="" />
                  </div>
                  <p className="props">0.032 ETH | 10 of 20</p>
                  <p className="des">Loopring (A1)</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>20</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg4} alt="" />
                  </div>
                  <p className="props">0.032 ETH | 10 of 20</p>
                  <p className="des">Crypto Zombie Official. Gen..</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>425</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg5} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">The Wizards Common Room</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer active"><img src={MoonImg} alt="" /></div>
                    <p>50</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg2} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">Is the future here?</p>
                  <p className="des2"><span>Place a bid</span></p>
                </div>
              </Carousel>
              <Gs.YellowButton className="slider-button"><Link to='/'>View All<i class="fas fa-angle-right"></i></Link></Gs.YellowButton>
            </Trending>
          </Gs.Container>
          <hr/>
          <Gs.Container>
          <Trending>
              <CarouselCategoryName>
                <p>Top Collectibles</p>
              </CarouselCategoryName>
              <Carousel responsive={responsive} infinite={true} >
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>201</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg1} alt="" />
                  </div>
                  <p className="props">0.005 ETH  |  98 of 100</p>
                  <p className="des">Psycho Mountains</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer active"><img src={MoonImg} alt="" /></div>
                    <p>50</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg2} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">Is the future here?</p>
                  <p className="des2"><span>Place a bid</span></p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>140</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg3} alt="" />
                  </div>
                  <p className="props">0.032 ETH | 10 of 20</p>
                  <p className="des">Loopring (A1)</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>20</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg4} alt="" />
                  </div>
                  <p className="props">0.032 ETH | 10 of 20</p>
                  <p className="des">Crypto Zombie Official. Gen..</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer"><img src={MoonImg} alt="" /></div>
                    <p>425</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg5} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">The Wizards Common Room</p>
                  <p className="des2"><span>Highest bid</span> 0.021 WETH</p>
                </div>
                <div className="Item">
                  <div className="Item-top">
                    <div className="image-outer active"><img src={MoonImg} alt="" /></div>
                    <p>50</p>
                  </div>
                  <div className="Item-middle">
                    <img src={ProductImg2} alt="" />
                  </div>
                  <p className="props">0.1 ETH | 20 of 40</p>
                  <p className="des">Is the future here?</p>
                  <p className="des2"><span>Place a bid</span></p>
                </div>
              </Carousel>
              <Gs.YellowButton className="slider-button"><Link to='/'>View All<i class="fas fa-angle-right"></i></Link></Gs.YellowButton>
            </Trending>
          </Gs.Container>

        </Main>
        </div>
      </>
    );
  }
}

// Common Style Div

const Main = styled.div`
  hr
  {
    margin:52px 0px;
    opacity: 0.1;
    border-color: #000000;
  }

`;

const HomeSigninform = styled.div`
  background-color:#fff;
  padding:35px 22px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  max-width:432px;
  width:100%;
  margin:0 auto 55px;
  text-align:center;
  position:relative;
  &:before
  {
    content:'';
    position:absolute;
    left:calc(50% - 256px);
    top:clac(50% - 256px);
    background-color:#E5E400;
    border-radius:50%;
    width:513px;
    height:513px;
    z-index:-1;
  }
  & .logo
  {
    margin-bottom:28px;
  }
  h3
  {
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
    font-size: 24px;
    line-height: 36px;
    font-weight:bold;
    margin-top:0px;
    margin-bottom:24px;
  }
  p
  {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-top:25px;
    margin-bottom:0px;
    a
    {
      color: #E5E400;
      &:hover
      {
        text-decoration:underline;
      }
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom:20px;
  position:relative;
  input
  {
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 3px;
    width:100%;
    height:56px;
    padding-left:51px;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.02em;
    ::placeholder {
      color: #9C9C9C;
    }
  }
  img
  {
    position:absolute;
    left:16px;
    top:16px;
  }
`;

const FormBottom = styled(Gs.Flexdiv)`
  justify-content:space-between;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #868686;
  margin-bottom:30px;
  margin-top:25px;
  a.f-password
  {
    color: #868686;
    &:hover
    {
      text-decoration:underline;
    }
  }
  label
  {
    display:block;
    position:relative;
    padding-left: 29px;
    cursor: pointer;
    input
    {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      :checked ~ .checkmark {
        background-color: #E5E400;
        border-color:#E5E400;
      }
    }
    .checkmark
    {
      position: absolute;
      top: 0;
      left: 0;
      width:19px;
      height:19px;
      background: #FFFFFF;
      border: 1px solid #D7D7D7;
      border-radius: 3px;
      :after {
        content: "";
        position: absolute;
        transform: rotate(45deg);
        left: 6px;
        top: 3px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
      }
      :checked ~ .checkmark:after {
        display: block;

      }
    }
  }
`;

const CarouselCategoryName = styled(Gs.Flexdiv)`
  justify-content:space-between;
  position:absolute;
  left:8px;
  p{
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
    margin:0px;
  }
`;

const Trending = styled.div`
  position:relative;
  :last-child
  {
    margin-bottom:70px;
  }
  .react-multi-carousel-list
  {
    padding:45px 0px;
  }
  .slider-button
  {
    padding:14px 34px;
    width: max-content;
    margin: 0 auto;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    i
    {
      font-weight: 900;
      font-size: 14px;
      line-height: 16px;
      margin-left:9px;
    }
  }
  & .react-multiple-carousel__arrow
  {
    top:0px;
    background: #E5E400;
    border-radius: 2px;
    min-width:30px;
    min-height:30px;
    opacity:1;
    :before
    {
      font-size:14px;
      color:#000;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
    }
    :hover
    {
      background-color:transparent;
      border:1px solid #E5E400;
    }
    &.react-multiple-carousel__arrow--left
    {
      left: auto;
      right: 44px;
      :before
      {
        content: "\f104";
      }
    }
    &.react-multiple-carousel__arrow--right
    {
      right:10px;
      :before
      {
        content: "\f105";
      }
    }
  }

  & .Item
  {
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    border-radius: 3px;
    padding:20px 15px 25px 20px;
    margin: 0px 8px;
    & .Item-top
    {
      display:flex;
      align-items:center;
      justify-content:flex-end;
      margin-bottom:34px;
      & .image-outer
      {
        background: #FFFFFF;
        border: 1px solid #D7D7D7;
        border-radius:50%;
        width:20px;
        height:20px;
        line-height:19px;
        text-align:center;
      }
      .active
      {
        background-color:#E5E400;
        border: 1px solid #E5E400;
      }
      p
      {
        margin:0px 0px 0px 8px;
        color:#868686;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.05em;
      }
    }
    & .Item-middle
    {
      text-align:center;
      margin-bottom:39px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 215px;
    }
    .react-multiple-carousel__arrow
    {
      top:0px;
    }
    & .props
    {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.02em;
      color: #868686;
      margin-top:0px;
      margin-bottom:3px;
    }
    & .des
    {
      font-size: 14px;
      line-height: 21px;
      font-weight:600;
      letter-spacing: 0.02em;
      color: #000000;
      margin-top:0px;
      margin-bottom:4px;
    }
    & .des2
    {
      font-size: 12px;
      line-height: 18px;
      font-weight:bold;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #000000;
      margin-top:0px;
      margin-bottom:0px;
      span
      {
        color:#E5E400;
      }
    }
  }
`;

export default Page01;
