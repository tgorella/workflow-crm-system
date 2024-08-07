import { tokenService } from '@/entities/Token'
import axios from 'axios'

export const $api = axios.create({
    baseURL:__API__,
})
export const http = axios.create({
    baseURL:__API__,
})
export const httpAuth = axios.create({
    baseURL: __API__,
})

http.interceptors.request.use(
    async function (config) {
        const expiresDate = tokenService.getExpiresDate()
        const refreshToken = tokenService.getRefreshToken()
        const isExpired = refreshToken && expiresDate < Date.now()

        if (isExpired) {
            const { data } = await httpAuth.post('/', 
                {
                    'query': 'mutation Mutation($refreshToken: String) { updateToken(refreshToken: $refreshToken) { accessToken refreshToken userId } }',
                    'operationName': 'Mutation',
                    'variables': { 'refreshToken': tokenService.getRefreshToken()},
                    
                })
            tokenService.setTokens(data.data.updateToken)
        }
        const accessToken = tokenService.getAccessToken()
        if (accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`,
            }
        }
        return config
    },
    function (error) {
        Promise.reject(error)
    }
)

http.interceptors.response.use(
    (res) => {
        // res.data = { content: res.data }
        return res
    },
    function (error) {
        const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
        if (!expectedErrors) {
            alert(error.response.data.message)
        }
        if (error.response.data.message === 'Bad token') {
            localStorage.clear()
            window.location.href = '/'
        }
        return Promise.reject(error)
    }
)

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
}

export default httpService
