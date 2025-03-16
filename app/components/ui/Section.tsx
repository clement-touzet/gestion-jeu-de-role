import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

const Section = ({ children, className, ...props }: Props) => {
  return (
    <section className={cn("my-8", className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
