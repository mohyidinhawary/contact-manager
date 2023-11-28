

import Header from "../../components/header/header.component"
import ListCard from "../../components/list-card/list-card.component"

const ContactList:React.FunctionComponent=()=>{
    return(
        <>
         <Header variant="contacts" >
    Phone Directory
   </Header>
<ListCard />
        </>
  
        )
    }
    export default ContactList