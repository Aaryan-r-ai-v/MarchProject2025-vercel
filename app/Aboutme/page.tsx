"use client";


import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useState } from "react";
import link from "next/link";


export default function AboutmePage() {
    let facts: string[] = [
        "Tennis originated in France in the late 12th century.",
        "The longest tennis match lasted 11 hours and 5 minutes (Wimbledon 2010: Isner vs. Mahut).",
        "A tennis match is won by the best of 3 or 5 sets.",
        "The four Grand Slam tournaments are the Australian Open, French Open, Wimbledon, and US Open.",
        "The tennis ball was originally white but changed to yellow in 1972 for better visibility on TV.",
        "Serena Williams has won 23 Grand Slam singles titles, the most in the Open Era.",
        "The fastest recorded tennis serve was 157.2 mph (Sam Groth, 2012).",
        "Wimbledon is the oldest tennis tournament, founded in 1877.",
        "A standard tennis court is 78 feet long and 27 feet wide for singles.",
        "The term 'love' in tennis scoring means zero and likely comes from the French word 'l'oeuf' (egg)."]
    const [fact, setFact] = useState("");
    return (
    <div>
      <h1 className={title()}>About me</h1>
      
        <Button onPress={() => {setFact(facts[Math.floor(Math.random() * facts.length)]);}} className="bg-blue-800 text-white">

        Press 4 Fact

        </Button>
        <p>{fact}</p>
      <div>
        <div className="flex flex-wrap text-2xl m-2 justify center">
{/*           <img src="hoco.jpg" alt="Me at hoco" width="500" height="600"></img> */}
          <p> This is me at hoco at bellvue square</p>
          <Button as={link} href="https://bellevuecollection.com/" className="bg-blue-700 text-white">Bellvue</Button>
          <br />
          <p>--------------------------------------------------------------</p>
          <br />
{/*            <img src="IMG_2145.jpg" alt="Me at tajmahal" width="500" height="600"> */}
          <br />
          <p>I love sight seeing</p>
          <br />
          <p>--------------------------------------------------------------</p>
          <br />
{/*           <img src="rogerfed.jpg" alt="Picture of roger federer" width="500" height="600"></img> */}
          <br />
          <p>I love playing tennis and it is important and one of my favorite hobbies </p>
          <Button as={link} href="https://www.wimbledon.com/index.html" className="bg-blue-600 text-white">Wimbledon</Button>
          <br />
          <p>--------------------------------------------------------------</p>
          <br />
        
      
      
        </div>
      </div>
    </div>
  );
}
