/*Esse container foi configurado para as rotas que possuem switch, dentro do diretorio /pages/home */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0px 10px 30px;
  box-sizing: border-box;

  @media (max-width: 890px) {
    padding: 0;
  }

  @media (max-width: 350px) {
    padding: 20px 10px 0 10px;
  }
`;
