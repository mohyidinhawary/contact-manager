
import { FormInputLabel, Input } from "./form-input.style"
interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    label?:string;
    
}
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