"use client"
import { useState, useEffect } from "react";
// CAMBIO: Importar desde next/navigation
import { useRouter } from "next/navigation"; 
import PokemonCard from "../components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [results, setResults] = useState<Pokemon[]>([]);
  const router = useRouter(); // Cambiado

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
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
        {/* CAMBIO: router.push en lugar de navigate */}
        <button onClick={() => router.push("/screenNew")}>New Screen</button>
        <button onClick={() => router.push("/pokemon/charizard")}>Charizard</button>
      </div>
      {/* ... mapeo de resultados */}
    </div>
  );
}

const styles = {
  container: { padding: '20px', fontFamily: 'Arial' },
  buttonGroup: { marginBottom: '20px', display: 'flex', gap: '10px' },
  scrollContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }
};