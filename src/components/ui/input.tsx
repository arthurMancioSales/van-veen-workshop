import * as React from "react";

import { cn } from "@/utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type InputType = InputProps & {
  label?: string;
  icon?: React.ElementType;
};

const Input = React.forwardRef<HTMLInputElement, InputType>(
  ({ className, label, type, icon: Icon, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col">
        {label && (
          <label
            className={cn(
              "dark:text-dark-text",
              props.required && "after:content-['*'] after:text-destructive",
            )}
            htmlFor={props.name}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && <Icon className="inputIcon" />}
          <input
            name={props.name}
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              Icon && "pl-10",
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
