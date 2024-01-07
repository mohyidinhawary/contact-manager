import { createContext, useState, ReactNode, useEffect } from 'react';
import { contactService } from '../services/contacts';
import { AxiosResponse } from 'axios';

export interface Contact {
  id?:  number;
  name: string;
  username: string;
  email: string;
  phone:string;
  website:string;
  
}

interface ContactsContextProps {
  Contacts: Contact[];
  getContactById: (id: number) => Contact | undefined;
  deleteContact: (id: number) => void;
  addNewContact: (contactData: Contact) => void;
  UpdateContact: (ucontactData: Contact,id:number) => void;
}

interface ContactsProviderProps {
  children: ReactNode;
}

export const ContactsContext = createContext<ContactsContextProps>({
  Contacts: [],
  getContactById: () => undefined,
  deleteContact: () => {},
  addNewContact: () => {},
  UpdateContact:() =>{}
});

export const ContactsProvider = ({ children }: ContactsProviderProps) => {
  const [Contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response: AxiosResponse<Contact[]> = await contactService.getContacts();
        console.log(response.data);
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    

    fetchContacts();
   
  }, []);
  const getContactById = (id: number) => {
    return Contacts.find((contact) => contact.id === id);
  };
  const deleteContact = async (id:number) => {
    try {
      await contactService.deleteContact(id)
      setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const addNewContact=async(contactData:Contact)=>{
   
      try {
        const response = await contactService.addContact(contactData);
        const newContact: Contact = response.data; // Assuming the contact data is present in the `data` property of the response
        setContacts((prevContacts) => [...prevContacts, newContact]);
      } catch (error) {
        console.log(error);
      }
    
  };
  const UpdateContact = async (ucontactData: Contact,id:number) => {
    try {
      const response = await contactService.updateContact(ucontactData,id);
      const updatedContact = response.data;
  
      setContacts((prevContacts) => {
        const updatedContacts = prevContacts.map((contact) => {
          if (contact.id === updatedContact.id) {
            return updatedContact;
          }
          return contact;
        });
  
        return updatedContacts;
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const value: ContactsContextProps = { Contacts, getContactById,deleteContact,addNewContact,UpdateContact };
  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};