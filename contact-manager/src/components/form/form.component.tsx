
import {ReactNode} from "react"
import { FormContainer } from "./form.style"
interface IForm{
    children:ReactNode
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
const Form=({children,onSubmit}:IForm)=>{
return(
  
    <FormContainer onSubmit={onSubmit}>
  {children}
   </FormContainer>
  
  
    
)
}
export default Form