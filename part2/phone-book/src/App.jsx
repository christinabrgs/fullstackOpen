import { useState } from "react";
import PhoneBook from "./Phonebook";

const App = () => {

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "049-231-2344", id: 1 },
  ]);


  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneBook persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
