import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Container, LeftContainer, RightContainer, Title, InputContainer, Form, Link } from "./styles"
import Logo from "../../assets/Logo1.svg"
import { Button } from "../../components/Button";

export function Register() {
    const navigate = useNavigate();

    const schema = yup.object({
        
        name: yup.string().required('O Nome é OBRIGATÓRIO'),

        email: yup.string().email('Por favor, digite seu email').required('O Email é OBRIGATÓRIO'),
        
        password: yup.string().min(6, 'Sua senha, deve ter, no minímo, 6 caracteres').required('A Senha é OBRIGATÓRIA'),

        confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('A Confirmação de Senha é OBRIGATÓRIA')
    })
    .required();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {

        try {
                   const {status} = await api.post("/users", {
            name: data.name,
            email: data.email,
            password: data.password,
        },

        {
            validateStatus:  () => true,
        },
    );
    
    if (status === 200 || status === 201) {
        setTimeout(() => {
            navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso')
    } else if(status === 400){
        toast.error('Email já cadastrado! Faça login para continuar')
    } else{
        throw new Error();
    }

} catch (error) {
        toast.error('😓, falha no sistema, Tente Novamente!')    
        }
};


    console.log(errors);

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-dev" />
            </LeftContainer>
            <RightContainer>
                <Title>Crie sua conta</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
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
                    <InputContainer>
                        <label>Confirmar a Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>
                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>
                Já possui contar? <Link to="/login">Clique aqui!</Link>
                </p>
            </RightContainer>
        </Container>
    );
}
