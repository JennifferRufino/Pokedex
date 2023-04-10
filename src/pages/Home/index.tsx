import React from "react";
import NavBar from "../../components/NavBar";
import { Container, ContainerHome, HomeLinkBtn, WrapperH1, WrapperH2, WrapperHome } from "./style";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <ContainerHome>
          <WrapperHome>
          <WrapperH1>Pokedéx</WrapperH1>   
          <WrapperH2>Sejam bem-vindos</WrapperH2>  
          <HomeLinkBtn to={"/list"}>
            Confira os pokémons
          </HomeLinkBtn>
          </WrapperHome>
        </ContainerHome>
      </Container>
    </>
  );
};
