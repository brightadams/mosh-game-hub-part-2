import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  description_raw: string;
  slug: string;
  metacritic: number;
  rating_top: number;
}
