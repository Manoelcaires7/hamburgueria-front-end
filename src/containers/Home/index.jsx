import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container, Content } from "./styles";



export function Home(){
    return (
        <main>
        <Banner>
        <h1>Olá Mundo!</h1>
        </Banner>

        <Container>
            <Content>
                <CategoriesCarousel/>
               <div>Carrossel de Categorias</div> 
               <div>Carrossel de Produtos</div>
            </Content>
        </Container>
        
        </main>
    )
}