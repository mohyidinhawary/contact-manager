import { useContext } from "react"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import Form from "../form/form.component"
import { ContactsContext } from "../../context/contact"
import { useState } from "react"
import { Contact } from "../../context/contact"
import { useNavigate } from "react-router-dom"


const AddForm=()=>{
    const navigate=useNavigate();
    const {addNewContact}=useContext(ContactsContext);
    const [formData, setFormData] = useState<Contact>({
      
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
      });
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          addNewContact(formData);
          // Perform any additional actions after contact creation
          setFormData({
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
          });
          navigate("/",{replace:true})
        } catch (error) {
          console.log(error);
        }
        console.log(formData)
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
      
       <Button variant="create" size="lg" className=" mt-6 mr-72" type="submit"   >Create</Button>
       
    </Form>
    
    </>
)
}
export default AddForm