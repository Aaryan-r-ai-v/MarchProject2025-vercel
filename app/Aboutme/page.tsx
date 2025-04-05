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
      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder Image"
        width={150}
        height={150}
      />
    </div>
  );
}
