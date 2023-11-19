


interface IButtonProps{
    children?:string;
    className?:string;
    
}
const Button=({children,className}:IButtonProps)=>{
return(
    <button className={`${className}`}> {children}</button>
)
}
export default Button