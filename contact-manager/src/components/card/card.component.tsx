import { CardContainer, CardContent } from "./card.style";
import { ICardProps } from "../../types/card";
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