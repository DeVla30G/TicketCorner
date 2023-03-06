import TypeData from "../types/api.types";
import { apiUrl } from "./axios-ask";

class axiosRequest {

conAll () {
    return apiUrl.get<Array<TypeData>>('/concerts');
}

conId (id: string) {
    return apiUrl.get<TypeData>(`/concerts/${id}`);
}

conCreate (data: TypeData) {
    return apiUrl.post<TypeData>('/concerts', data);
}

conUpdate (data: TypeData, id: any) {
    return apiUrl.put<any>(`/concerts/${id}`, data);
    
}

conDelete (id: any) {
    return apiUrl.delete<any>(`/concerts/${id}`);
}

getAllUsers () {
    return apiUrl.get<Array<TypeData>>('/users');

}

getUser (id:any) {
    return apiUrl.get<TypeData>(`/users/${id}`);

}

userCreate (data: TypeData) {
    return apiUrl.post<TypeData>('/users', data);

}

userUpdate (data: TypeData, id: any) {
    return apiUrl.put<any>(`/users/${id}`, data);
}

userDelete (id: any) {
    return apiUrl.delete<any>(`/users/${id}`);

}

}
export default axiosRequest; 
