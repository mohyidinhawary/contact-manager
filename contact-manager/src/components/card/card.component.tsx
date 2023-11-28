
import { ReactNode } from "react";
interface ICardProps{
    children:ReactNode; 
}
const Card=({children}:ICardProps)=>{

return(
<div className="w-full max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div className="flex flex-col items-center pb-10 mt-12">
       
        {children}
       
    </div>
</div>
)
}
export default Card