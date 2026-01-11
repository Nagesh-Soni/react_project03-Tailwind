"use client";
import React, { useState } from "react";

export default function Music({ songs }) {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(false);

  const { Song, Singer, Img } = songs[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="border w-80 glass rounded-xl flex">
        <img src={Img} alt="music" width="150" className="rounded-2xl p-2" />

        <div className="px-4 py-4">
          <div className="py-3 text-amber-50">
            <h1>{Song}</h1>
            <p className="text-xs">{Singer}</p>
          </div>

          <div className="flex justify-evenly">
            <button onClick={handlePrev}>⏮</button>

            <button onClick={() => setPlay(!play)}>
              {play ? "▶" : "⏸"}
            </button>

            <button onClick={handleNext}>⏭</button>
          </div>
        </div>
      </div>
    </div>
  );
}

