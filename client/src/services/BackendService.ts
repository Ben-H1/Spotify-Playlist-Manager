import axios, { AxiosRequestConfig } from 'axios';
import { backendUrl } from './constants';

const sanitizeEndpoint = (endpoint: string) => {
    return endpoint
        .replace(/(^\s*|\s*$)/g, '')
        .replace(/(^\/*|\/*$)/g, '')
        .replace(/\/+/g, '/');
};

export const getBackend = async (endpoint: string, config?: AxiosRequestConfig): Promise<any> => {
    const url = `${backendUrl}/${sanitizeEndpoint(endpoint)}`;
    const response = await axios.get(url, config);
    return response.data;
};
