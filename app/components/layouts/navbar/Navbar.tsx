"use client";

import NavigationDialog from "@/app/components/layouts/navbar/NavigationDialog";
import NavigationItems from "@/app/components/layouts/navbar/NavigationItems";
import { Button } from "@/app/components/ui/button";
import H1 from "@/app/components/ui/H1";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 lg:px-20 py-1 w-full navbar-height">
        <H1 className="h1 font-bold text-xl"> Gestion de JDR</H1>

        <NavigationItems className="hidden md:flex " />
        <NavigationDialog />

        <div className="hidden md:block">
          <Button>Se connecter</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
