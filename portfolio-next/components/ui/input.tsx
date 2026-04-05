"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, "aria-invalid": ariaInvalid, ...props }, ref) => {
    const hasError = !!error || ariaInvalid === true || ariaInvalid === "true";
    
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border bg-slate-900/50 px-3 py-2 text-sm text-white placeholder:text-slate-500 transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950",
          "disabled:cursor-not-allowed disabled:opacity-50",
          hasError
            ? "border-red-500 focus:ring-red-500"
            : "border-slate-700 focus:border-blue-500 focus:ring-blue-500",
          className
        )}
        ref={ref}
        aria-invalid={hasError}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
