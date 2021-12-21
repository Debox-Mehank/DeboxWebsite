import React, { MouseEventHandler } from "react";

interface EssentialButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  active: boolean;
}

const EssentialButton = ({ title, onClick, active }: EssentialButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`text-white text-center font-semibold text-xs shadow-md cursor-pointer rounded-sm py-1.5 px-3 mt-3 lg:py-2 ${
        active ? "bg-primary" : "bg-essentialBtn"
      }`}
    >
      {title}
    </div>
  );
};

export default EssentialButton;
