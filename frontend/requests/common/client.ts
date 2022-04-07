import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

export class Client {
    private readonly _axios: AxiosInstance;

    constructor(
        baseURL: string,
        onBeforeRequest: () => void = () => {},
        onBeforeResponse: () => void = () => {},
        onResponseError?: (res?: any) => void,
    ) {
        this._axios = axios.create({ baseURL });

        this._axios.interceptors.request.use(
            (config) => {
                onBeforeRequest();
                return config;
            },
            (error) => {
                onBeforeResponse();
                return Promise.reject(error.response);
            },
        );

        this._axios.interceptors.response.use(
            (response) => {
                onBeforeResponse();
                return response;
            },
            (error) => {
                onBeforeResponse();
                onResponseError ? onResponseError(error.response) : Client.processResponseError(error.response);
                return Promise.reject(error);
            },
        );
    }

    private static processResponseError(e: { status: number; data: any }) {
        const { status, data } = e;

        switch (status) {
            case 999:
                return;
        }
    }

    async get<T>(url: string, params: object = {}, config?: AxiosRequestConfig): Promise<AxiosPromise<T>> {
        return await this._axios.get<T>(url, { params, ...config });
    }

    async post<T>(url: string, data: object = {}, params: object = {}, config?: AxiosRequestConfig): Promise<AxiosPromise<T>> {
        return await this._axios.post<T>(url, data, { params, ...config });
    }
}
