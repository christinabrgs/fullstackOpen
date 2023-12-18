import { useState } from "react";
import button from "./button";
import Button from "./button";
import Header from "./Header";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const pointsCopy = [...points];

  const handleVote = () => {
    pointsCopy[selected] += 1;

    setPoints(pointsCopy);
    console.log("this is the score", pointsCopy);
  };

  return (
    <div>
      \
      <Header text="Anecdote of the Day" />
      {anecdotes[selected]}
      <p> Votes: {pointsCopy[selected]} </p>
      <Button
        text="Random Anecdote"
        onClick={() => setSelected(Math.round(Math.random() * 7))}
      />
      <Button text="Vote" onClick={handleVote} />
      {console.log("selected", selected)}
      <br />
      <Header text="Anecdote With the Most Votes" />
      {anecdotes[pointsCopy.indexOf(Math.max(...pointsCopy))]}
    </div>
  );
}

export default App;
