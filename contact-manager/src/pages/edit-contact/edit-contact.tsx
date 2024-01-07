import Header from "../../components/header/header.component"
import UpdateForm from "../../components/update-form/update-form.component"
import { useParams } from "react-router-dom"
const EditContact=()=>{
    const {id}=useParams();
    const parsedId = Number(id);

    return(
    <>
    <Header variant="edit">
Edit Contact
    </Header>
    <UpdateForm ContactId={parsedId} />
    </>
        )
    }
    export default EditContact