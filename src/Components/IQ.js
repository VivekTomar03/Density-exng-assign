import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const IQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      
      mirror: false, // Whether elements should animate out while scrolling up
      easing: "ease-out", // Easing function for animations
    });
  }, []);

  return (
    <Flex width={"90%"} m={"auto"} mt={"150px"}>
      <Box data-aos="fade-up" w={"50%"}>
        <Heading>EQ Beat IQ</Heading>
      </Box>
      <Container data-aos="fade-up" data-aos-delay="300">
        People with high emotional intelligence (EQ) live more fulfilled lives.
        They tend to be happier and have healthier relationships.
      </Container>
      <Container data-aos="fade-up" data-aos-delay="600">
        They are more successful in their pursuits and make for inspiring
        leaders. According to science, they earn $29k a year.
      </Container>
    </Flex>
  );
};

export default IQ;
