"use client";

import { Artist, getArtists } from "@/app/data/artists";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function DescriptionArtists() {
  const [artista, setArtista] = useState<Artist | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const data = await getArtists();
        const foundArtist = data.find((artist) => artist.id === Number(id));
        setArtista(foundArtist || null);
      } catch (error) {
        console.error("Erro ao buscar artista:", error);
      }
    };

    fetchArtist();
  }, [id]);

  if (!artista) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center z-50">
        <div className="flex items-end gap-1 h-24">
          <div className="w-2 bg-white animate-pulse-bar [animation-delay:-0.4s]" />
          <div className="w-2 bg-white animate-pulse-bar [animation-delay:-0.2s]" />
          <div className="w-2 bg-white animate-pulse-bar" />
          <div className="w-2 bg-white animate-pulse-bar [animation-delay:-0.2s]" />
          <div className="w-2 bg-white animate-pulse-bar [animation-delay:-0.4s]" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center px-6 py-12 text-white">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 bg-gray-950 bg-opacity-60 p-8 rounded-2xl shadow-lg">
        <Image
          src={artista.image}
          alt={artista.name}
          width={400}
          height={400}
          className="rounded-2xl shadow-xl"
          unoptimized
        />
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            {artista.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">{artista.bio}</p>
        </div>
      </div>
    </div>
  );
}
