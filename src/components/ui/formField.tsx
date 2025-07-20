import { Field } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOffIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/utils/cn";

import { Button } from "./button";
import { InputMask, useMask } from "@react-input/mask";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type InputType = InputProps & {
  error?: string;
  touched?: boolean;
  icon?: React.ElementType;
  textarea?: boolean;
};

const FormField = React.forwardRef<HTMLInputElement, InputType>(
  (
    {
      className,
      type,
      textarea = false,
      error,
      touched,
      icon: Icon,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputRef = useMask({
    mask: "(__) _____-____",
    replacement: { _: /\d/ },
    showMask: true,
  });

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className="flex flex-col">
        <div className="relative">
          {Icon && <Icon className="inputIcon" />}
          <Field
            ref={type=== "tel" ? inputRef : ref}
            name={props.name}
            type={inputType}
            className={cn(
              "flex h-10 w-full rounded-md border px-3 bg-transparent py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/70 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              Icon && "pl-10",
              error && touched ? "border-solid border-destructive" : "",
              className,
              textarea && "min-h-[80px]",
            )}
            {...props}
            as={textarea && "textarea"}
            data-input={props.name}
          />
          {type === "password" && (
            <Button
              className="hover:text-primary absolute top-0 right-2 w-fit hover:bg-transparent"
              variant={"ghost"}
              size={"icon"}
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              data-toggle-password
            >
              {showPassword ? <EyeOffIcon /> : <Eye />}
            </Button>
          )}
        </div>
      </div>
    );
  },
);
FormField.displayName = "Input";

type FormFieldErrorProps = InputProps & {
  error?: string;
  touched?: boolean;
};

const FormFieldError = React.forwardRef<HTMLDivElement, FormFieldErrorProps>(
  ({ className, error, touched }, ref) => {
    return (
      <AnimatePresence>
        {error && touched && (
          <motion.div
            ref={ref}
            className={cn("min-h-[1.5rem] leading-6", className)}
            key={`errorMessage`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <motion.span
              className="text-destructive text-sm"
              data-error-message
            >
              {error}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);
FormFieldError.displayName = "FormFieldError";

const FormFieldRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn("", className)} {...props} ref={ref} data-input-root>
      {props.children}
    </div>
  );
});
FormFieldRoot.displayName = "FormFieldRoot";

interface FormFieldLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const FormFieldLabel = React.forwardRef<HTMLLabelElement, FormFieldLabelProps>(
  ({ className, required, ...props }, ref) => {
    return (
      <label
        className={cn(
          "",
          required && "after:content-['*'] after:text-destructive",
          className,
        )}
        {...props}
        ref={ref}
        data-input-label
      >
        {props.children}
      </label>
    );
  },
);
FormFieldLabel.displayName = "FormFieldRoot";

export { FormField, FormFieldRoot, FormFieldLabel, FormFieldError };
