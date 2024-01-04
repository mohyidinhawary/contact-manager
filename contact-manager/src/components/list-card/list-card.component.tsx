import Card from "../card/card.component"
import user from "../../assets/user.png"
import Button from "../button/button.component"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ContactsContext } from "../../context/contact"



interface IListCard{
  contact:any
}

const ListCard=({contact}:IListCard)=>{

  
    const navigate=useNavigate();
   const{id,name,email}=contact
   const{deleteContact}=useContext(ContactsContext);
   
return(
    <Card  >
  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user} alt="user"/>
        {/* <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{}</h5> */}
        <span className="text-sm text-gray-500 dark:text-gray-400">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span> 
   
        <div className="flex mt-4 md:mt-6">
           <Button  variant="show" size="lg" icons="eye" OnChangeHandler={()=>{navigate(`/viewcontact/${id}`)}}  />
           <Button   variant="edit" size="lg" icons="edit" className="mx-2" OnChangeHandler={()=>{navigate("/editcontact")}}  />
           <Button  variant="delete" size="lg" icons="trash" OnChangeHandler={()=>{deleteContact(id)}}  /> 
           
         </div>
    </Card>
)
}
export default ListCard