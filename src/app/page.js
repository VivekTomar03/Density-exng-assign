'use client'


import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";
import IQ from "@/Components/IQ";
import CardsSlide from "@/Components/CardsSlide";
import MeetSeaction from "@/Components/MeetSeaction";
import Improvement from "@/Components/Improvement";
import EQ from "@/Components/EQ";
import Anonymonous from "@/Components/Anonymonous";

export default function Home() {


  return (
 <>
    <Navbar />
   <Banner/>
   <IQ/>
   <CardsSlide/>
   <MeetSeaction/>
   <Improvement/>
   <EQ/>
   <Anonymonous/>
   </>
  );
}
