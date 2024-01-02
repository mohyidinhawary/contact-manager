import { createContext, useState, ReactNode, useEffect } from 'react';
import { contactService } from '../services/contacts';
import { AxiosResponse } from 'axios';

interface Contact {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface ContactsContextProps {
  Contacts: Contact[];
}

interface ContactsProviderProps {
  children: ReactNode;
}

export const ContactsContext = createContext<ContactsContextProps>({
  Contacts: [],
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

  const value: ContactsContextProps = { Contacts };
  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};