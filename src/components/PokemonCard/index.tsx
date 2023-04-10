import { Link } from "react-router-dom";
import {Badge} from "../Badge";
import { Card, Title, Number, Image } from "./style"
import { Loading } from "../Loading";

interface PokemonTypeProps {
  type: {
    name: string;
  };
};

export interface CardPokemonProps {
  id: number;
  name: string;
  types: Array<PokemonTypeProps>;
};

function CardPokemon(props: CardPokemonProps) {
  return (
    <Link to={`/details/${props.id}`}>
      <Card className={`type--${props.types[0].type.name.toLowerCase()}`}>
        <div>
          <Number>
            #{String(props.id).padStart(3, "0")}
          </Number>
          <Title>{props.name}</Title>
          {props.types.map((item, index) => {
            return <Badge key={index} name={item.type.name} />;
          })}
        </div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
          alt={props.name}
        />
      </Card>
     </Link>
  );
}

export default CardPokemon;