import { useContext,useState } from "react"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import Form from "../form/form.component"
import { ContactsContext } from "../../context/contact"
import { Contact } from "../../context/contact"
import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"
interface IUpdateForm{
  ContactId:number,
   
  }
 
const UpdateForm=({ContactId}:IUpdateForm)=>{
  const navigate=useNavigate();
    const{UpdateContact}=useContext(ContactsContext);
    const { getContactById } = useContext(ContactsContext);
    const contact = getContactById(ContactId);
    const [formData, setFormData] = useState<Contact>({
      name: `${contact?.name}`,
      username: `${contact?.username}`,
      email: `${contact?.email}`,
      phone: `${contact?.phone}`,
      website: `${contact?.website}`,
     
     
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try{
      UpdateContact(formData,ContactId);
      
      navigate("/",{replace:true})
      }
      catch(error){
console.log(error);
      }
    };
    
    
return(
    <>
    <Form onSubmit={handleSubmit} >
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