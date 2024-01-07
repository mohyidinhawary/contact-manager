import { FormInputLabel, Input } from "./form-input.style"
import { IInput } from "../../types/form-input"
const FormInput=({label,...props}:IInput)=>{
return(
   <>
    {label && (
        <FormInputLabel >
          {label}
        </FormInputLabel>
      )}
         <Input {...props} />
        
    </>
        
   
    
 
        
)
}
export default FormInput