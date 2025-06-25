"use client";

import { Artist, ArtistaOb, getArtists } from "@/app/data/artists";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

export default function ArtistasDetails() {
  const [artistas, setArtistas] = useState<Artist[]>(ArtistaOb);

  useEffect(() => {
    const artistasOn = async () => {
      try {
        const data = await getArtists();
        setArtistas(data);
      } catch (error) {
        console.error("deu erro" + error);
      }
    };
    artistasOn();
  }, []);
  return (
    <div className="min-h-screen py-10 px-4 bg-black">
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        Conheça os Artistas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto m-auto">
        {artistas.map((artist: Artist) => (
          <Link key={artist.id} href={`/artistas/${artist.id}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <Image
                src={artist.image}
                alt={artist.name}
                width={400}
                height={400}
                unoptimized
              />
              <div className="p-4 flex justify-center font-bold">
                <h2 className="text-xl font-semibold text-gray-800">
                  {artist.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
