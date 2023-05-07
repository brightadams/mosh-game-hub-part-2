import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres")

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: apiClient.getAll,
  staleTime: 24*60*60*100, //24hr
  //we set the initalData to the genres static data we have and since we are using the FetchResponse interface we must make the initial data have the same interface
  initialData: {count:genres.length, results: genres}
})

export default useGenres;