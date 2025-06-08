export const API_BASE_URL = 'http://localhost:8090/api/v1'

export const ENDPOINTS = {
    categories: `${API_BASE_URL}/category`,
    category: (id) => `${API_BASE_URL}/category/${id}`,
}
