import { client } from "./ApiClient"


export const executeBasicAuthenticationService
    = (token) => client.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
})