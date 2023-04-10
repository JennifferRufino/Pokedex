import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavProps {
  fontSize?: number;
  lineheight?: number;
  color?: string;
}

interface TotalPokemonsPops {
  totalPokemons: number;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background: #6a7dfe;
  padding: 0 1rem;
  background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
  background: -o-linear-gradient(to left, #21d4fd, #b721ff);
  background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
  background: linear-gradient(to left, #21d4fd, #b721ff);
`;

export const CustomLink = styled(Link)<NavProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineheight}px;
  color: ${(props) => props.color};
`;

export const NavHeader = styled.header<NavProps>`
  font-weight: 500;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineheight}px;
  color: ${(props) => props.color};
`;

export const CustomButton = styled.button`
border: none;
  border-radius: 64px;
  cursor: pointer;
`;

export const CustomIcon = styled.div`
  display: "flex";
  flex-direction: "column";
  align-items: "center";
  justify-content: "center";
  border-radius: "24px";
  background: "white";
`;

export const TotalPokemonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: white;
  border-radius: 64px;
  padding: 8px 20px;

  span:nth-child(2) {
    margin-left: -2px;
    margin-bottom: 20px;
    color: black;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TotalPokemons = styled.span<TotalPokemonsPops>`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  color: black;

  &::after {
    content: ${(props) => props.totalPokemons};
    font-size: 12px;
    position: absolute;
    top: 16px;
  }
`;

export const Image = styled.img``
