



import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const Slider = styled(Box)`
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
`;

const LeftClick = styled(Button)`
  position: left;
  font-size: 1.5rem;
  color: #000;
  margin-right: 20px;
  cursor: pointer;
  background: #8ADAB2;
  borderColor: #8ADAB2;
  user-select: none;
`
const RightClick = styled(Button)`
  position: right;
  font-size: 1.5rem;
  color: #000;
  margin-left:20px; 
  cursor: pointer;
  background: #8ADAB2;
  borderColor: #8ADAB2;
  user-select: none;

`



const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }; 

  return (
    <Slider>
      <LeftClick  onClick={prevSlide}>
        <IconWrapper>
          <KeyboardArrowLeftIcon />
        </IconWrapper>
      </LeftClick>
      {items.map((item, index) => (
        <image
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          {index === currentIndex && <img src={item.imageUrl} alt={item.alt} style={{width:'1000px', height:'600', borderRadius: '10px'}} />}
        </image>
      ))}
      <RightClick onClick={nextSlide}>
        <IconWrapper>
          <KeyboardArrowRightIcon />
        </IconWrapper>
      </RightClick>
    </Slider>
  );
};

export default Carousel;


