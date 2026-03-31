"use client"
import React from "react";
import { useNavigate } from "react-router-dom";

interface PokemonCardProps {
    name: string;
    imageUrl: string;
}

export default function PokemonCard(props: PokemonCardProps) {
    const navigate = useNavigate();

    // Lógica de extracción de ID (se mantiene igual que en tu archivo original)
    const urlPartida = (props.imageUrl || "").split("/"); 
    
    const filtro = urlPartida.filter((blanco) => blanco !== "");
    const id = filtro.at(5);
    const finalImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div 
            onClick={() => navigate(`/pokemon/${props.name}`)} 
            style={styles.cardContainer}
        >
            <img 
                src={finalImageUrl} 
                alt={props.name}
                style={styles.pokemonImage} 
            />
            <div style={styles.pokemonName}>
                <strong>{props.name}</strong>
                <div style={styles.urlText}>{props.imageUrl}</div>
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c8c8c',
        borderRadius: '10px',
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(53, 0, 144, 0.2)',
        transition: 'transform 0.2s ease',
    },
    pokemonImage: {
        width: '100px',
        height: '100px',
        objectFit: 'contain',
    },
    pokemonName: {
        textAlign: 'center',
        fontSize: '16px',
        textTransform: 'capitalize',
        marginTop: '5px',
        color: '#000',
        wordBreak: 'break-all' // Para que la URL larga no rompa el diseño
    },
    urlText: {
        fontSize: '10px',
        marginTop: '4px',
        fontWeight: 'normal'
    }
};