

import { useNavigate } from "react-router-dom"
import Button from "../../components/button/button.component"
import FormInput from "../../components/form-input/form-input.component"
import Form from "../../components/form/form.component"
import Header from "../../components/header/header.component"
import ListCard from "../../components/list-card/list-card.component"


const ContactList=()=>{
    const navigate=useNavigate();
    return(
       
        <>
         <Header variant="contacts" >
    Phone Directory
   </Header>
   <Button variant="new" size="lg" icons="plus" OnChangeHandler={()=>{navigate("/addcontact")}}>New</Button>
   <Form>
    <FormInput label="search" type="search" />
   </Form>
   
<ListCard />
        </>
  
        )
    }
    export default ContactList