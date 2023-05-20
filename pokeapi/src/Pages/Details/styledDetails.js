import styled from "styled-components";

export const ContainerDetails = styled.div`
    background-color: gray;
    padding: 50px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center; 

`
export const PokeballD = styled.img`
position: absolute;
  right: 0px;
`
export const CardContainer = styled.div`
    padding: 30px 50px;
  width: 90vw;
  height: 90vh;
  background-color: green;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  margin: 50px;
  color:black;
`
export const PokemonNameD = styled.h1`
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
    color: black;
`
export const CardFront = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardBack = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FrontBackImg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

`
export const Pokemon = styled.img`
   height: 270px;
width: 270px;
`
export const BackeFrontImg = styled.img`
    width: 200px;
`
export const BaseStates = styled.div`
    background-color: white;
    width: 23vw;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`
export const Title = styled.h2`
   /*  margin-bottom: 150px; */
`

export const Moves = styled.div`
    background-color: white;
    width: 15vw;
    height: 40vh;
`
export const MovesPoke = styled.li`
    list-style: none;
    background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
    padding: 5px;
    margin: 10px;
    text-align: center;
    border-radius: 20px;
    width: 7em;
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const NameImg = styled.div`
    display: flex;
`
export const ProgressFill = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: ${({ value }) =>
    value > 60 ? 'gold' : value > 20 ? 'orangeRed' : 'red'};
  width: ${({ value }) => `${value}%`};
`;
export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: lightgray;
  margin-left: 10px;
`;
export const BaseList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Adicionado para alinhar verticalmente os itens */
  gap: 10px;
  box-sizing: border-box;
  padding: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; /* Adicionado para alinhar verticalmente os elementos */
  width: 14em;
  font-weight: bolder;
`;