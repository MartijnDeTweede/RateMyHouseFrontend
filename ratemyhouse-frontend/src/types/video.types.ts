export interface Video {
  room?: string;
  title?: string;
  src?: string;
  owner: string;
  ratingPoints?: number;
  nrOfRates?:number;
  _id?: string;
}


export interface VideoContainerState {
  videos: Video [],
  isFetching: boolean;
}