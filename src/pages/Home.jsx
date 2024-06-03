import { useEffect } from "react";
import Search from "../components/Search";
import { characterActions } from "../store/character-slice";
import { useDispatch } from "react-redux";
import { fetchCharacterData } from "../store/character-actions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacterData());
  }, [dispatch]);
  return (
    <div>
      <Search />
    </div>
  );
}

export default Home;
