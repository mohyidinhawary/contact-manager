
interface IButtonProps{
    children?:string;
}
const Button=({children}:IButtonProps)=>{
return(
    <button>{children}</button>
)
}
export default Button