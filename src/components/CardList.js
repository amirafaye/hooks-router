import { useLocation } from "react-router-dom";
import BasicCard from "./Card";
function CardList({ data }) {
  const location = useLocation();
  console.log("CardList", location);
  return (
    <div className='d-flex'>
      {data.map((card) => (
        <BasicCard key={card.id} data={card} path={location.pathname} />
      ))}
    </div>
  );
}

export default CardList;