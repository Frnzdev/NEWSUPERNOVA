export interface Artist {
  id: number;
  name: string;
  bio: string;
  image: string;
}

export const ArtistaOb: Artist[] = [
  {
    id: 1,
    name: "Veigh",
    bio: "Artista brasileiro conhecido por sair dos prédios.",
    image: "/image/veigh.png",
  },
  {
    id: 2,
    name: "Niink",
    bio: "Artista conhecido por suas fortes letras de trap nacional.",
    image: "/image/niink.png",
  },
  {
    id: 3,
    name: "G.A",
    bio: "Artista conhecido pelas suas músicas de romance safado.",
    image: "/image/ga.png",
  },
  {
    id: 4,
    name: "G.hard",
    bio: "Artista conhecido por ser dobra do Veigh.",
    image: "/image/ghard.png",
  },
  {
    id: 5,
    name: "Nagalli",
    bio: "Gênio dos Beats e produção musical de trap.",
    image: "/image/nga.png",
  },
  {
    id: 6,
    name: "Honaiser",
    bio: "Gênio dos Beats e produção musical de trap.",
    image: "/image/hona.png",
  },
  {
    id: 7,
    name: "BVGA beats",
    bio: "Gênio dos Beats e produção musical de trap.",
    image: "/image/bvga.png",
  },
  {
    id: 8,
    name: "Toledo",
    bio: "Gênio dos Beats e produção musical de trap.",
    image: "/image/toledo.png",
  },
];
export const getArtists = async (): Promise<Artist[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ArtistaOb);
    }, 3000);
  });
};
