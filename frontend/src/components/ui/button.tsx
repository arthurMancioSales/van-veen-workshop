import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "ring-offset-background focus-visible:ring-ring inline-flex w-full items-center justify-center rounded-md text-sm font-medium shadow-inner transition-all duration-300 hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-90 disabled:brightness-75",
  {
    variants: {
      variant: {
        success:
          "bg-success text-success-foreground hover:bg-success/70 active:bg-success/90",
        default:
          "bg-primary text-primary-foreground hover:bg-primary/70 active:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/70 active:bg-destructive/90",
        outline:
          "border-input bg-background hover:bg-secondary hover:text-accent-foreground active:bg-secondary/30 border",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/90",
        ghost:
          "hover:bg-accent hover:text-accent-foreground active:bg-accent/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          loading && "pointer-events-none cursor-wait",
        )}
        ref={ref}
        {...props}
        data-submit-button={props.type === "submit"}
        disabled={props.disabled || loading}
        type={props.type === "submit" ? "submit" : "button"}
        role={props.type === "submit" ? "submit" : "button"}
      >
        {loading && <Loader2 className="mr-2 animate-spin" />}
        {props.children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
