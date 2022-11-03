import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
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
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
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
`

const Navbar = () => {
  return (
    <>
      <Section>
        <NavBar>
        <Logo/>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Roadmap</MenuItem>
            <MenuItem>Showcase</MenuItem>
            <MenuItem>Team</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </Menu>
          <Button text="click here" link="www.google.com"/>
        </NavBar>
      </Section>
    </>
  )
}

export default Navbar