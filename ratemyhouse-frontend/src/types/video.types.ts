export interface Video {
  room?: string;
  title?: string;
  videoSrc?: string;
  owner: string;
  ratingPoints?: number;
  nrOfRates?:number;
  _id?: string;
  videoKey?: string;
  thumbNailSrc?: string;
  thumbNailKey?: string;
}


export interface VideoContainerState {
  videos: Video [],
  isFetching: boolean;
}