import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/app/components/ui/sidebar";
import React from "react";

type Props = {
  sidebarData: {};
};

const AppSidebar = ({ sidebarData, ...props }: Props) => {
  return (
    <></>
    // <Sidebar collapsible="icon" {...props}>
    //   <SidebarHeader>
    //     <TeamSwitcher teams={data.teams} />
    //   </SidebarHeader>
    //   <SidebarContent>
    //     <NavMain items={data.navMain} />
    //     <NavProjects projects={data.projects} />
    //   </SidebarContent>
    //   <SidebarFooter>
    //     <NavUser user={data.user} />
    //   </SidebarFooter>
    //   <SidebarRail />
    // </Sidebar>
  );
};

export default AppSidebar;
