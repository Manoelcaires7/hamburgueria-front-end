import { Container } from "../CardProduct/styles";
import Cart from "../../assets/carrinho-de-compras.svg"
import { ContainerButton } from "./styles";

export function CartButton({...props}) {
return (
    <ContainerButton {...props}>
        <img src={Cart} alt="Carrinho de compras" />
    </ContainerButton>
)
}