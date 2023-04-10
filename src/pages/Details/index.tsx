import { useParams } from "react-router-dom";
import { CardPokemonProps } from "../../components/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux";
import { useEffect, useState } from "react";
import api from "../../services/api";
import NavBar from "../../components/NavBar";
import {
  Button,
  ButtonMobile,
  Card,
  Container,
  Label,
  Value,
  Image,
  Number,
  Title,
} from "./style";
import { Badge } from "../../components/Badge";
import { add, remove } from "../../redux/favoriteSlice";
import { Loading } from "../../components/Loading";

type DetailsProps = CardPokemonProps & {
  height: number;
  weight: number;
};

export const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listaPokemonsFavoritos = useSelector(
    (state: StoreState) => state.favorite
  );
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<DetailsProps>(
    {} as DetailsProps
  );

  function handleClickAdd() {
    dispatch(add(id));
  }

  function handleClickRemove() {
    dispatch(remove(id));
  }

  async function getPokemonData() {
    const { data } = await api.get("pokemon/" + id);

    setPokemonData({
      id: data.id,
      name: data.name,
      types: data.types,
      height: data.height / 10,
      weight: data.weight / 10,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemonData();
  }, []);

  if (isLoading) {
    
      return <Loading />;
   
    
  }

  return (
    <>
          <NavBar />
          <Container>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt={pokemonData.name}
            />

            <Card
              className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}
            >
              <Number>#{String(id).padStart(3, "0")}</Number>
              <Title>{pokemonData.name}</Title>
              {pokemonData.types.map((item, index) => {
                return <Badge key={index} name={item.type.name} />;
              })}

              <Label>Peso</Label>
              <Value>{pokemonData.weight}kg</Value>

              <Label>Tamanho</Label>
              <Value>{pokemonData.height}m</Value>

              {!!listaPokemonsFavoritos.find(
                (item) => String(item) === String(id)
              ) ? (
                <>
                  <Button onClick={handleClickRemove}>
                    Remover dos favoritos
                  </Button>
                  <ButtonMobile onClick={handleClickRemove}>-</ButtonMobile>
                </>
              ) : (
                <>
                  <Button onClick={handleClickAdd} style={{ color: "green" }}>
                    Adicionar aos favoritos
                  </Button>
                  <ButtonMobile onClick={handleClickAdd}>+</ButtonMobile>
                </>
              )}
            </Card>
          </Container>
    </>
  );
};
