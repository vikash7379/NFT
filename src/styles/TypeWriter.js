import React from 'react'
import styled from 'styled-components';
import Button from './Button'
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
    font-size: ${props=>props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color : ${props=>props.theme.text};
    align-self : flex-start;

    span{
        text-transform: capitalize;
        font-family: "Akaya Telivigala" ,cursive;
    };
    .text-1{
        color: blue;
    }
    .text-2{
        color:orange;
    }
    .text-3{
        color:red;
    }

    @media (max-width: 70rem) {
        font-size: ${(props)=>props.theme.fontxl};
    }
    @media (max-width : 48em){
        align-self:center ;
        text-align: center;
    }
    @media (max-width : 40em){
        width : 90%;
    }

`;

const SubTitle = styled.h3`
    font-size: ${(props)=> props.theme.fontlg};
    text-transform:capitalize;
    color: ${(props)=>`rgba(${props.theme.text},0.6)`};
    font-weight: 600;
    margin-bottom:1rem;
    width:80%;
    align-self:flex-start;

    @media (max-width :  40em) {
        font-size: ${props=>props.theme.fontmd}
    }
    @media (max-width : 48em){
        align-self:center ;
        text-align: center;
    }

`
const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    @media (max-width : 48em) {
        align-self: center;
        text-align: center;
    }
`

const TypeWriter = () => {
  return (
    <>
    <Title>Discover a new era of cool
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
        }}
    onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">NFTs.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-2">Collectible Items.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-3">Collectible Items.</span>')
    .pauseFor(2000)
    .deleteAll()
    .start()
  }}
/>
    </Title>
    <SubTitle>Bored of Apes? Try Somthing New.</SubTitle>
    <ButtonContainer>
        <Button text="Explore" link="#about" bgcolor="#202020" color="white"/>
    </ButtonContainer>
    </>
  )
}

export default TypeWriter