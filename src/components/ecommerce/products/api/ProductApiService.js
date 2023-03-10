import { apiClient } from "../../../../api/apiClient";

export const retrieveProductListApi = () => apiClient.get(`/api/products`)