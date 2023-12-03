
import { FormInputLabel, Input } from "./form-input.style"
interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    label?:string;
    
}
const FormInput=({label,...props}:IInput)=>{
return(
   <>
         <Input {...props} />
         {label && (
        <FormInputLabel >
          {label}
        </FormInputLabel>
      )}
    </>
        
   
    
 
        
)
}
export default FormInput