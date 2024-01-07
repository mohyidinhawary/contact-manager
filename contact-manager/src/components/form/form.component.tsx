import { FormContainer } from "./form.style"
import { IForm } from "../../types/form";
const Form=({children,onSubmit}:IForm)=>{
return(
  <FormContainer onSubmit={onSubmit}>
  {children}
   </FormContainer>   
)
}
export default Form