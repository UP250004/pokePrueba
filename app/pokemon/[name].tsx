"use client"
import { useParams } from 'react-router-dom'; // Importación correcta para web
import { useEffect, useState } from 'react';
interface PokemonInfo {
    id: number,
    name: string,
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    },
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
}
export default function PokemonData() {
    // useParams devuelve un objeto con los parámetros de la URL
    const { name } = useParams(); 
    const [pokemonDetails, setPokemonDetails] = useState<PokemonInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const getPokemonData = async () => {
        if (!name) return; // Seguridad por si el nombre llega vacío

        try {
            setLoading(true);
            // Usamos la variable 'name' que viene de la URL
            const URL = `https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`;
            const response = await fetch(URL);
            const data = await response.json();
            setPokemonDetails(data);
        } catch (e) {
            console.error("Error capturando pokemon:", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPokemonData();
    }, [name]); // Se vuelve a ejecutar si el nombre en la URL cambia.tsx]

    if (loading) return <div>Cargando...</div>;
    if (!pokemonDetails) return <div>No hay datos.</div>;

    return (
        <div style={{}}>
            <h1 style={{ textTransform: 'uppercase' }}>{pokemonDetails.name}</h1>
            
            <img 
                src={pokemonDetails.sprites.other.dream_world.front_default} 
                alt={pokemonDetails.name}
                style={{ width: '250px' }}
            />

            <div style={styles.infoCard}>
                <h3>Habilidades:</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {pokemonDetails.abilities.map((item, index) => (
                        <span key={index} style={styles.badge}>
                            {item.ability.name.replace('-', ' ')}
                            {item.is_hidden && <small> (Oculta)</small>}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' },
    infoCard: { background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
    badge: { background: '#ef5350', color: 'white', padding: '5px 12px', borderRadius: '20px', textTransform: 'capitalize' }
};