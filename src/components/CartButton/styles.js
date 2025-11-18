import styled from "styled-components";

export const ContainerButton = styled.button`
background-color: ${(props) => props.theme.purple};
width: 100%;
height: 50px;
border: 0;
border-radius: 9px;
font-size: 25px;
color: ${(props) => props.theme.white}; 
cursor: pointer;


&:hover{
    background-color: #${(props) => props.theme.secondDarkPurple};
}

`

