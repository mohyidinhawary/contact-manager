import {Link} from "react-router-dom"
import { NavContainer, NavContent } from "./navbar.style"
const NavBar=()=>{
    return(
   
        <NavContainer>
            <NavContent>
            <Link to="/" className="text-white text-xl " >
    <i className="fa fa-mobile mx-2 text-yellow-400 " />
    Contact <span className="text-yellow-400">Manager</span>
    </Link>
            </NavContent>
        </NavContainer>
  
   
   

        )
    }
    export default NavBar