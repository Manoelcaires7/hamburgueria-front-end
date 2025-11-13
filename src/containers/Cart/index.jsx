import Logo from '../../assets/Logo1.svg'
import { CartItems, CartResume } from '../../components/'
 import { Banner, Container, Content, Title } from './styles'

export function Cart (){
    return(
        <Container>
            <Banner>
                <img src={Logo} alt="logo-devburguer" />
            </Banner>
            <Title>Chekout  - Pedido</Title>
            <Content>
                <CartItems/>
                <CartResume/>
            </Content>
        </Container>
    )
}