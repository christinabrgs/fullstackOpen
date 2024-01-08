import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "049-231-2344", id: 1 },
  ]);
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
    id: generateUniqueId(),
  });

  const [filter, setFilter] = useState("");

  console.log(newContact);

  function generateUniqueId() {
    // Generate a unique ID based on the current timestamp and length of persons array
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

    // Create a new array with the existing persons and the new name
    const updatedPersons = [...persons, newContact];

    // Update the state with the new array
    setPersons(updatedPersons);

    // Clear the input field after adding the new name
    setNewContact({ name: "", number: "", id: generateUniqueId() });
  }

  console.log("these are the people", persons);


  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={(e) => setFilter(e.target.value)} />
      <h2> Add a New Contact </h2>
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
      <h2>Numbers</h2>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
    </div>
  );
};

export default App;
