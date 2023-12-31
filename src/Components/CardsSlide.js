import React, { useEffect, useRef } from 'react';
import { Box, Card, Flex, Heading,  Text } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../app/globals.css"
const CardsSlide = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
     
      mirror: false,
      easing: 'ease-out',
    });

    const intervalId = setInterval(handleSliderMove, 1500); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  
  const handleSliderMove = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector('.slide-card');
      sliderRef.current.style.transition = 'transform 0.3s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${firstCard.offsetWidth}px)`;
      setTimeout(() => {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = 'translateX(0)';
        const firstClone = sliderRef.current.querySelector('.slide-card').cloneNode(true);
        sliderRef.current.appendChild(firstClone);
        sliderRef.current.removeChild(sliderRef.current.querySelector('.slide-card'));
      }, 300);
    }
  };

  return (
    <Box w={'90%'} m={'auto'} mt={'100px'}>
      <Flex alignItems="center">
        <Heading data-aos="fade-right">Does This Sound Familiar</Heading>
        <img
          width={'200px'}
          height={'200px'}
          src="https://i.pinimg.com/236x/34/e6/ec/34e6ec8a1f68263bdfa5c17289ab0a2b.jpg"
          alt="dddd"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </Flex>

      <Flex gap={10} className="slider" ref={sliderRef} mt="40px" p={10}>
      <Card data-aos="flip-left" className="slide-card" bgColor="#D8F2FF">
          <Text fontSize="2xl">😅</Text>
          <Text fontWeight="bold" fontSize="xl">
            Quibble with your partner
          </Text>
          <Text>
            Excuse them of doing that thing you always do, instead of staying calm and addressing their concerns.
          </Text>
        </Card>
        <Card 
         data-aos="flip-right"
        className="slide-card" bgColor="#eeebfe">
          <Text fontSize="2xl">😅</Text>
          <Text fontWeight="bold" fontSize="xl">
            You argue with a colleague
          </Text>
          <Text>
            You get angry and defensive, instead of staying open and working towards common ground.
          </Text>
        </Card>
        <Card 
         color={"white"}
        className="slide-card tilted-card" bgColor="#6341EF">
          <Text fontSize="2xl">😍</Text>
          <Text fontWeight="bold" fontSize="xl">
            You get a promotion at work
          </Text>
          <Text>
            You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting
            yourself & your abilities.
          </Text>
        </Card>
        <Card  data-aos="flip-left" className="slide-card" bgColor="#ffefd5">
          <Text fontSize="2xl">😮‍💨</Text>
          <Text fontWeight="bold" fontSize="xl">
            Quibble with your partner
          </Text>
          <Text>
            Excuse them of doing that thing you always do, instead of staying calm and addressing their concerns.
          </Text>
        </Card>
      </Flex>
     
    </Box>
  );
};

export default CardsSlide;
