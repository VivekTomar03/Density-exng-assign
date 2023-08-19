import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const MeetSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
     
      h={"500px"}
      w={"90%"}
      m={"auto"}
      mt={"100px"}
      bgColor={"#FDD4AA"}
      mb={"50px"}
    >
      <Flex justifyContent={"space-around"} alignItems="center">
        <Box
          w={"40%"}
          mt="80px"
          ml="50px"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <Text data-aos="zoom-in">Built out of frustration</Text>
          <Heading
            fontWeight={"bold"}
            fontSize={"5xl"}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            Meet the ahead app
          </Heading>
          <Image mt={"50px"} width={"300px"} src="https://i.pinimg.com/originals/6c/ba/05/6cba052156541635baac4991b5517ab8.gif" alt="App Preview" />
        </Box>
        <Box
          w={"40%"}
          mt="250px"
          mr="50px"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <Text
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            A personalized pocket coach that provides bite-sized, science-driven
            tools to boost emotional intelligence.
          </Text>
          <Text
            fontWeight={"semibold"}
            mt={"10px"}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Think of it as a pocket cheerleader towards a better, more fulfilling.
          </Text>
        </Box>
        <Box>
          <Image w={"200px"} src="https://i.pinimg.com/originals/3c/c1/61/3cc1610a0dc2357213412f827544e3da.gif" alt="App Features" />
        </Box>
      </Flex>
    </Box>
  );
};

export default MeetSection;
