// API 호출 함수
import axiosInstance from './axiosInstance';

interface ApiRequestOptions {
    method: 'GET' | 'POST';
    url: string;
    data?: unknown; // POST/PUT에서 보낼 데이터
    params?: Record<string, unknown>; // GET 쿼리 파라미터
    headers?: Record<string, string>; // 추가 헤더
}

export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
}

export const apiClient = async <T>(options: ApiRequestOptions): Promise<T> => {
    const { method, url, data, params, headers } = options;
    const response = await axiosInstance.request<T>({
        method,
        url,
        data,
        params,
        headers,
    });
    return response.data;
};

/**
 * 사용방법
    import { apiClient } from '@/api/apiClient';

    const fetchUsers = async () => {
    const users = await apiClient({
        method: 'GET',
        url: API_ENDPOINTS.USERS,
    });
    console.log(users);
    };

    import { apiClient } from '@/api/apiClient';
    import { API_ENDPOINTS } from '@/api/endpoints';

    const addProduct = async (productData: { name: string; price: number }) => {
    const response = await apiClient({
        method: 'POST',
        url: API_ENDPOINTS.PRODUCTS,
        data: productData,
    });
    console.log(response);
    };
 */