import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Circle,
  Heading,

} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../app/globals.css"
const Improvement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,

      mirror: false,
      easing: "ease-out",
    });
  }, []);

  const points = [
    {
      heading: "It's not as easy as 1-2-3.",
      text: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
    {
      heading: "It's not as easy as 1-2-3.",
      text: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
    {
      heading: "It's not as easy as 1-2-3.",
      text: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
    {
      heading: "It's not as easy as 1-2-3.",
      text: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
    {
      heading: "It's not as easy as 1-2-3.",
      text: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
    {
      heading: "It's not as easy as 1-2-3.",
      text: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
  ];

  return (
    <Box w={"90%"} m={"auto"} mt={"100px"}>
      <Box>
        <Flex alignItems={"center"} gap={5}>
          <Box>
            <Text data-aos="fade-right">
              Wrong with self-improvement & how we're fixing it.
            </Text>
            <Heading data-aos="fade-up">Self-improvement. Ugh.</Heading>
          </Box>
          <img
            data-aos="fade-left"
            width={200}
            height={200}
            src="https://i.pinimg.com/originals/19/e9/01/19e9016cd1b0d385ddfa2d9e9672e02e.gif"
            alt="alternative"
          />
        </Flex>
      </Box>

      <VStack
        data-aos="fade-up"
        className="scrolling1"
       
        overflowY={"scroll"}
        h={"400px"}
        mr={5}
        spacing={4}
        alignItems="center"
        maxW="600px"
        m="auto"
       
      >
        {points.map((point, index) => (
          <Flex
            key={index}
            alignItems="center"
            style={{ opacity: index >= points.length -3 ? 0.8 : 1 }}
            
            data-aos-anchor-placement="center-bottom"

          >
            <Circle size="20px" bg="blue.500" />
            <Box h="100px" w="2px" bg="blue.500" ml={2} />
            <VStack align="start" ml={4} spacing={1}>
              <Text fontWeight="bold">{point.heading}</Text>
              <Text>{point.text}</Text>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Improvement;
