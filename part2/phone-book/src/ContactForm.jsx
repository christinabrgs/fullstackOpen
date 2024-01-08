import React, { useState } from "react";

const ContactForm = ({ persons, setPersons }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
    id: generateUniqueId(),
  });

  function generateUniqueId() {
    return Date.now() + persons.length + 1;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      newContact.name === "" ||
      persons.some((person) => person.name === newContact.name)
    ) {
      alert(`${newContact.name} is already added to phonebook`);
      return;
    }

    const updatedPersons = [...persons, newContact];
    setPersons(updatedPersons);
    setNewContact({ name: "", number: "", id: generateUniqueId() });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          onChange={(event) =>
            setNewContact({ ...newContact, name: event.target.value })
          }
        />
      </div>
      <div>
        number:{" "}
        <input
          onChange={(event) =>
            setNewContact({ ...newContact, number: event.target.value })
          }
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default ContactForm;