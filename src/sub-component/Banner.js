import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg'
import img4 from '../assets/Nfts/bighead-4.svg'
import img5 from '../assets/Nfts/bighead-5.svg'
import img6 from '../assets/Nfts/bighead-6.svg'
import Button from '../styles/Button'

const Section = styled.section`
    width: 100vw;
    height:25rem;
    position: relative;
    border-top: 2px solid ${props=>props.theme.text};
    border-bottom: 2px solid ${props=>props.theme.text};
    background-color: ${props=> `rgba(${props.theme.textRgba},0.9)`};
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;

    @media (max-width : 48em) {
        height:15rem;
        flex-direction: column;
    }
`
const ImgContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    img{
        width: 15rem;
        height:auto;
    }
    @media (max-width : 48em) {
        img{
        width: 10rem;
        height:auto;
    }
    }
`
const BlurContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    z-index: 10;
    height: 100%;
    width: 100%;

    backdrop-filter: blur(5px);
`
const Title = styled.h1`
    font-size: ${props=>props.theme.fontxxxl};
    color: ${props=>props.theme.body};
    padding: 1rem 2rem;
    width: 35%;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px ${props=>props.theme.text};

    @media (max-width:64em) {
        font-size: ${props=>props.theme.fontxxl};
        width: 40%;
    }
    @media (max-width:48em) {
        font-size: ${props=>props.theme.fontxl};
        width: 100%;
        padding: 2rem 2rem;
        text-align: center;
    }

`
const BtnContainer = styled.div`
    width: 35%;
    /* height: 4rem; */
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;

    @media (max-width:48em) {
        justify-content: center;
        width: 100%;
        height: 4rem;
        margin-right: 1rem;
        font-size: 1.3rem;
    }
`


const Banner = () => {
  return (
    <Section>
        <ImgContainer>
            <img src={img1} alt="The Weirdos"/>
            <img src={img2} alt="The Weirdos"/>
            <img src={img3} alt="The Weirdos"/>
            <img src={img4} alt="The Weirdos"/>
            <img src={img5} alt="The Weirdos"/>
            <img src={img6} alt="The Weirdos"/>
        </ImgContainer>
        <BlurContainer>
            <Title>Join The <br/> Big-Head NFT club</Title>
            <BtnContainer>
            <Button text="Join Now" link="#" bgcolor="white" color="black"/>
            </BtnContainer>
        </BlurContainer>

    </Section>
  )
}

export default Banner