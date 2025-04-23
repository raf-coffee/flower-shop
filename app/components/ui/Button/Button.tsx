import clsx from "clsx";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  className,
  children,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "rounded-full px-6 py-2 font-semibold text-white transition duration-300",
        "bg-gradient-to-r from-pink-500 to-pink-400",
        "hover:from-pink-400 hover:to-pink-300",
        "active:from-pink-300 active:to-pink-200",
        {
          "cursor-not-allowed opacity-50": disabled,
          "cursor-pointer": !disabled,
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
