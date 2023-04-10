import { useEffect, useState } from "react";
import CardPokemon, { CardPokemonProps } from "../../components/PokemonCard";
import { StoreState } from "../../redux";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { NavBar } from "../../components/NavBar";
import { Title } from "../../components/Title";
import { ListPokemon } from "../../components/ListPokemon";
import { Loading } from "../../components/Loading";

export const Favorite = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
  const listaPokemonsFavoritos = useSelector(
    (state: StoreState) => state.favorite
  );

  async function getPokemonData() {
    const dadosCompletos = await Promise.all(
      listaPokemonsFavoritos.map(async (pokemonId) => {
        const { data } = await api.get("pokemon/" + pokemonId);

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

  if(isLoading) {
    return <Loading />
  }

  return (
    <>
      <NavBar />
      <Title text="Lista de favoritos" />
      {pokemonList.length === 0 ? (
        <p>Nenhum pokémon adicionado ainda...</p>
      ) : (
        <ListPokemon>
          {pokemonList.map((pokemon, index) => {
            return (
              <CardPokemon
                key={index}
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
              />
            );
          })}
        </ListPokemon>
      )}
    </>
  );
};
