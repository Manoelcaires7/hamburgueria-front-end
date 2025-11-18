import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left{
        left:15px;
        top:10px;
    }
    .react-multiple-carousel__arrow--right{
        right:15px;
        top:10px;
    }


    padding-left: 40px;
    cursor: grab
`;

export const Title = styled.h2`
font-size: 35px;
font-weight: 800;
color: ${(props) => props.theme.purple};
padding-bottom: 12px;
position: relative;
text-align: center;
margin-bottom: 40px;
margin-top: 20px;

&::after{
    content: '';
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
}

`;

export const ContainerItems = styled.div`
background: url('${(props) => props.imageUrl}');
background-position: center;
background-size: cover;
border-radius: 20px;

display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 250px;

`;

export const CategoryButton = styled(Link)`
color: ${(props) => props.theme.white};
background-color: rgba(0, 0, 0, 0.5);
padding: 10px 30px;
border-radius: 30px;
font-size: 22.5px;
font-weight: 500;
text-decoration: none;

&:hover{
    background-color: ${(props) => props.theme.purple};
}

`;

export const ButtonClose = styled.button`
position: absolute;
top: 20px;
right: 20px;
color: ${(props) => props.theme.white};
background-color: rgba(61, 60, 60, 0.3);
padding: 10px 30px;
border-radius: 25px;
font-size: 25px;
font-weight: 700;
text-decoration: none;
border: none;

&:hover{
    background-color: red;
}

`;