
import {VariantProps} from"class-variance-authority";
import { cn } from "../../utilits/cn";
import { buttonVariants } from "./button.style";
import { ReactNode,ButtonHTMLAttributes } from "react";



interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    children?:ReactNode; 
   OnChangeHandler?:()=>void
};

const Button=({children,variant,size,icons,OnChangeHandler,className,...props}:IButtonProps)=>{
    
return(
    <button  className={cn(buttonVariants({variant,size,icons,className}))} onClick={OnChangeHandler} {...props} > {children}</button>
)
}
export default Button