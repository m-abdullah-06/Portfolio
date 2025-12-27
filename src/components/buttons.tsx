import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: {
    variant?: "primary" | "secondary" | "tertiary";
    iconAfter?: ReactNode;
}
    & 
    ButtonHTMLAttributes<HTMLButtonElement>) => {

    const { className, children, variant, iconAfter, ...rest } = props;

    return(
        <button className={twMerge("h-11 px-6 rounded-xl inline-flex items-center gap-2 uppercase  border border-red-orange-500",
            variant === "primary" && "bg-red-orange-500 text-white",
            variant === "secondary" && "",
            variant === "tertiary" && "h-auto px-0 border-transparent",
        
        
        
        
         className)} {...rest}>
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    )



}

export default Button;