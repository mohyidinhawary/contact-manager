import Card from "../card/card.component"
import user from "../../assets/user.png"
import Button from "../button/button.component"
import { useNavigate } from "react-router-dom"
const ListCard=()=>{
    const navigate=useNavigate();
return(
    <Card  >
  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user} alt="user"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">+963949982511</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">BonnieGreen@gmail.com</span> 
   
        <div className="flex mt-4 md:mt-6">
           <Button  variant="show" size="lg" icons="eye" OnChangeHandler={()=>{navigate("/viewcontact")}}  />
           <Button   variant="edit" size="lg" icons="edit" className="mx-2" OnChangeHandler={()=>{navigate("/editcontact")}}  />
           <Button  variant="delete" size="lg" icons="trash"  /> 
           
         </div>
    </Card>
)
}
export default ListCard