import { Container, Navigation, HeaderLink, LinkContainer, Logout, Options, Profile, Content } from "./styles";

import { UserCircleIcon, ShoppingCartIcon } from "@phosphor-icons/react";

export function Header() {

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink>Home</HeaderLink>
                        <hr></hr>
                        <HeaderLink>Cardápio</HeaderLink>

                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircleIcon color='##fff' size={24} />
                        <div>
                            <p>
                                Olá, <span>Manoel</span>
                            </p>
                            <Logout>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCartIcon color='##ffffff' size={24} />
                        <HeaderLink>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )

}