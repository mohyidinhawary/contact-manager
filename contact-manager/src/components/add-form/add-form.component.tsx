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
      const inputFields = [
        { label: "name", type: "text", required: true, name: "name", value:  `${formData.name} `},
        { label: "username", type: "text", required: true, name: "username", value: `${formData.username} `},
        { label: "phone", type: "text", required: true, name: "phone", value:`${formData.phone} ` },
        { label: "email", type: "text", required: true, name: "email", value: `${formData.email} ` },
        { label: "website", type: "text", required: true, name: "website", value:`${formData.website} ` },
      ];
      
return(
    <>
    <Form onSubmit={handleSubmit} >
    {inputFields.map((field) => (
        <FormInput
          key={field.name}
          label={field.label}
          type={field.type}
          required={field.required}
          name={field.name}
          value={field.value}
          onChange={handleChange}
        />
      ))}
       <Button variant="create" size="lg" className=" mt-6 mr-72" type="submit"   >Create</Button>
       
    </Form>
    
    </>
)
}
export default AddForm