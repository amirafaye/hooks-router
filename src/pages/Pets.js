import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { pets } from "../data/Pets";

function Pets() {
  const [petsData, setPetsData] = useState(pets);
  const [newPet, setNewPet] = useState({
    race: "",
    type: "",
    location: "",
    name: "",
  });
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const addNewPet = () => {
    setPetsData([...petsData, newPet]);
  };

  const filteredPets = petsData.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.location.toLowerCase().includes(search.toLowerCase()) ||
      pet.type.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <h1>Pets</h1>
      <input type='text' onChange={handleChangeSearch} />
      <CardList data={filteredPets} />
      <form>
        <input name='race' type='text' onChange={handleChange} />
        <input name='type' type='text' onChange={handleChange} />
        <input name='location' type='text' onChange={handleChange} />
        <input name='name' type='text' onChange={handleChange} />
        <button type='button' onClick={addNewPet}>
          Add Pet
        </button>
      </form>
    </>
  );
}

export default Pets;