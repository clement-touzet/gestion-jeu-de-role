"use client";

import NavigationDialog from "@/app/components/layouts/navbar/NavigationDialog";
import NavigationItems from "@/app/components/layouts/navbar/NavigationItems";
import { Button } from "@/app/components/ui/button";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 lg:px-20 py-1 w-full navbar-height">
        <h1> Gestion de JDR</h1>

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
