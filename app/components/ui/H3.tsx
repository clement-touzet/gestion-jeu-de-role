import React, { PropsWithChildren } from "react";

const H3 = ({
  children,
  ...props
}: PropsWithChildren & React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className="h3 font-bold text-xl mb-4" {...props}>
      {children}
    </h3>
  );
};

export default H3;
