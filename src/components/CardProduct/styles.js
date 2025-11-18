import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
padding: 20px;
border-radius: 8px;
background-color: ${(props) => props.theme.white};
cursor: grab;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: relative;



div{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3px;
}

p{
    font-size: 16px;
    color: ${(props) => props.theme.oranje};
    line-height: 20px;
    font-weight: 700;
    margin-top: 40px;
}

strong{
    font-size: 20px;
    color: ${(props) => props.theme.black};
    font-weight: 800;
    line-height: 20px;
}

`;

export const CardImage = styled.img`
height: 58%;
position: absolute;
top: -60px;
bottom: 10px;
`;