import { useEffect } from "react";
import { useState } from "react";
import {api} from "../../services/api";


export function CategoriesCarousel(){
const [categories, setCategories] = useState([]);

useEffect(() => {

    async function loadCateories(){
        const {data} = await api.get('/categories');

        setCategories(data);
        console.log(data);

    }
loadCateories();
}, []);



    return (
        <div>
            <h1>Olá</h1>
        </div> 
    )
}