import React from "react";

function ContactList({ contacts }) {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Lista Contatti</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className="mb-1">
            {contact.name} - {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
