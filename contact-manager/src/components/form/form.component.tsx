
import {ReactNode} from "react"
import { FormContainer } from "./form.style"
interface IForm{
    children:ReactNode
}
const Form=({children}:IForm)=>{
return(
   <FormContainer>
  {children}
   </FormContainer>
     
    
)
}
export default Form