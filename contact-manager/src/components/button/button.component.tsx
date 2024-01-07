import { IButtonProps } from "../../types/button"
import { cn } from "../../utilits/cn"
import { buttonVariants } from "./button.style"

const Button=({children,variant,size,icons,OnChangeHandler,className,...props}:IButtonProps)=>{
return(
    <button  className={cn(buttonVariants({variant,size,icons,className}))} onClick={OnChangeHandler} {...props} > {children}</button>
)
}
export default Button