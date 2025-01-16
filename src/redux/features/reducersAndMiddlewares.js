import { productsApi } from "../api/product"





export const reducer={
    [productsApi.reducerPath]:productsApi.reducer


}

export const middlewares=[
    productsApi.middleware

]