import { Video } from "./video.types";

export interface FeaturedVideosState {
  featuredVideos: Video [],
  isFetching: boolean;
}