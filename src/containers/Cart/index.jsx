import Logo from '../../assets/Logo1.svg'
import { Banner, Container, Content, Title } from './styles'

export function Cart (){
    return(
        <Container>
            <Banner>
                <img src={Logo} alt="logo-devburguer" />
            </Banner>
            <Title>Chekout  - Pedido</Title>
            <Content>

            </Content>
        </Container>
    )
}