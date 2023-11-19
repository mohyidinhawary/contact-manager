import {Link} from "react-router-dom"
const NavBar:React.FunctionComponent=()=>{
    return(
   
        <div className="bg-black w-screen pt-8">
            <div className="mb-12">
  <Link to="/" className="text-white text-xl mt-12" >
    <i className="fa fa-mobile mx-2 text-yellow-400 " />
    Contact <span className="text-yellow-400">Manager</span>
    </Link>
    </div>
    </div>

        )
    }
    export default NavBar