import { useNavigate } from "react-router-dom";

const Search = ({ searchQuery, setSearchQuery }) => {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    history(`?beer_name=${searchQuery}`);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <br />
        <input
          style={{ padding: ".5rem" }}
          type="text"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          id="header-search"
          placeholder="Seach for beers..."
          name="s"
        />
      </form>
    </div>
  );
};

export default Search;
