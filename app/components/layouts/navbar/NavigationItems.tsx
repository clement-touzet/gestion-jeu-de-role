import { Button } from "@/app/components/ui/button";
import { GETTING_STARTED_PATH } from "@/app/constants/paths";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const NavigationItems = ({ className }: Props) => {
  return (
    <nav className={className}>
      <Button asChild variant={"link"}>
        <Link href={GETTING_STARTED_PATH}>Tutoriel</Link>
      </Button>
      <Button asChild variant={"link"} disabled>
        <Link href={GETTING_STARTED_PATH}>Statistiques</Link>
      </Button>
    </nav>
  );
};

export default NavigationItems;
