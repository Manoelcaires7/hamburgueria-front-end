import {useContext, createContext, useEffect, useState} from "react";


const CartContext = createContext({});

export const CartProvider = ({children}) =>{

const [cartProducts, setCartProduct] = useState([])

const putProductInCart = (product) =>{

}

const clearCart = () =>{

}

const deleteProduct = (product) =>{

}

const increaseProduct = (productId) =>{

}

const decreaseProduct = (productId

) =>{

}

return(
<CartContext.Provider value={{
    cartProducts,
    putProductInCart,
    clearCart,
    deleteProduct,
    increaseProduct,
    decreaseProduct 
    }}>

        {children}

</CartContext.Provider>
)
};

export const useCart = () =>{
    const context = useContext(CartContext);

    if(!context){
      throw new Error('useCart must be used with a context ')  
    }

    return context;
}