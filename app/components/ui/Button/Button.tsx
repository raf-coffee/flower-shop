import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
} & VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "rounded-full font-semibold text-white transition duration-300",
  {
    variants: {
      intent: {
        primary: "bg-secondary-pink hover:bg-hover-pink active:bg-[#fb7e98]",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer",
      },
      size: {
        normal:
          "px-16 py-2 min-h-[40px] lg:py-6 lg:min-w-[275px] lg:min-h-[75px]",
        small:
          "rounded-2xl min-h-[20px] px-4 py-1 text-xs font-semibold text-white transition-colors lg:py-2",
      },
    },
    defaultVariants: {
      intent: "primary",
      disabled: false,
      size: "normal",
    },
  },
);

export default function Button({
  className,
  children,
  disabled = false,
  onClick,
  intent = "primary",
  size = "normal",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(buttonVariants({ intent, disabled, size }), className)}
    >
      {children}
    </button>
  );
}
