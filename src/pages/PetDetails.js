import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BasicCard from "../components/Card";
import { pets } from "../data/Pets";

const PetDetails = () => {
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const location = useLocation();
  console.log(params);
  useEffect(() => {
    setPet(pets.find((pet) => pet.id == params.id));
    setLoading(false);
  }, []);
  console.log(pet);
  console.log(pets.find((pet) => pet.id == params.id));
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='pet-details'>
      <BasicCard data={pet} path={location.pathname} />
    </div>
  );
};

export default PetDetails;