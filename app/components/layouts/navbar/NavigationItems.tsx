"use client";

import { Button } from "@/app/components/ui/button";
import { GETTING_STARTED_PATH } from "@/app/constants/paths";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  className?: string;
};

type NavigationItemType = {
  id: number;
  href: string;
  name: string;
};
const navigationItems: NavigationItemType[] = [
  {
    id: 1,
    href: GETTING_STARTED_PATH,
    name: "Tutoriel",
  },
  {
    id: 2,
    href: "#",
    name: "Statistiques",
  },
];

const NavigationItems = ({ className }: Props) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {navigationItems.map((item: NavigationItemType) => (
        <NavigationItem key={item.id} href={item.href} pathname={pathname}>
          {item.name}
        </NavigationItem>
      ))}
    </nav>
  );
};

type NavigationItemProps = {
  href: string;
  pathname: string;
  children: string;
};

const NavigationItem = ({ href, pathname, children }: NavigationItemProps) => {
  return (
    <>
      <Button
        asChild
        variant={"link"}
        className={cn(
          "text-muted-foreground hover:text-primary",
          pathname === href && "text-primary"
        )}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </>
  );
};

export default NavigationItems;
