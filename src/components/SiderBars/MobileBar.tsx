import {
  ContactRound,
  Home,
  Music4Icon,
  PanelBottom,
  UsersRoundIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export default function MobileSideBar() {
  return (
    <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 h-14 px-4 border-b bg-black flex items-center justify-between">
        {/* Logo na esquerda */}
        <Image
          src="/LOGO_SUPERNOVA__WHITE-1024x358.png"
          width={100}
          height={40}
          alt="logo"
          className="object-contain"
        />

        {/* Ícone abrir menu à direita */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="text-white sm:hidden"
            >
              <PanelBottom className="w-6 h-6" />
              <span className="sr-only">ABRIR / fechar menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="sm:max-w-xs bg-black text-white [&>button]:text-white"
          >
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                className="flex h-10 w-10 bg-primary rounded-full
                  text-lg items-center justify-center text-primary-foreground m-2"
                prefetch={false}
                href={"/"}
              >
                <h1>S</h1>
                <span className="sr-only">My-dash logo</span>
              </Link>

              <Link
                className="flex items-center gap-4 px-2.5 text-white hover:text-gray-300"
                prefetch={false}
                href={"/"}
              >
                <Home className="h-5 w-5 transition-all" />
                Início
              </Link>
              <Link
                className="flex items-center gap-4 px-2.5 text-white hover:text-gray-300"
                prefetch={false}
                href={"/artistas"}
              >
                <UsersRoundIcon className="h-5 w-5 transition-all" />
                Artistas
              </Link>

              <Link
                className="flex items-center gap-4 px-2.5 text-white hover:text-gray-300"
                prefetch={false}
                href={"/musics"}
              >
                <Music4Icon className="h-5 w-5 transition-all" />
                Músicas
              </Link>

              <Link
                className="flex items-center gap-4 px-2.5 text-white hover:text-gray-300"
                prefetch={false}
                href={"/"}
              >
                <ContactRound className="h-5 w-5 transition-all" />
                Contato
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
