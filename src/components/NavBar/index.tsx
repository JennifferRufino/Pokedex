import { useSelector } from "react-redux";
import { StoreState } from "../../redux";
import {
  Nav,
  CustomLink,
  TotalPokemons,
  TotalPokemonsDiv,
  CustomIcon,
  Image,
  CustomButton,
} from "./style";
import Logo from "../../assets/pokeball.png";
import { BiChevronLeft } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const totalPokemons = useSelector((state: StoreState) => state.favorite);

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Nav
      style={{
        justifyContent: location.pathname !== "/" ? "space-between" : "center",
      }}
    >
      {location.pathname !== "/" ? (
        <>
          {location.pathname !== "/favorite" ? (
            <CustomButton onClick={handleGoBack}>
              <CustomIcon>
                <BiChevronLeft size={32} />
              </CustomIcon>
            </CustomButton>
          ) : (
            <CustomButton onClick={handleGoBack}>
              <CustomIcon>
                <BiChevronLeft size={32} />
              </CustomIcon>
            </CustomButton>
          )}

          {location.pathname !== "/favorite" ? (
            <CustomLink to="/favorite" fontSize={16} lineheight={21}>
              <TotalPokemonsDiv>
                <TotalPokemons totalPokemons={totalPokemons.length}>
                  Acessar favoritos
                </TotalPokemons>
                <span>{totalPokemons.length}</span>
              </TotalPokemonsDiv>
            </CustomLink>
          ) : null}
        </>
      ) : (
        <Image src={Logo} alt="" />
      )}
    </Nav>
  );
};

export default NavBar;
