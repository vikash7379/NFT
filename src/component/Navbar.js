import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../styles/Logo'
import Button from '../styles/Button'

const Section = styled.section`
  width : 100vw;
  background-color : ${props => props.theme.body};
`
const NavBar = styled.nav`
  display : flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height:${props => props.theme.navHeight};
  margin-inline:auto ;

  .mobile{
    display: none;
  }

  @media (max-width : 1024px) {
    .desktop{
      display: none;
    }
    .mobile{
      display: inline-block;
    }
  }

`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    position: fixed;
    top: ${props=>props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    /* height: 15rem; */
    height: ${props=>`calc(100vh-${props.theme.navHeight})`};
    z-index:50;
    background-color:${props=>`rgba(${props.theme.bodyRgba},0.85)`};
    flex-direction:column;
    justify-content:center;
    backdrop-filter:blur(2px);
    transform: ${props=>props.click ? 'translateY(0)' : 'translateY(100%)'};
    transition:all 0.3s ease;
  }
`
const MenuItem = styled.li`
  margin-inline: 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;



  &::after{
    content : '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after{
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin: 1rem 0;

    &::after{
      display: none;
    }
  }
`
const HameburgerMenu = styled.span`
  width: ${props=>props.click ? '2rem' : '1.5rem'};
  height: 2px;
  background-color: ${props=>props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${props=>props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    display: flex;
    margin-top: 10px;
  }

  &::after, &::before{
    content: ' ';
    width: ${props=>props.click ? '1rem' : '1.5rem'};
    height: 2px;
    background-color: ${props=>props.theme.text};
    position: absolute;
    right: ${props=>props.click ? '-2px' : "0"};
    transition: all 0.3s ease;
  }
  &::after{
    top:${props=>props.click ? '0.3rem' : '0.5rem'};
    transform: ${props=>props.click ? 'rotate(-40deg)' : 'rotate(0)'};
  }
  &::before{
    bottom :${props=>props.click ? '0.3rem' : '0.5rem'};
    transform : ${props=>props.click ? 'rotate(40deg)' : 'rotate(0)'};
  }
`

const Navbar = () => {

  const [click,setClick] = useState(false);


  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior : "smooth",
      block : "start",
      inline : "nearest"
    })
    setClick(!click)
  }


  return (
    <>
      <Section id='navbar'>
        <NavBar>
        <Logo/>
          <HameburgerMenu click={click} onClick={() => setClick(!click)}>
            &nbsp;
          </HameburgerMenu>
          <Menu click={click}>
            <MenuItem onClick={()=> scrollTo('home')}>Home</MenuItem>
            <MenuItem onClick={()=> scrollTo('about')}>About</MenuItem>
            <MenuItem onClick={()=> scrollTo('roadmap')}>Roadmap</MenuItem>
            <MenuItem onClick={()=> scrollTo('showcase')}>Showcase</MenuItem>
            <MenuItem onClick={()=> scrollTo('team')}>Team</MenuItem>
            <MenuItem onClick={()=> scrollTo('faq')}>FAQ</MenuItem>
            <MenuItem>
              <div className='mobile'>
                <Button text="click here" link="www.google.com" bgcolor="#202020" color="white"/>
              </div>
            </MenuItem>
          </Menu>
          <div className='desktop'>
              <Button text="click here" link="www.google.com" bgcolor="#202020" color="white"/>
          </div>
        </NavBar>
      </Section>
    </>
  )
}

export default Navbar