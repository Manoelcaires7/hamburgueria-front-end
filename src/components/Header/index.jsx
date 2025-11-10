import { Container, Navigation, HeaderLink, LinkContainer, Logout, Options, Profile } from "./styles";

import { userC } from "@phosphor-icons/react";

export function Header(){

return(
        <Container>
            <Navigation>
                <div>
                    <HeaderLink>Home</HeaderLink>
                    <HeaderLink>Cardápio</HeaderLink>

                </div>
            </Navigation>
            <Options>
                <Profile>
                <div>
                <p>
                Olá, <span>Manoel</span>
                </p> 
                <Logout>Sair</Logout>  
                </div> 
                </Profile>
            </Options>
            <LinkContainer>
            <HeaderLink>Carrinho</HeaderLink>
            </LinkContainer> 
        </Container>
    )

}