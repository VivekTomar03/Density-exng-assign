'use client'
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";
export default function Home() {


  return (
    <ChakraProvider >
   
    <Navbar />
   <Banner/>
  </ChakraProvider>
  );
}
