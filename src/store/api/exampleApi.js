import { baseApi } from './baseApi';

// Example: inject endpoints into baseApi for RTK Query
export const exampleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET /users
    getUsers: builder.query({
      query: () => '/users',
      // providesTags: (result) => result ? [{ type: 'User', id: 'LIST' }] : [],
    }),
    // GET /users/:id
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      // providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    // POST /users
    createUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
      // invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
} = exampleApi;
