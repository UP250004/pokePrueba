"use client"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [results, setResults] = useState<Pokemon[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0";
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setResults(data.results);
    } catch (e) {
      alert(`Error: ${e}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonGroup}>
        <button onClick={() => navigate("/new-screen")}>New Screen</button>
        <button onClick={() => navigate("/pokemon/charizard")}>Dynamic Route (Charizard)</button>
      </div>

      <div style={styles.scrollContainer}>
        {results.map((pokemon) => (
          <PokemonCard 
            key={pokemon.name} 
            name={pokemon.name}
            imageUrl={pokemon.url} 
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px', fontFamily: 'Arial' },
  buttonGroup: { marginBottom: '20px', display: 'flex', gap: '10px' },
  scrollContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }
};