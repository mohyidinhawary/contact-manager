
import BaseService from "../utilits/reuest";
import { Contact } from "../context/contact";
class ContactService extends BaseService {

    constructor(){
        super("")
    }

    getContacts() {
        return this.get("/users");
    }
   deleteContact(id:number){
    return this.delete(`/users/${id}`);
   }
addContact(contactData:Contact){
 return this.post("/users",contactData)   
}
updateContact(ucontactData:Contact,id:number){
    return this.put(`/users/${id}`,ucontactData);
}
}

const contactService = new ContactService();

export {contactService }