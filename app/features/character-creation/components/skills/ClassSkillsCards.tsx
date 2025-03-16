"use client";

import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const SkillsCards = ({ children }: Props) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 xl:gap-6 lg:flex-row">
      {children}
    </div>
  );
};

export default SkillsCards;
