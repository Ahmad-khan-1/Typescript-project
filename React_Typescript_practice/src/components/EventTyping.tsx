import { useState } from "react";

const EventTyping = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(name);

    setMessage("Your form is submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
};

export default EventTyping;
