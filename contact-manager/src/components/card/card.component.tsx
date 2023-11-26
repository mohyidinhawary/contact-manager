import { Link } from "react-router-dom"
import user from "../../assets/user.png"
import Button from "../button/button.component"
const Card=()=>{

return(
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user} alt="user"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">+963949982511</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">BonnieGreen@gmail.com</span>
        <div className="flex mt-4 md:mt-6">
         <Link to="/editcontact">  <Button variant="show" size="lg" icons="eye" /  ></Link>
           <Button  variant="edit" size="lg" icons="edit" className="mx-2" />
           <Button  variant="delete" size="lg" icons="trash" />
        </div>
    </div>
</div>
)
}
export default Card