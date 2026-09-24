interface CustomButtonProps {
  text: string;
  bgColor?: string;
  arrowEnabled?: boolean;
  textColor?: string;
  className?: string;
}

export const CustomButton = ({
  text,
  bgColor = "#000000",
  textColor = "#ffffff",
  className,
}: CustomButtonProps) => {
  return (
    <button
      className={`bg-[#000000] text-white min-h-11 py-2 px-4 md:px-6 cursor-pointer ${className ?? ""}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="uppercase font-semibold text-sm md:text-base whitespace-nowrap">
        {text}
      </span>
    </button>
  );
};
