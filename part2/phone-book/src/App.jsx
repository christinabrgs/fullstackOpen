import { useState, useEffect } from "react";
import PhoneBook from "./Phonebook";
import axios from "axios";
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
   personService
    .getAll()
    .then(initialContacts => {
      setPersons(initialContacts)
    })
    .catch(error => {
      console.error("Error:", error);
      // Handle error, e.g., show an alert or update state
      alert("An error occured. Please try again.");
    })
  }, []);

  console.log("render", persons.length, "contacts");

  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneBook persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;







/// old code
// const hook = () => {
//   console.log("effect");
//   axios
//     .get("http://localhost:3001/persons")
//     .then((response) => {
//       console.log("promise fulfilled");
//       setPersons(response.data);
//     })
//     .catch((error) => {
//       console.error("Error while retrieving data:", error);
//       // Handle error, e.g., show an alert or update state
//       alert("Failed to retrieve contacts. Please try again.");
//     });
// };

// useEffect(hook, []);