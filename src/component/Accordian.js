import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    cursor: pointer;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${props=>props.theme.carouselColor};
    margin: 3rem 0;

    @media (max-width : 48em) {
        margin: 2rem 0;
    }
`
const Title = styled.div`
    font-size: ${props=>props.theme.fontsm};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Revel = styled.div`
    display: ${props=>props.clicked ? 'block' : 'none'};
    margin-top: 1rem;
    color:${props=>`rgba(${props.theme.bodyRgba},0.6)`};
    font-size:${props=>props.theme.fontsm};
`
const Name = styled.div`
    display: flex;
    align-items: center;
`
const Indicator = styled.span`
    display: flex;
    font-size: 2rem;
    font-weight: 100;
    justify-content: center;
    align-items: center;

    @media (max-width : 48em) {
        font-size: 1.5rem;

    }
`

const Accordian = ({title,children}) => {

    const [collapse,setCollapse] = useState(false);

  return (
    <Container>
        <Title onClick={()=>setCollapse(!collapse)}>
            <Name>
                <span>{title}</span>
            </Name>
            {
                collapse ? <Indicator>-</Indicator> : <Indicator>+</Indicator>
            }
        </Title>
        <Revel clicked={collapse}>
            {children}
        </Revel>
    </Container>
  )
}

export default Accordian