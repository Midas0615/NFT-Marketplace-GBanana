import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImg from '../Assets/images/logo.png';
import ProfileUser from '../Assets/images/profile-user.png';
import SNFTM from '../Assets/images/social-NFT-marketplace.png';
import SearchImg from '../Assets/images/search.png';

const SearchSection = () => {
  return (
    <Breadcrumb>
      <Breadmenubar>
        <Link to='/'>Explore</Link>
        <Link to='/'>Art</Link>
        <Link to='/'>Music</Link>
        <Link to='/'>Entertainment</Link>
        <Link to='/'>Sports</Link>
        <Link to='/'>Collectibles</Link>
        <Link to='/'>Documents</Link>
        <Link to='/'>Gaming</Link>
        <Link to='/'>Activity</Link>
      </Breadmenubar>
      <BreadLogo>
        <img src={SNFTM} alt='' />
      </BreadLogo>
      <Breadsearchbar>
        <img src={SearchImg} alt='' />
        <input
          type='text'
          placeholder='Go Bananas! Search items, collections, and accounts'
        />
        <Link to='/'>Search</Link>
      </Breadsearchbar>
    </Breadcrumb>
  );
};

const HeaderBar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 100;
  padding: 15px 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const Logo = styled.a`
  margin: 0 auto 0 0;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #000000;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    padding: 0px 25px;
    &:hover {
      color: #e5e400;
    }
  }
`;

const CreateButton = styled.div`
  padding-left: 34px;
  position: relative;

  &:before {
    content: '';
    background-color: rgba(0, 0, 0, 0.06);
    position: absolute;
    left: 0px;
    top: -29px;
    width: 1px;
    height: 82px;
  }
  a {
    background: #e5e400;
    border: 2px solid #e5e400;
    border-radius: 3px;
    padding: 12px 43px;
    &:hover {
      color: #e5e400;
      background-color: #fff;
    }
  }
`;
const Userdropdown = styled.div`
  margin-left: 22px;
`;
const Breadcrumb = styled.div`
  background-color: #fdfef0;
  position: relative;
  top: 82px;
`;
const Breadmenubar = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(0 0 0 / 10%);
  padding: 20px 0px;
  a {
    color: #000000;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    padding: 0px 21px;
    &:hover {
      color: #e5e400;
    }
  }
`;

const BreadLogo = styled.div`
  margin: 30px auto;
  text-align: center;
`;

const Breadsearchbar = styled.div`
  text-align: center;
  position: relative;
  max-width: 869px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 55px;
  input {
    background: #ffffff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 3px;
    padding: 20px 0px 20px 51px;
    width: 100%;

    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.02em;
    ::placeholder {
      color: #9c9c9c;
    }
  }
  img {
    position: absolute;
    left: 18px;
    top: 20px;
    cursor: pointer;
  }
  a {
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    color: #000000;
    padding: 18px 46px 17px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    background: #e5e400;
    border-radius: 0px 3px 3px 0px;
    position: absolute;
    right: 0px;
    top: 0px;
  }
`;

export default SearchSection;
