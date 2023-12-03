
import { ReactNode } from "react";
import { CardContainer, CardContent } from "./card.style";
interface ICardProps{
    children:ReactNode; 
}
const Card=({children}:ICardProps)=>{

return(
<CardContainer>

       <CardContent>
       {children}
       </CardContent>
     
      
   
</CardContainer>
   
   

)
}
export default Card