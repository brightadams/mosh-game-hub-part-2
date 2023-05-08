import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  background_image: string;
  publishers: Publisher[];
  parent_platforms: { platform: Platform; }[];
  description_raw: string;
  slug: string;
  metacritic: number;
  rating_top: number;
}
