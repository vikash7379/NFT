import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Carousel from "../sub-component/Carousel";
import Button from "../sub-component/Button";
import { dark } from "../sub-component/Theme";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  /* color: ${(props) => props.theme.body}; */
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width : 70em) {
    width: 85%;
  }

  @media (max-width : 64em) {
    width: 100%;
    flex-direction: column;

    &>*:last-child{
      width: 80%;
    }
  }
  @media (max-width : 40em) {

    &>*:last-child{
      width: 90%;
    }
  }

`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width : 40em){
    min-height: 50vh;
  }

`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;


  @media (max-width : 64em){
    width: 100%;
    text-align: center;
  }
  @media (max-width : 40em){
    font-size: ${props=>props.theme.fontxl};

  }
  @media (max-width : 30em){
    font-size: ${props=>props.theme.fontxl};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width : 64em){
    width: 100%;
    text-align: center;
    font-size: ${props=>props.theme.fontsm};
  }
  @media (max-width : 40em){
    font-size: ${props=>props.theme.fontsm};
  }
  @media (max-width : 30em){
    font-size: ${props=>props.theme.fontxs};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  align-self: flex-start;

  @media (max-width :60em){
    width: 100%;

  button{
    margin: 0 auto;
  }
}
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>Welcome To The Big Head NFT Club.</Title>
          <SubText>
            The Big-Head NFT CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
          <ThemeProvider theme={dark}>
            <ButtonContainer>
              <Button text="JOIN OUR GitHub" link="#" />
            </ButtonContainer>
          </ThemeProvider>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
