interface CustomButtonProps {
  text: string;
  bgColor?: string;
  arrowEnabled?: boolean;
  textColor?: string;
  className?: string;
}

export const CustomButton = ({
  text,
  arrowEnabled = false,
  bgColor = "#000000",
  textColor = "#ffffff",
  className,
}: CustomButtonProps) => {
  return (
    <button
      className={`bg-[#000000] text-white py-2 px-6 md:px-8 cursor-pointer ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="uppercase font-semibold text-sm md:text-lg 2xl:text-lg">
        {text}
      </span>
    </button>
  );
};
