interface IButtonIconProps{
    className:string
}
const ButtonIcon=({className}:IButtonIconProps)=>{
return(
    <i className={`${className}`} />
)
}
export default ButtonIcon