import { Box, Flex, IconButton, Image, Button, Text } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      color="black"
    >
      <Box>
        <Image
          src="https://i.pinimg.com/236x/91/b0/fb/91b0fbac6a10ed9bc7b9596ce89cf8b0.jpg"
          alt="Logo"
          w={14}
          h={14}
        />
      </Box>
      <Flex align="center">
        <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} mx={4}>
          <Text>Emotions</Text>
        </MotionBox>
        <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} mx={4}>
          <Text>Menifesto</Text>
        </MotionBox>
        <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} mx={4}>
          <Text>Self-Awarness-Test</Text>
        </MotionBox>
        <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} mx={4}>
          <Text>Work With Us</Text>
        </MotionBox>
      </Flex>
      <Button
        leftIcon={<FiDownload />}
        bg="black"
        color="white"
        borderRadius="full"
        px={6}
        size="sm"
        _hover={{ bg: "gray.700" }}
        _active={{ bg: "gray.800" }}
      >
        Download App
      </Button>
    </Flex>
  );
};

export default Navbar;
