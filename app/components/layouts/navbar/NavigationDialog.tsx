import NavigationItems from "@/app/components/layouts/navbar/NavigationItems";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";

import { MenuIcon } from "lucide-react";

const NavigationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="md:hidden" variant={"outline"} size={"icon"}>
          <MenuIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Navigation</DialogTitle>
        <NavigationItems className="flex flex-col justify-center items-center " />
      </DialogContent>
    </Dialog>
  );
};

export default NavigationDialog;
