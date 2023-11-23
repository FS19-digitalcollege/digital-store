import { useQuery } from "react-query"
import { API } from "../services"

export const useCategorias = () => {
   return useQuery(['categorias'], async () => {
    const response = await API.get('categorias');
    return response.data;
   });
}