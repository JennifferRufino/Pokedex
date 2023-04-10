import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar';
import { Input } from './style';
import { ListPokemon } from '../../components/ListPokemon';
import CardPokemon, { CardPokemonProps } from '../../components/PokemonCard';
import api from "../../services/api";
import { Loading } from '../../components/Loading';

export const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
  const [textoBusca, setTextoBusca] = useState("");
  

  async function getPokemonData() {
    const { data } = await api.get("pokemon?limit=151");

    const dadosCompletos = await Promise.all(
      data.results.map(async (result: { url: string }) => {
        const { data } = await api.get(result.url);

        return {
          id: data.id,
          name: data.name,
          types: data.types,
        };
      })
    );

    setPokemonList(dadosCompletos);
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemonData();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <NavBar />
      <Input
        type="text"
        placeholder="Procure um pokémon"
        value={textoBusca}
        onChange={(event) => setTextoBusca(event.target.value)}
      />

      <ListPokemon>
        {pokemonList
          .filter(
            (pokemon) =>
              pokemon.name.includes(textoBusca) ||
              String(pokemon.id) === textoBusca
          )
          .map((pokemon, index) => (
            <CardPokemon
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))}
      </ListPokemon>
    </>
  );
}
