
import {Outlet} from "react-router-dom"
import NavBar from "./components/navbar/navbar.component"
import { ContactsProvider } from "./context/contact"
const App=()=> {
 

  return (
    <>
    <ContactsProvider>
    <NavBar />
      <Outlet/>
    </ContactsProvider>
    
    </>
  )
}

export default App
