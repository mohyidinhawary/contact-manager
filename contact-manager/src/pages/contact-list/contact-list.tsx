

import { useNavigate } from "react-router-dom"
import Button from "../../components/button/button.component"
import FormInput from "../../components/form-input/form-input.component"
import Form from "../../components/form/form.component"
import Header from "../../components/header/header.component"
import ListCard from "../../components/list-card/list-card.component"


import { useContext } from "react"
import { ContactsContext } from "../../context/contact"
import List from "../../components/List/list.component"

const ContactList=()=>{
    const navigate=useNavigate();
   const {Contacts}=useContext(ContactsContext);
   console.log(Contacts);
    return(
       
        <>
         <Header variant="contacts" >
    Phone Directory
   </Header>
 
   <Form>
   <Button variant="new" size="lg" icons="plus" OnChangeHandler={()=>{navigate("/addcontact")}} className="mx-96 my-4">New</Button>
    <FormInput label="search" type="search" />
    
   </Form>
   
<List items={Contacts} resourceName="contact" ItemComponent={ListCard} />
        </>
  
        )
    }
    export default ContactList