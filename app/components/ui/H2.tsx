import React from "react";

const H2 = ({
  children,
  ...props
}: { children: string } & React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className="h2 font-bold text-2xl mb-4" {...props}>
      {children}
    </h2>
  );
};

export default H2;
