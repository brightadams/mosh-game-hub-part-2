import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e574cbdd74d14a26ac4144c21ce556da",
  },
});


class APIClient<T>{
  endpoint: string;
  constructor(endpoint: string){
    this.endpoint = endpoint
  }

  getAll=(config: AxiosRequestConfig)=>{
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res=>res.data)
  }
}

export default APIClient