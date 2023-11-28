import {VariantProps} from"class-variance-authority";
import { cn } from "../../utilits/utilits";
import { titleVariants } from "./header.style";
import { ReactNode } from "react";
interface IHeaderProps extends VariantProps<typeof titleVariants>{
    children?:ReactNode; 
}
const Header=({children,variant}: IHeaderProps)=>{
return(
    <h1 className={cn(titleVariants({variant}))}>{children}</h1>
)
}
export default Header