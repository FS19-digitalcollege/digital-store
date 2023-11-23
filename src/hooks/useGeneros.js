import { useQuery } from "react-query"
import { API } from "../services"

export const useGeneros = () => {
   return useQuery(['generos'], async () => {
    const response = await API.get('generos');
    return response.data;
   });
}