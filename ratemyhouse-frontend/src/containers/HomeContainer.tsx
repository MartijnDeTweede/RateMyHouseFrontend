import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { FeaturedVideosState } from '../types/featuredVideos.types';
import { getFeatureVideosRequestActionCreator } from '../actions/FeaturedVideosActionCreators';
import { Video } from '../types/video.types';
import HomePageVideoHolder from '../components/stylers/HomePageVideoHolder';
import SmallVideoBlockHolder from '../components/stylers/SmallVideoBlockHolder';
import Loader from '../components/Loader';

const HomeContainer: React.FC<{
  getFeaturedVideos: Function,
  featuredVideos: Video[],
  isFetching: boolean,
}> = ({
  getFeaturedVideos,
  featuredVideos,
  isFetching,
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
          <HomePageVideoHolder video={video} />
        ))}
      </SmallVideoBlockHolder>
      )
} 

const mapStateToProps = (state: FeaturedVideosState) => (
  {...state.featuredVideos}
)

const mapDispatchToProps = (dispatch: any) => ({
  getFeaturedVideos: () => dispatch(getFeatureVideosRequestActionCreator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);