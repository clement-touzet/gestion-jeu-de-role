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

const GettingStartedPage = () => {
  return (
    <>
      <SidebarProvider>
        <Sidebar variant="floating">
          <SidebarContent>
            <NavMain items={items} />
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <SidebarTrigger className="-ml-1 mt-6" />
          <main className="px-8 h-m-80svh">
            <IntroductionParagraph />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default GettingStartedPage;
