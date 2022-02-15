import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import Search from "./Search";

const API_URL = "https://api.punkapi.com/v2/beers";

export default function App() {
  const [beers, setBeers] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get("beer_name");
  const [searchQuery, setSearchQuery] = useState(query || "");

  const getBears = async () => {
    const res = await axios.get(`${API_URL}`);
    setBeers(res.data);
  };

  useEffect(() => {
    getBears();
  });

  const filterBears = (beers, query) => {
    if (!query) {
      return beers;
    } else {
      return beers.filter((beer) => {
        const beerName = beer.name.toLowerCase();
        return beerName.includes(query);
      });
    }
  };

  const filteredBearsData = filterBears(beers, searchQuery);

  return (
    <Router>
      <div className="App">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {filteredBearsData.map((beer) => (
          <Card key={beer.id} item={beer} />
        ))}
      </div>
    </Router>
  );
}
