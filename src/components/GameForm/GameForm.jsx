import { dividerClasses } from "@mui/material";
import { useState } from "react";

const GameForm = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const game = {image, name, description}

    const response = await fetch('/api/games', {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()

    if (!response.ok) {
        setError(json.error)
    }
    if(response.ok) {
        setImage('')
        setName('')
        setDescription('')
        setError(null)
        console.log('new game added', json)   
    }
  }

  return (
    <form className="create-game" onSubmit={handleSubmit}>
      <label>Game Name</label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        name="name"
        type="text"
        placeholder="Name of game"
      />
      <label>Image URL</label>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        name="image"
        type="text"
        placeholder="Please insert image URL"
      />
      <label>Description</label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        name="description"
        placeholder="Description of game..."
      ></textarea>
      <button>Add Game</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};


export default GameForm;