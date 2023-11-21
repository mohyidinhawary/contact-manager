
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?:string;
    className:string;
   
};




const Button=({children,className,...props}:IButtonProps)=>{
    
return(
    <button className={`${className}`} {...props} > {children}</button>
)
}
export default Button