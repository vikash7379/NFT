import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg'
import img4 from '../assets/Nfts/bighead-4.svg'
import img5 from '../assets/Nfts/bighead-5.svg'
import img6 from '../assets/Nfts/bighead-6.svg'
import img7 from '../assets/Nfts/bighead-7.svg'
import img8 from '../assets/Nfts/bighead-8.svg'
import ConfettiComponent from '../sub-component/Confetti';


const Section = styled.section`
  /* min-height: 100vh; */
  height: 100%;
  width: 100vw;
  background-color: ${props=>props.theme.body};
  position: relative;
`
const Title = styled.h1`
  font-size: ${(props)=>props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props=>props.theme.text};
  text-align: center;
  margin: 1rem auto;
  width: fit-content;
  border-bottom: 2px solid ${props=>props.theme.text};

  @media (max-width : 40em) {
    font-size: ${props=>props.theme.fontxl};
  }
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width : 64em) {
    width: 80%;
  }
  @media (max-width :48em) {
    width: 90%;
    justify-content: center;
  }

`
const Item = styled.div`
  width: calc(20rem-4vw);
  margin: 2rem 1rem;
  padding: 1rem 0;
  position: relative;
  color: ${props=>props.theme.body};
  border:2px solid ${props=>props.theme.text};
  border-radius: 20px;
  z-index: 5;

  backdrop-filter: blur(4px);

  &:hover{
    img{
      transform: translateY(-2rem) scale(1.2);

    }
  }

  @media (max-width : 64em) {
    width: 12rem;
  }

`
const ImgContainer = styled.div`
  width: 10rem;
  margin: 0 1rem;
  background-color: ${props=>props.theme.carouselColor};
  border-radius: 20px;
  cursor: pointer;
  /* border: 1px solid; */

  img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }

`
const Name = styled.div`
  font-size: ${props=>props.theme.fontlg};
  text-align: center;
  text-transform: uppercase;
  color: ${props=>props.theme.text};
  margin-top: 1rem;
`
const Position = styled.h2`
  font-size: ${props=>props.theme.fontmd};
  text-align: center;
  text-transform: capitalize;
  color:${props=>`rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`

const MemberComponent = ({img, name=" " , position=" "}) => {
  return(
    <Item>
      <ImgContainer>
        <img src={img} alt={name}/>
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <>
      <Section id="team">
        <ConfettiComponent/>
        <Title>Team</Title>
        <Container>
          <MemberComponent img={img1} name="sky Blaze" position='founder'/>
          <MemberComponent img={img2} name="magnum" position='Director'/>
          <MemberComponent img={img3} name="Monkey King" position='Manager'/>
          <MemberComponent img={img4} name="Black panther" position='Creative Artist'/>
          <MemberComponent img={img5} name="Monk" position='Graphic designer'/>
          <MemberComponent img={img6} name="Banana" position='Blockchain Specialist'/>
          <MemberComponent img={img7} name="cyber Punk" position='Web3 developer'/>
          <MemberComponent img={img8} name="lazy Cong" position='Social Media'/>
        </Container>
      </Section>
    </>
  )
}

export default Team