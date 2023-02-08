import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id:1,
            name:'carrot',
            price:7,
            image:'https://cdn.pixabay.com/photo/2015/03/14/14/00/carrots-673184__340.jpg'
          },
          {
            id:2,
            name:'potatoes',
            price:4,
            image:'https://cdn.pixabay.com/photo/2010/12/13/10/25/potatoes-2795__340.jpg'
          },
          {
            id:3,
            name:'tomates',
            price:6,
            image:'https://cdn.pixabay.com/photo/2019/05/29/19/04/tomatoes-4238247__340.jpg'
          }
    ]
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    }
});


export default productSlice.reducer;