import { React } from "react";
import personService from "./services/persons";

const ContactList = ({ persons, setPersons, filter, onDelete }) => {
  function handleClick(e) {
    const currentID = e.currentTarget.dataset.id;

    personService
      .remove(currentID)
      .then(() => {
        console.log("Resource deleted successfully");
        // You might want to update your component's state here or perform any other necessary actions
        setPersons((prevPersons) =>
          prevPersons.filter((person) => person.id !== currentID)
        );
      })
      .catch((error) => {
        console.error("Error deleting resource:", error.message);
        // Handle the error, e.g., show an alert or update state
        alert("An error occurred. Please try again.");
      });
  }

  return (
    <ul style={{ listStyleType: "none" }}>
      {persons
        .filter(
          (person) =>
            person.name &&
            person.name.toLowerCase().includes((filter || "").toLowerCase())
        )
        .map((person) => (
          <li key={person.id}>
            <button data-id={person.id} onClick={handleClick}>
              {" "}
              X{" "}
            </button>{" "}
            {person.name} {person.number}
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
