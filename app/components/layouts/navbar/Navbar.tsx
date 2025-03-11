"use client";

import NavigationDialog from "@/app/components/layouts/navbar/NavigationDialog";
import NavigationItems from "@/app/components/layouts/navbar/NavigationItems";
import { Button } from "@/app/components/ui/button";
import H1 from "@/app/components/ui/H1";

const Navbar = () => {
  return (
    <header className="flex sticky top-0 z-50 w-full items-center  px-4 lg:px-20 py-1 border-b bg-background">
      <div className="flex justify-between h-[--header-height] w-full items-center gap-2 px-4">
        <H1 className="h1 font-bold text-xl"> Ombres & Légendes</H1>

        <NavigationItems className="hidden md:flex " />
        <NavigationDialog />

        <div className="hidden md:block">
          <Button>Se connecter</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
