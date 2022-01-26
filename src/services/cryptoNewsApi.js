import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_NEWS_API_URL;
const api_key = process.env.REACT_APP_NEWSRAPIDAPI_KEY;
  
const createrequest =(url)=>({url});
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({category,count,page}) => createrequest(`/everything?q=${category}&apiKey=${api_key}&pageSize=${count}&page=${page}`),
        }),
    }),
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi