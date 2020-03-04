import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { FeaturedVideosState } from '../types/featuredVideos.types';
import { getFeatureVideosRequestActionCreator } from '../actions/FeaturedVideosActionCreators';
import { Video } from '../types/video.types';
import HomePageVideoHolder from '../components/stylers/HomePageVideoHolder';
import SmallVideoBlockHolder from '../components/stylers/SmallVideoBlockHolder';

const HomeContainer: React.FC<{
  getFeaturedVideos: Function,
  featuredVideos: Video[],
}> = ({
  getFeaturedVideos,
  featuredVideos,
}) => {
  useEffect(() => {
    getFeaturedVideos();
  }, []);
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