type ButtonProps = {
  innerText: string;
  bgColor: string;
  textColor: string;
  borderRadius?: string;
  py?: string;
  px?: string;
  onClick?: () => void;
};

const Button = ({
  innerText,
  bgColor,
  textColor,
  borderRadius = "rounded-[3px]",
  py = "1",
  px = "1",
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`self-start font-semibold text-xs text-${textColor} ${bgColor} px-${px} py-${py} ${borderRadius} whitespace-nowrap focus:outline-none`}
        onClick={onClick}
      >
        {innerText}
      </button>
    </>
  );
};

export default Button;
