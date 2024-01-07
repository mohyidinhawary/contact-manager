import {VariantProps} from"class-variance-authority";
import { buttonVariants } from "../components/button/button.style";
import { ReactNode,ButtonHTMLAttributes } from "react";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    children?:ReactNode; 
   OnChangeHandler?:()=>void
};