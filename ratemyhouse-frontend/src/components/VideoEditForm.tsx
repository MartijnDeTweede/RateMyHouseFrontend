import React, { useState } from 'react';
import { Video } from '../types/video.types';
import InputField from './InputField';
import UserInfoSection from './UserInfoSection';
import VideoFormCart from './VideoFormCart';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import ConfirmButton from './ConfirmButton';
import FlexWrapper from './FlexWrapper';
import VideoStyled from './VideoStyled';
import FlexBoxColumn from './FlexBoxColumn';

const VideoEditForm: React.FC<{
  video: Video,
  updateVideo: Function
  deleteVideo: Function
  }> = ({
    video,
    updateVideo,
    deleteVideo,
  }) => {
  const [room, setRoom] = useState<string|undefined>(video.room);
  const [title, setTitle] = useState<string|undefined>(video.title);

  return(
    <VideoFormCart>
      <VideoPlayerWrapper>
          <VideoStyled width="568" height="320" controls>
            <source src="mov_bbb.mp4" type="video/mp4" />
          </VideoStyled>
      </VideoPlayerWrapper>
        <UserInfoSection>
          <FlexBoxColumn >
            <InputField 
              fieldName="room"
              labelText="Room"
              onBlur={(event: any) => setRoom(event.target.value)}
              type="text"
              defaultValue={room}
            />
            <InputField 
              fieldName="title"
              labelText="Title"
              onBlur={(event: any) => setTitle(event.target.value)}
              type="text"
              defaultValue={title}
            />            
          </FlexBoxColumn>

            <FlexWrapper>
              <ConfirmButton onClick={() => updateVideo({
                ...video,
                title,
                room,
              })}>Update video</ConfirmButton>
              
              <ConfirmButton onClick={() => deleteVideo(video)}
              >Delete video</ConfirmButton>
            
            </FlexWrapper>
          

      </UserInfoSection>
    </VideoFormCart>
  )
};

export default VideoEditForm;