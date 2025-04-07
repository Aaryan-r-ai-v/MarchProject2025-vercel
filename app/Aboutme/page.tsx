"use client";

import { Button } from "@heroui/button";
import Link from "next/link";
import { useState } from "react";
import link from "next/link";
import Image from "next/image";

import { title } from "@/components/primitives";

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
    "The term 'love' in tennis scoring means zero and likely comes from the French word 'l'oeuf' (egg).",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About me</h1>
      <Button
        className="bg-blue-800 text-white"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press 4 Fact
      </Button>
      <p>{fact}</p>

      <div className="text-2xl m-2 justify center">
        {/*           <img src="hoco.jpg" alt="Me at hoco" width="500" height="600"></img> */}

        <br />
        <p> This is me before hoco at bellvue square </p>
        <Image alt="test" height={200} src="/IMG_5939.jpg" width={200} />

        <Button
          as={link}
          className="bg-blue-700 text-white"
          href="https://bellevuecollection.com/"
        >
          Bellvue
        </Button>
        <br />

        <p>-------------------------</p>
        <br />
        <Image alt="taj mahal" height={200} src="/IMG_2145.jpg" width={200} />

        <br />
        <p>I love sight seeing</p>
        <br />
        <Image
          alt="test"
          height={200}
          src="/thumbnail_IMG_4609.jpg"
          width={200}
        />
        <p>-------------------------</p>
        <br />

        <br />

        <br />
        <p>
          I love playing tennis and it is important and one of my favorite
          hobbies{" "}
        </p>
        <br />
        <Button
          as={link}
          className="bg-blue-600 text-white"
          href="https://www.wimbledon.com/index.html"
        >
          Wimbledon
        </Button>
        <br />

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <br />
          <Image alt="test" height={200} src="/roger.jpg" width={200} />
          <p>-------------------------</p>
          <br />
        </a>
        <p>LINKS:</p>
        <p>-------------------------</p>
        <a
          className="text-blue-500"
          href="https://www.chess.com/"
          rel="noreferrer"
          target="_blank"
        >
          Chess.com
        </a>

        <br />

        <br />

        <Link className="text-blue-400" href="https://www.youtube.com">
          YouTube{" "}
        </Link>
      </div>
    </div>
  );
}

