import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { FeaturedVideosState } from '../types/featuredVideos.types';
import { getFeatureVideosRequestActionCreator } from '../actions/FeaturedVideosActionCreators';
import { Video } from '../types/video.types';

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
  return(<div>Homeconainer</div>)
} 

const mapStateToProps = (state: FeaturedVideosState) => (
  {...state.featuredVideos}
)

const mapDispatchToProps = (dispatch: any) => ({
  getFeaturedVideos: () => dispatch(getFeatureVideosRequestActionCreator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);