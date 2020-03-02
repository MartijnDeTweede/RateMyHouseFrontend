import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { FeaturedVideosState } from '../types/featuredVideos.types';
import { getFeatureVideosRequestActionCreator } from '../actions/FeaturedVideosActionCreators';
import { Video } from '../types/video.types';
import HomePageVideoBlock from '../components/HomePageVideoBlock';
import styled from 'styled-components';


const Wrapper = styled.section`
display: flex;
flex-wrap: wrap ;
justify-content: center;
align-items: flex-start;
align-content: stretch;
`

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
      <Wrapper>
        {featuredVideos.map((video) => (
          <HomePageVideoBlock video={video} />
        ))}
      </Wrapper>
      )
} 

const mapStateToProps = (state: FeaturedVideosState) => (
  {...state.featuredVideos}
)

const mapDispatchToProps = (dispatch: any) => ({
  getFeaturedVideos: () => dispatch(getFeatureVideosRequestActionCreator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);