import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    keepUnusedDataFor: "1",
    endpoints: (builder) => ({
        getProducts: builder.query({
            query() {
                return {
                    url: "products",
                    method: "GET"
                }
            }

        }),
        getProductById:builder.query({
            query(id){
                return{
                    url:`/products/${id}`,
                    method:"GET"
                }
            }
        })
    })
})

export const { useGetProductsQuery,useGetProductByIdQuery} = productsApi;