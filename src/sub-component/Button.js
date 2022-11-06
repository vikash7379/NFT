import React from 'react'
import styled from 'styled-components'


const Btn = styled.button`
    display: inline-block;
    /* background-color: ${props => props.theme.text}; */
    background-color: ${props=>props.background};
    color: ${props => props.color};
    outline: none;
    border: none;
    font-size: ${props => props.theme.fontsm};
    padding: 0.8rem 2.5rem;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    transition:all 0.2s ease;

    &:hover{
        transform: scale(0.9);
    }

    &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) scale(0);
        border: 2px solid ${props => props.theme.text};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after{
        transform: translate(-50%,-50%) scale(1);
        padding: 0.3rem;
    }
`


const Button = ({text,link,bgcolor,color}) => {
  return (
    <Btn background={bgcolor} color={color}><a href={link} area-label={text} target="_blank">{text}</a></Btn>
  )
}

export default Button