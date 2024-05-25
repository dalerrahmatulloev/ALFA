import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const filmsAPI = createApi({
  reducerPath: 'filmsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/data' }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: (search) => '',
    }),
  }),
})

export const { useGetFilmsQuery } = filmsAPI