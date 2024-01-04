import Header from "../../components/header/header.component"
import ViewCard from "../../components/view-card/view-card.component"
import { useParams } from "react-router-dom"

const ViewContact=()=>{
    const {id}=useParams();
    const parsedId = Number(id);
console.log(id);
    return(
        <>
        <Header variant="view" >View Contact</Header>
   <ViewCard ContactId={parsedId} />
   </>
        )
    }
    export default ViewContact