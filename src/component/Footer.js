import React from "react";
import styled from "styled-components";
import Banner from "../styles/Banner";
import Logo from "../styles/Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/LinkedIn";
import Twitter from "../Icons/Twitter";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;

  @media (max-width : 500px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const Left = styled.div`
  display: flex;
  min-width: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width:500px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2 ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width:500px) {
    width: 100%;
    margin-top: 1rem;
    justify-content: space-around;
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width:500px) {
    width: 100%;
    margin-bottom: 1rem;
    place-items: center;
  }

`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  @media (max-width : 400px) {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  span{
    @media (max-width : 500px) {
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  }

`;

const Footer = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior : "smooth",
      block : "start",
      inline : "nearest"
    })
  }

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("roadmap")}>Roadmap</Item>
          <Item onClick={() => scrollTo("showcase")}>Showcase</Item>
          <Item onClick={() => scrollTo("team")}>Team</Item>
          <Item onClick={() => scrollTo("faq")}>FAQ</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Vikash Club. All Right Reserved
        </span>
        <span>Made with &#10084; by Vikash</span>
      </Bottom>
    </Section>
  );
};

export default Footer;
