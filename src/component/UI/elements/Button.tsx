interface ButtonProps {
  text: string;
  disabled?: boolean;
  btnLoading?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  onClick: () => void;
}
export default function Button({
  text,
  leftIcon,
  rightIcon,
  containerClass,
  btnLoading,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        disabled ? "cursor-not-allowed bg-gray-400 text-white" : ""
      } flex items-center gap-2 relative w-fit rounded-full px-4 py-2 text-black-white cursor-pointer
       bg-gradient-to-r from-[#00C3FD] from-0% via-[#0194FE] via-41% to-[#0284E2] to-79% " ${containerClass}`}>
      {leftIcon && <span>{leftIcon}</span>}
      {/* {btnLoading && <ClipLoader color="#fff" size={20} />} */}
      <p className="font-semibold text-xs uppercase">{text}</p>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
