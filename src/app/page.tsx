import Link from "next/link";

export default function Home() {
  return (
    <main className="m-auto min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center text-center">
      {/* Título com destaque em gradiente */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-white via-slate-400 to-slate-600 text-transparent bg-clip-text">
        Já ouviu falar da Supernova?
      </h1>

      {/* Frase de impacto */}
      <p className="text-lg sm:text-xl text-center max-w-2xl mb-10 text-gray-300">
        Somos mais que uma gravadora — somos o impulso que transforma talento em
        estrela. Com nomes como <strong>Veigh</strong>, <strong>Niink</strong>,{" "}
        <strong>G.A</strong> e <strong>G.Hard</strong>, levamos a nova cena trap
        ao topo.
      </p>

      {/* Botão de ação */}
      <Link
        href="/artistas"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200"
      >
        Conheça os artistas
      </Link>
    </main>
  );
}
