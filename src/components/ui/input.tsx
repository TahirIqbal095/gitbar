import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-14 w-full rounded-full border-2 border-gray-300 px-6 py-1 text-base text-neutral-700 shadow transition-colors outline-none focus:border-gray-700 focus:ring focus:ring-gray-600 placeholder:text-neutral-400 placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
