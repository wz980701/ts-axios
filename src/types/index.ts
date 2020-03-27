export type Method = 'get' | 'GET' |
'post' | 'POST' |
'options' | 'OPTIONS' |
'delete' | 'DELETE' |
'put' | 'PUT' |
'head' | 'HEAD'

export interface AxiosRequestConfig {
    url: string
    params?: any
    data?: any
    method?: string
    headers?: any
    responseType?: XMLHttpRequestResponseType
    timeout?: number
}

export interface AxiosResponse {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {
}

export interface AxiosError extends Error {
    config: AxiosRequestConfig
    code?: string
    request?: any
    response?: AxiosResponse
    isAxiosError: boolean
}