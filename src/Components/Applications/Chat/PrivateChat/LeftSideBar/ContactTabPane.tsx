import SVG from "@/CommonComponents/SVG";
import { Href, NameAndPhoneNumber } from "@/Constant";
import React, { useEffect, useState } from "react";
import { Mic } from "react-feather";
import { Button, Input } from "reactstrap";
import { ContactList } from "./ContactList";
import { ContactWrapperData } from "@/Data/Chat";
import { Contact } from "@/Types/Chat";

const ContactTabPane = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const flattenedContacts = ContactWrapperData.flatMap((contactGroup) => contactGroup.contactData);
    const filtered = flattenedContacts?.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredContacts(filtered);
  }, [search]);

  return (
    <>
      <div className='common-space'>
        <p>Contacts</p>
        <div className='header-top'>
          <Button tag='a' color="light-primary" className='badge-light-primary f-w-500' href={Href}>
            <i className='fa fa-plus' />
          </Button>
        </div>
      </div>
      <div className='search-contacts'>
        <Input type='text' placeholder={NameAndPhoneNumber} onChange={(e) => setSearch(e.target.value)} />
        <SVG iconId='stroke-search' />
        <Mic className='mic-search' />
      </div>
      <ContactList data={filteredContacts} />
    </>
  );
};
export default ContactTabPane;
