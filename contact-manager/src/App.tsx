
import {Outlet} from "react-router-dom"
import NavBar from "./components/navbar/navbar.component"
const App=()=> {
 

  return (
    <>
    <NavBar />
      <Outlet/>
    </>
  )
}

export default App
