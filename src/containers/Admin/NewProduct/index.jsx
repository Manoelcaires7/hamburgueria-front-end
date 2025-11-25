import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react";
import { Container, ErrorMessage, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const schema = yup.object({
        name: yup.string().required("Digite o nome do Produto!"),
        price: yup.number().positive().required("Digite o Preço do Produto").typeError("Digite o Preço do Produto"),
        category: yup.object().required("Escolha a categoria"),
        file: yup.mixed().test("required", "Escolha um arquivo para continuar", (value) => {
            return value && value.length > 0;
        }).test("fileSize", "Carregue um arquivo de até 5mb", (value) => {
            return value && value.length > 0 && value[0].size <= 5 * 1024 * 1024;
  })
    });

export function NewProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]); 

useEffect(() => {
  async function loadCategories(){
        const {data} = await api.get('categories');
        
        setCategories(data)
  }
  loadCategories()
}, []);



    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <InputGroup>
                <Label>Nome</Label>
                <Input type='text' {...register('name')}/>
                <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                <Label>Preço</Label>
                <Input type='number' {...register('price')}/>
                <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                <LabelUpload>
                    <ImageIcon/>
                    <input type="file"
                    {...register('file')}
                    accept="image/png, image/jpeg, image/svg"
                    onChange={(value) => {
                        setFileName(value.target.files[0]?.name);
                    register('file').onChange(value)
                    }}
                    />

                    {fileName || "Upload do Produto"}
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </LabelUpload>
                </InputGroup>

                <InputGroup>
                <Label>Categoria</Label>
                <Controller
                name='category'
                control={control}
                render={(field) => (
                <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder='Categorias'
                menuPortalTarget={document.body}
                />
            )}
        />
        <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

            <SubmitButton>
                Adicionar Produto
            </SubmitButton>
            </Form>
        </Container>
    )
}