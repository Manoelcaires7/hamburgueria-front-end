import { createBrowserRouter } from "react-router-dom";

import {Login, Checkout, Register, Home, Menu, Cart, CompletePayment} from '../containers';
import {Footer, Header} from '../components'

export const router = createBrowserRouter ([
    {
        path: '/login',
        element: <Login />,
    },
        {
        path: '/cadastro',
        element: <Register/>,
    },
    {
        path: '/',
        element: (
            <>
            <Header/>
            <Home/>
            <Footer/>
            </>
        ),
    },
    {
        path: '/cardapio',
        element: (
            <>
            <Header/>
            <Menu/>
            </>
        ),
    },
    {
        path: '/carrinho',
        element: <Cart/>
    },
    {
        path: '/checkout',
        element: <Checkout/>
    },
    {
        path: '/complete',
        element: <CompletePayment/>
    },

])