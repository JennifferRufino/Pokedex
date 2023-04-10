import styled from "styled-components";
import { Link } from "react-router-dom";

interface HomeProps {
  fontSize?: number;
  lineheight?: number;
  color?: string;
}

export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  color: #17171b;
  max-width: 700px;
  margin: 160px 0px 80px;
  @media only screen and (max-width: 400px) {
    font-size: 32px;
    line-height: 40px;
    margin: 80px 0 60px;
  }
`;

export const CustomLink = styled(Link)<HomeProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineheight}px;
  color: ${(props) => props.color};
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ContainerHome = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const WrapperH1 = styled.h1`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
    color: #3482D5;
`;

export const WrapperH2 = styled.h3`
    text-transform: uppercase;
    text-align: center;
`;

export const WrapperHome = styled.div`
  width: 390px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const HomeLinkBtn = styled(Link)`
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #6a7dfe;
  margin-top: 1rem ;
  background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
  background: -o-linear-gradient(to left, #21d4fd, #b721ff);
  background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
  background: linear-gradient(to left, #21d4fd, #b721ff);
`;
