import Image from "next/image";
import Link from "next/link";

export default function DesktopBar() {
  return (
    <header className="w-full h-16 bg-black px-6 hidden sm:block shadow-md">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/LOGO_SUPERNOVA__WHITE-1024x358.png"
          width={120}
          height={40}
          alt="logo"
          className="object-contain"
        />

        {/* Navegação */}
        <nav className="flex space-x-8 text-white font-medium text-sm">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Início
          </Link>
          <Link
            href="/musics"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Músicas
          </Link>
          <Link
            href="/artistas"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Artistas
          </Link>
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
