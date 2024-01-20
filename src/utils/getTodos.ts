import axios from 'axios';
import { BASE_URL } from './constant';


export const getTodosApi = async (endPoint:string) => {
    try {
      
      const response = await axios.get(BASE_URL+endPoint);
      console.log(response.data)
      return response.data.schedules;
    } catch (error) {
      console.log(error);
    }
  };