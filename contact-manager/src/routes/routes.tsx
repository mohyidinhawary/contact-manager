import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddContact from "../pages/add-contact/add-contact";
import ContactList from "../pages/contact-list/contact-list";
import EditContact from "../pages/edit-contact/edit-contact";
import ViewContact from "../pages/view-contact/view-contact";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
{
    path:"/addcontact",
    element:<AddContact />,
},
{
    path:"/contacts",
    element:<ContactList />,
},
{
    path:"/editcontact",
    element:<EditContact />,
},
{
    path:"/viewcontact",
    element:<ViewContact />,
},
        ]
    }
])