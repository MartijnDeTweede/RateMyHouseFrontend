export interface Video {
  room: string;
  title: string;
  src: string;
  userId: string;
  ratingPoints: number;
  nrOfRates:number;
}


export interface VideoContainerState {
  videos: Video [],
  isFetching: boolean;
}