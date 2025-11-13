import { Button } from "../Button";
import { Container } from "./styles";

export function CartResume() {
    return(
        <div>
        <Container>
            <div className="container-top">
                <h2 className="title">Resumo de Pedido</h2>
                <p className="items">Itens</p>
                <p className="items-price">R$ 20,00</p>
                <p className="delivery-tax">Taxa de Entrega</p>
                <p className="delivery-tax-price">R$ 10,00</p>
            </div>
            <div className="container-bottom">
                <p>Total</p>
                <p>R$ 30,00</p>
            </div>
        </Container>
        <Button>Finalizar Pedido</Button>
        </div>
    )
}