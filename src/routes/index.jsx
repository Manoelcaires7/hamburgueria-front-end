import { Routes, Route } from "react-router-dom";
import {Login, Checkout, Register, Home, Menu, Cart, CompletePayment, Admin} from '../containers';
import { AdminLayout, UserLayout } from "../layouts";

export function Router(){
    return(
    <Routes>
        <Route path="/" element={<UserLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/cardapio" element={<Menu/>}/>
            <Route path="/carrinho" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/complete" element={<CompletePayment/>}/>        
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
            <Route path="/admin/home" element={<Admin/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Register/>}/>
    </Routes>

    )
};
