import React, {useState} from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactComponent";
import axios from 'axios'


export default function PhoneBook ({ persons, setPersons }) {
    const [filter, setFilter] = useState("");

    return (
      <div>
        filter shown with <input onChange={(e) => setFilter(e.target.value)} />
        <h2> Add a New Contact </h2>
        <ContactForm persons={persons} setPersons={setPersons} />
        <h2>Numbers</h2>
        <ContactList persons={persons} setPersons={setPersons} filter={filter} />
      </div>
    )
}