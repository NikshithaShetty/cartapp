import axios from 'axios';
export const getApidata = () => {

    return async (dispatch, getState) => {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products')
        const product = await res.data;
        dispatch({
            type: "SET_PRODUCT",
            payload: product
        })

    }
}


export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE_ONE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}