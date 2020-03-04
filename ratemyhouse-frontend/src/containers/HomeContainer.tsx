import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { FeaturedVideosState } from '../types/featuredVideos.types';
import { getFeatureVideosRequestActionCreator } from '../actions/FeaturedVideosActionCreators';
import { Video } from '../types/video.types';
import HomePageVideoBlock from '../components/HomePageVideoBlock';
import SmallVideoBlockWrapper from '../components/SmallVideoBlockWrapper';

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
      <SmallVideoBlockWrapper>
        {featuredVideos.map((video) => (
          <HomePageVideoBlock video={video} />
        ))}
      </SmallVideoBlockWrapper>
      )
} 

const mapStateToProps = (state: FeaturedVideosState) => (
  {...state.featuredVideos}
)

const mapDispatchToProps = (dispatch: any) => ({
  getFeaturedVideos: () => dispatch(getFeatureVideosRequestActionCreator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);