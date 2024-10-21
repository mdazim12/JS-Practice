
    const getStoredCart = () =>{
        const storedCartString = localStorage.getItem('cart');
        if(storedCartString){
            return JSON.parse(storedCartString)
            

        }
        return [];
    }

    const saveCartLS = cart  =>{
        const cartSignified = JSON.stringify(cart);
        
        localStorage.setItem('cart' , cartSignified)
    }


    const addLS = (id) => {
        const cart = getStoredCart();
        cart.push(id);
        saveCartLS(cart);
    }

    export {addLS, getStoredCart};
