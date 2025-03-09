import React from "react";

type Props = {
  horizontalPadding: `${number}px`;
};

const HorizontalSpacing = ({ horizontalPadding }: Props) => {
  return (
    <div
      className={`w-full`}
      style={{
        paddingTop: `${horizontalPadding}`,
        paddingBottom: `${horizontalPadding}`,
      }}
    ></div>
  );
};

export default HorizontalSpacing;
