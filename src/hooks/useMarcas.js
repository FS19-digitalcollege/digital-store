import { useQuery } from "react-query"
import { API } from "../services"

export const useMarcas = () => {
   return useQuery(['marcas'], async () => {
    const response = await API.get('marcas');
    return response.data;
   });
}