import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms"
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
  staleTime: ms('24h'), //24hr
  //we set the initalData to the genres static data we have and since we are using the FetchResponse interface we must make the initial data have the same interface
  initialData: genres
})

export default useGenres;