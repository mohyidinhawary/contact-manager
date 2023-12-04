import Card from "../card/card.component"
import Button from "../button/button.component"
import { useNavigate } from "react-router-dom"
import user from "../../assets/user.png"
const ViewCard=()=>{
    const navigate=useNavigate();
return(
    <Card >
        <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src={user} alt="user"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-md text-black-500 dark:text-black-500">+963949982511</span>
        <span className="text-md text-black-500 dark:text-black-500">BonnieGreen@gmail.com</span> 
        <span className="text-md text-black-500 dark:text-black-500">+963949982511</span>
        <span className="text-md text-black-500 dark:text-black-500">BonnieGreen@gmail.com</span> 
        <span className="text-md text-black-500 dark:text-black-500">+963949982511</span>
        <span className="text-md text-black-500 dark:text-black-500">BonnieGreen@gmail.com</span> 
   
        <div className="flex mt-4 md:mt-6">
           <Button  variant="back" size="lg"  OnChangeHandler={()=>{navigate("/")}}  >Back</Button>
           
           
         </div>
    </Card>
)
}
export default ViewCard