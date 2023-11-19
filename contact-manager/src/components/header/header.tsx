interface IHeaderProps{
   title:string;
}
const Header=({title}: IHeaderProps)=>{
return(
    <h1 className="text-2xl font-bold text-center">{title}</h1>
)
}
export default Header