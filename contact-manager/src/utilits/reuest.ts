import axios, { AxiosRequestConfig } from 'axios';


class BaseService {
    baseUrl: string;

    constructor(controller: string) {
        let apiUrl = "https://jsonplaceholder.typicode.com"
        if (controller)
            this.baseUrl = `${apiUrl}/${controller}`;
        else
            this.baseUrl = `${apiUrl}`;
    }

    get<T = any>(route: string, config?: AxiosRequestConfig<any>) {
        return axios.get<T>(`${this.baseUrl}/${route}`, config);
    }

    delete<T = any>(route: string, config?: AxiosRequestConfig<any>) {
        return axios.delete<T>(`${this.baseUrl}/${route}`, config);
    }

    post<T = any>(route: string, input: any, config?: AxiosRequestConfig<any>) {
        return axios.post<T>(`${this.baseUrl}/${route}`, input, config);
    }

    put<T = any>(route: string, input: any, config?: AxiosRequestConfig<any>) {
        return axios.put<T>(`${this.baseUrl}/${route}`, input, config);
    }

    patch<T = any>(route: string, input: any, config?: AxiosRequestConfig<any>) {
        return axios.patch<T>(`${this.baseUrl}/${route}`, input, config);
    }
}



export default BaseService;
