import { client } from "./ApiClient"

export const retrieveAllTodosForUsernameApi
    = (username) => client.get(`users/${username}/todos`)

export const deleteTodoApi
    = (username, id) => client.delete(`users/${username}/todos/${id}`)

export const retrieveTodoApi
    = (username, id) => client.get(`users/${username}/todos/${id}`)

export const updateTodoApi
    = (username, id, todo) => client.put(`users/${username}/todos/${id}`, todo)

export const createTodoApi
    = (username, todo) => client.post(`users/${username}/todos`, todo)
    