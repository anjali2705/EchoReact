//For Add Item to cart

export const addCart = (product) => {
    return{
        type :"ADDITEM",
        payload : product
    }
}

//For Delete Item to cart
export const deleteCart = (product) => {
    return{
        type :"DELITEM",
        payload : product
    }
}