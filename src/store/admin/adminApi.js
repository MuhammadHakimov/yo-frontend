import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/api";

export const adminApi = createApi({
  reducerPath: "adminApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["Users", "Lessons", "Tests", "Tasks"],

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/admin/users",
      providesTags: ["Users"],
    }),

    getUserById: builder.query({
      query: (id) => `/admin/users/${id}`,
      providesTags: ["Users"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

    getLessons: builder.query({
      query: () => "/lessons",
      providesTags: ["Lessons"],
    }),

    getTests: builder.query({
      query: () => "/tests",
      providesTags: ["Tests"],
    }),

    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
  useGetLessonsQuery,
  useGetTestsQuery,
  useGetTasksQuery,
} = adminApi;