import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  isTextArea?: boolean; // Add a prop to switch between input and textarea
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ className, type, isTextArea, ...props }, ref) => {
    if (isTextArea) {
      return (
        <textarea
          className={cn(
            "p-2 mt-1 w-full rounded-md border-[#c874b2] shadow-sm text-lg bg-white/50 text-white",
            className
          )}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    }

    return (
      <input
        type={type}
        className={cn(
          "p-2 mt-1 w-full rounded-md border-[#c874b2] shadow-sm text-lg bg-white/50 text-white",
          className
        )}
        ref={ref as React.Ref<HTMLInputElement>}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
