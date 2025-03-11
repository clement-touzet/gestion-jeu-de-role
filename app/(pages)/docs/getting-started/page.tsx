import {
  NavMain,
  NavMainItemsType,
} from "@/app/components/layouts/sidebar/NavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/app/components/ui/sidebar";
import { getClassesByAsc } from "@/app/features/character-creation/actions/getClasses";
import { getRacesByAsc } from "@/app/features/character-creation/actions/getRaces";
import IntroductionParagraph from "@/app/features/tutorials/getting-started/IntroductionParagraph";
import React from "react";

const items: NavMainItemsType = [
  {
    title: "Introduction",
    url: "/",
    items: [
      { title: "Règles du jeu", url: "/" },
      { title: "But du jeu", url: "/" },
    ],
  },
];

const GettingStartedPage = async () => {
  const charactersClasses = await getClassesByAsc();
  const races = await getRacesByAsc();

  return (
    <>
      <SidebarProvider>
        <Sidebar variant="floating">
          <SidebarContent>
            <NavMain items={items} />
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="fixed">
            <SidebarTrigger className="-ml-1 mt-6 sticky top-0 left-0" />
          </div>
          <main className="px-8 h-m-80svh">
            <IntroductionParagraph
              charactersClasses={charactersClasses}
              races={races}
            />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default GettingStartedPage;
