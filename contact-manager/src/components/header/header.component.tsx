import { IHeaderProps } from "../../types/header";
import { cn } from "../../utilits/cn";
import { titleVariants } from "./header.style";
const Header=({children,variant}: IHeaderProps)=>{
return(
    <h1 className={cn(titleVariants({variant}))}>{children}</h1>
)
}
export default Header