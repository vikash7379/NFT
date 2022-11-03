import React,{useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg'
import img4 from '../assets/Nfts/bighead-4.svg'
import img5 from '../assets/Nfts/bighead-5.svg'
import img6 from '../assets/Nfts/bighead-6.svg'
import img7 from '../assets/Nfts/bighead-7.svg'
import img8 from '../assets/Nfts/bighead-8.svg'
import img9 from '../assets/Nfts/bighead-9.svg'
import img10 from '../assets/Nfts/bighead-10.svg'
import ETH  from '../assets/Ethereum.svg'


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: relative;

  &>*:first-child{
    animation-duration: 20s;
  }
  &>*:last-child{
    animation-duration: 15s;
  }
`
const move = keyframes`
  0%{transform : translateX(100%)}
  100%{transform : translateX(-100%)}
`
const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move}  linear infinite ${props=>props.direction};

`
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${props=>props.theme.body};
  border-radius: 20px;
  cursor: pointer;
  background-color: #5155df;


  img{
    width: 100%;
    height: auto;
  }
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${props=>props.theme.text};
  border: 2px solid ${props=>`rgba(${props.theme.bodyRgba},0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span{
    font-size : ${props=>props.theme.fontsm};
    color: ${props=> `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem
  }
  h1{
    font-size:${props=>props.theme.fontmd};
    color:${props=>props.theme.body}
  }
`
const Price = styled.figure`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img{
    width: 1rem;
    height: auto;
  }
`;


const NftItem = ({img,number=0,price=0, passRef}) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }

  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
      <img src={img} alt='The Weirdos' />
      <Details>
        <div>
          <span>Number</span>
          <h1># {number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt='eth'/>
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section>
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={855} price={1.5} passRef = {Row1Ref} />
        <NftItem img={img2} number={212} price={2.5} passRef = {Row1Ref} />
        <NftItem img={img3} number={215} price={1.1} passRef = {Row1Ref} />
        <NftItem img={img4} number={325} price={3.5} passRef = {Row1Ref} />
        <NftItem img={img5} number={6215} price={2.8} passRef = {Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} number={155} price={5.5} passRef = {Row2Ref} />
        <NftItem img={img7} number={645} price={4.5} passRef = {Row2Ref} />
        <NftItem img={img8} number={775} price={5.0} passRef = {Row2Ref} />
        <NftItem img={img9} number={1055} price={1.5} passRef = {Row2Ref} />
        <NftItem img={img10} number={851} price={6.5} passRef = {Row2Ref} />
      </Row>
    </Section>
  )
}

export default Showcase