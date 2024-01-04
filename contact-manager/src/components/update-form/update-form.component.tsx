import { useContext,useState } from "react"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import Form from "../form/form.component"
import { ContactsContext } from "../../context/contact"
import { Contact } from "../../context/contact"
import { FormEvent } from "react"
interface IUpdateForm{
    contact:any,
   
  }
const UpdateForm=({contact}:IUpdateForm)=>{
    const{UpdateContact}=useContext(ContactsContext);
    
    const [formData, setFormData] = useState<Contact>({
        ...contact
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        UpdateContact({ ...contact, ...formData });
      };
    
return(
    <>
    <Form onSubmit={handleSubmit}>
    <FormInput 
        label="name" 
        type='text'
        required
        name='name'
        value={formData.name}
        onChange={handleChange}
         />
        <FormInput 
        label="username" 
        type='text'
         required
        name='username'
        value={formData.username}
        onChange={handleChange}
         />
        <FormInput 
        label="phone" 
        type='text'
        required
        name='phone'
        value={formData.phone}
    onChange={handleChange}
         />
        <FormInput 
        label="email" 
        type='text'
        required
        name='email'
        value={formData.email}
        onChange={handleChange}
         />
        <FormInput 
        label="website" 
        type='text'
        required
        name='website'
        value={formData.website}
        onChange={handleChange}
         />
      
       <Button variant="update" size="lg" className=" mt-6 mr-72" type="submit"  >Update</Button>
       
    </Form>
    
    </>
)
}
export default UpdateForm