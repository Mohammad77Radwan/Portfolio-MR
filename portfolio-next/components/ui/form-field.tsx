"use client";

import { type ReactNode, type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  )
);
FormField.displayName = "FormField";

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  required?: boolean;
}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, required, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium text-slate-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-red-400 ml-1" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
);
FormLabel.displayName = "FormLabel";

interface FormErrorProps extends HTMLAttributes<HTMLParagraphElement> {
  message?: string;
}

const FormError = forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ className, message, children, ...props }, ref) => {
    const errorContent = message || children;
    
    if (!errorContent) return null;
    
    return (
      <p
        ref={ref}
        className={cn("text-sm font-medium text-red-400", className)}
        role="alert"
        aria-live="polite"
        {...props}
      >
        {errorContent}
      </p>
    );
  }
);
FormError.displayName = "FormError";

interface FormSuccessProps extends HTMLAttributes<HTMLParagraphElement> {
  message?: string;
}

const FormSuccess = forwardRef<HTMLParagraphElement, FormSuccessProps>(
  ({ className, message, children, ...props }, ref) => {
    const successContent = message || children;
    
    if (!successContent) return null;
    
    return (
      <p
        ref={ref}
        className={cn("text-sm font-medium text-green-400", className)}
        role="status"
        aria-live="polite"
        {...props}
      >
        {successContent}
      </p>
    );
  }
);
FormSuccess.displayName = "FormSuccess";

interface FormDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-slate-500", className)}
      {...props}
    />
  )
);
FormDescription.displayName = "FormDescription";

export { FormField, FormLabel, FormError, FormSuccess, FormDescription };
