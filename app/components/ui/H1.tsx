"use client";

const H1 = ({
  children,
  ...props
}: { children: string } & React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className="h1 font-bold text-3xl" {...props}>
      {children}
    </h1>
  );
};

export default H1;
