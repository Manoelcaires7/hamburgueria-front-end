import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import { Container, LeftContainer, RightContainer, Title, InputContainer, Form } from "./styles"
import Logo from "../../assets/Logo1.svg"
import { Button } from "../../components/Button";

export function Login() {

    const schema = yup.object({
        email: yup.string().email('Por favor, digite seu email').required('O Email é OBRIGATÓRIO'),
        password: yup.string().min(6, 'Sua senha, deve ter, no minímo, 6 caracteres').required('A Senha é OBRIGATÓRIA'),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {
        const response = await toast.promise(api.post("/session", {
            email: data.email,
            password: data.password,
        }),
        {
        pending: 'Estamos verificando seus Dados! ⏳',
        success: 'Oi, Seja Bem Vindo(a)! 🎉',
        error: 'Email ou Senha Inválidos!🤔'
        }
        )





        console.log(response);
    };

    console.log(errors);

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-dev" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>

                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p> Não tem conta? <a>Clique aqui!</a></p>
            </RightContainer>
        </Container>
    );
}
