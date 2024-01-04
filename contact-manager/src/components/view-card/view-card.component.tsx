import Card from "../card/card.component"
import Button from "../button/button.component"
import { useNavigate } from "react-router-dom"
import user from "../../assets/user.png"
import { useContext } from "react"
import { ContactsContext } from "../../context/contact"
interface IViewCardProps{
    ContactId:number
}
const ViewCard=({ContactId}:IViewCardProps)=>{
    const navigate=useNavigate();
    const { getContactById } = useContext(ContactsContext);
    const Contact = getContactById(ContactId);
   

return(
    <Card >
        <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src={user} alt="user"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{Contact?.name}</h5>
        <span className="text-md text-black-500 dark:text-black-500">{Contact?.phone}</span>
        <span className="text-md text-black-500 dark:text-black-500">{Contact?.email}</span> 
        <span className="text-md text-black-500 dark:text-black-500">{Contact?.website}</span>
        {/* <span className="text-md text-black-500 dark:text-black-500">BonnieGreen@gmail.com</span> 
        <span className="text-md text-black-500 dark:text-black-500">+963949982511</span>
        <span className="text-md text-black-500 dark:text-black-500">BonnieGreen@gmail.com</span>  */}
   
        <div className="flex mt-4 md:mt-6">
           <Button  variant="back" size="lg"  OnChangeHandler={()=>{navigate("/")}}  >Back</Button>
           
           
         </div>
    </Card>
)
}
export default ViewCard