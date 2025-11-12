import { useContext, createContext, useEffect, useState } from "react";


const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cartProducts, setCartProduct] = useState([])

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductsInCart = [];
    if (cartIndex >= 0) {
      newProductsInCart = cartProducts;

      newProductsInCart[cartIndex].quantity =
        newProductsInCart[cartIndex].quantity + 1;

      setCartProduct(newProductsInCart);
    } else {
      product.quantity = 1
      newProductsInCart = [...cartProducts, product];
      setCartProduct(newProductsInCart);
    }

    updateLocalStorage(newProductsInCart);
  };


  const clearCart = () => {}

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== product.id)

    setCartProduct(newCart);
    updateLocalStorage(newCart);

  }

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
    })

    setCartProduct(newCart);
    updateLocalStorage(newCart);
  }

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);



    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
      });
      setCartProduct(newCart);
      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
};

  const updateLocalStorage = (products) => {
    localStorage.setItem("devburguer:cartInfo", JSON.stringify(products));
  };

  useEffect(() => {
    const clientCartData = localStorage.getItem("devburguer:cartInfo");
 
    if(clientCartData){
      setCartProduct(JSON.parse(clientCartData))
    }
},[])

  return (
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

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with a context ')
  }

  return context;
}