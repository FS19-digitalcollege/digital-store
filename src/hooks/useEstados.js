import { useQuery } from "react-query"
import { API } from "../services"

export const useEstados = () => {
   return useQuery(['estados'], async () => {
    const response = await API.get('estados');
    return response.data;
   });
}