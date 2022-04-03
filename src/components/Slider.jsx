import styled from 'styled-components'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import { useState } from 'react'
import { sliderItems } from '../data'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in-out;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`

const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide key={item.id}>
            <ImageContainer>
              <Image src={item.src} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Buy</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
