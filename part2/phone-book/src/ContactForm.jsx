import React, { useState } from "react";
import axios from "axios";
import personService from "./services/persons";

const ContactForm = ({ persons, setPersons }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
    id: generateUniqueId(),
  });

  function generateUniqueId() {
    return String(Date.now() + persons.length + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isFormInvalid()) {
      return;
    }

    postNewContact();
  }

  function isFormInvalid() {
    if (newContact.name === "") {
      alert("Name cannot be empty");
      return true;
    }

    const existingContact = persons.find(
      (person) => person.name === newContact.name
    );

    if (existingContact) {
      // Ask for confirmation to update contact
      const updateConfirmed = window.confirm(
        `${newContact.name} is already added to the phonebook, do you want to update the number?`
      );

      if (updateConfirmed) {
        personService
          .update(existingContact.id, newContact)
          .then((response) => {
            const updatedPersons = persons.map((person) =>
              person.id === existingContact.id ? response : person
            );
            setPersons(updatedPersons);
            setNewContact({ name: "", number: "", id: generateUniqueId() });
          })
          .catch((error) => {
            console.error("Error updating contact:", error);
            alert("Failed to update contact. Please try again.");
          });
      } else {
        return true; // User canceled the update
      }
    }
  }

  function postNewContact() {
    personService
      .create(newContact)
      .then((response) => {
        setPersons(persons.concat(response));
        setNewContact({ name: "", number: "", id: generateUniqueId() });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, e.g., show an alert or update state
        alert("An error occured. Please try again.");
      });
  }

  // const updatedPersons = [...persons, newContact];
  // setPersons(updatedPersons);
  // setNewContact({ name: "", number: "", id: generateUniqueId() });

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

// old code
// function postNewContact() {
//   axios
//     .post("http://localhost:3001/persons", newContact)
//     .then((response) => {
//       setPersons(persons.concat(response.data));
//       setNewContact({ name: "", number: "", id: generateUniqueId() });
//     })
//     .catch((error) => {
//       console.error("Error while posting data:", error);
//       // Handle error, e.g., show an alert or update state
//       alert("Failed to add new contact. Please try again.");
//     });
// }
