import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { FeaturedVideosState } from '../types/featuredVideos.types';
import { getFeatureVideosRequestActionCreator } from '../actions/FeaturedVideosActionCreators';
import { Video } from '../types/video.types';
import HomePageVideoHolder from '../components/userInterActionComponents/HomePageVideoHolder';
import SmallVideoBlockHolder from '../components/stylers/SmallVideoBlockHolder';
import Loader from '../components/displayComponents/Loader';
import { rateVideoRequestActionCreator } from '../actions/VideoActionCreator';

const HomeContainer: React.FC<{
  getFeaturedVideos: Function;
  featuredVideos: Video[];
  isFetching: boolean;
  rateVideo: Function;
}> = ({
  getFeaturedVideos,
  featuredVideos,
  isFetching,
  rateVideo,
}) => {
  useEffect(() => {
    getFeaturedVideos();
  }, []);

  if(isFetching) {
    return(<Loader />)
  }

  return(
      <SmallVideoBlockHolder>
        {featuredVideos.map((video) => (
          <HomePageVideoHolder video={video} rateVideo={rateVideo} />
        ))}
      </SmallVideoBlockHolder>
      )
} 

const mapStateToProps = (state: FeaturedVideosState) => (
  {...state.featuredVideos}
)

const mapDispatchToProps = (dispatch: any) => ({
  rateVideo:(
    videoId: string,
    rating: number,
    ) => dispatch(rateVideoRequestActionCreator({
      videoId,
      rating,
      getNewVideos: () => dispatch(getFeatureVideosRequestActionCreator()), 
    })),
  getFeaturedVideos: () => dispatch(getFeatureVideosRequestActionCreator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);