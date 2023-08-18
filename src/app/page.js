'use client'
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";
export default function Home() {


  return (
    <ChakraProvider >
   
    <Navbar />
   
  </ChakraProvider>
  );
}
