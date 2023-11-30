import { useMutation, useQuery } from "react-query"
import { API, queryClient } from "../services"

export const useMarcas = () => {
   return useQuery(['marcas'], async () => {
    const response = await API.get('marcas');
    return response.data;
   });
}

export const useMarcasCreate = () => {
   return useMutation(async (data) => {
      const response = API.post('marcas', data);
      return response.data;
   }, {
      onSuccess: () => {
         queryClient.invalidateQueries('marcas');
      }
   });
}

export const useMarcasDestroy = () => {
   return useMutation(async (id) => {
      const response = API.delete(`marcas/${id}`);
      return response.data;
   }, {
      onSuccess: () => {
         queryClient.invalidateQueries('marcas');
      }
   });
}