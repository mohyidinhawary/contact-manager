
import {VariantProps} from"class-variance-authority";
import { cn } from "../../utilits/utilits";
import { buttonVariants } from "./button.style";
import { ReactNode,ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    children?:ReactNode; 
};

const Button=({children,variant,size,icons,className,...props}:IButtonProps)=>{
    
return(
    <button className={cn(buttonVariants({variant,size,icons,className}))} {...props} > {children}</button>
)
}
export default Button