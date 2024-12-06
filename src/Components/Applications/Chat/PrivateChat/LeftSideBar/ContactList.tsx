import { ImagePath } from "@/Constant";
import { Contact } from "@/Types/Chat";
import Image from "next/image";
import React, { Fragment } from "react";
import { Col } from "reactstrap";

export const ContactList: React.FC<{ data: Contact[] }> = ({ data }) => {
  const groupedContacts = data.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, Contact[]>);

  const sortedKeys = Object.keys(groupedContacts).sort();

  return (
    <div className="contact-wrapper">
      {data?.length > 0 ? (
        sortedKeys.map((letter) => (
          <Fragment key={letter}>
            <p>{letter}</p>
            <ul className="border-0">
              {groupedContacts[letter].map((contact, index) => (
                <li className="common-space" key={`${letter}-${index}`}>
                  <div className="chat-time">
                    {contact.image && (
                      <Image
                        height={33}
                        width={33}
                        className="img-fluid rounded-circle"
                        src={`${ImagePath}/${contact.image}`}
                        alt="user"
                      />
                    )}
                    {contact.imageUser && (
                      <div className={`custom-name bg-light-${contact.color}`}>
                        <p className={`txt-${contact.color} f-w-500`}>{contact.imageUser}</p>
                      </div>
                    )}
                    <div>
                      <span>{contact.name}</span>
                      <p>{contact.phoneNumber}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fragment>
        ))
      ) : (
        <Col sm={12}>
          <div>
            <div className="search-not-found text-center p-5">
              <p>Sorry, Not Found Any Contact</p>
            </div>
          </div>
        </Col>
      )}
    </div>
  );
};

