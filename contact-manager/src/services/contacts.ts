
import BaseService from "../utilits/reuest";
class ContactService extends BaseService {

    constructor(){
        super("")
    }

    getContacts() {
        return this.get("/users");
    }
    getContactById(ContactId:number) {
        return this.get(`/users/${ContactId}`);
    }

}

const contactService = new ContactService();

export {contactService }