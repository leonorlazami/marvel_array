import { useState } from "react";
import { useDispatch } from "react-redux";
import { characterActions } from "../store/character-slice";
import { fetchCharacterData } from "../store/character-actions";

function Search() {
  const dispatch = useDispatch();
  const [characterSearch, setCharacterSearch] = useState("");

  const handleChange = (e) => setCharacterSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(characterActions.setSearchValue(characterSearch));
    dispatch(fetchCharacterData(characterSearch, "nameStartsWith"));
    setCharacterSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-black"
        placeholder="Enter character name"
        onChange={handleChange}
        value={characterSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
