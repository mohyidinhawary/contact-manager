
import {Outlet} from "react-router-dom"
import NavBar from "./components/navbar/navbar"
const App=()=> {
 

  return (
    <>
    <NavBar />
      <Outlet/>
    </>
  )
}

export default App
