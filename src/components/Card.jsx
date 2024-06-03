import { useSelector } from "react-redux";

function Card() {
  const characters = useSelector((state) => state.characterData.characters);
  characters.map((char) => <div key={char.id}>{char.name}</div>);
}

export default Card;
