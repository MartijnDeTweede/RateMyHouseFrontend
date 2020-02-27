import React, { useState } from 'react';
import { Video } from '../types/video.types';
import InputField from './InputField';
import UserInfoSection from './UserInfoSection';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import FlexWrapper from './FlexWrapper';

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
    <UserInfoSection>
      <FlexWrapper>
        <VideoPlayerWrapper>
        Here we do the whole player thing.
        </VideoPlayerWrapper>
        <UserInfoSection>
          <InputField 
            fieldName="room"
            labelText="room"
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
          <button onClick={() => updateVideo({
            ...video,
            title,
            room,
          })}>Update video</button>
          
          <button onClick={() => deleteVideo(video)}
          >Delete video</button>
          

      </UserInfoSection>
      </FlexWrapper>
    </UserInfoSection>
  )
};

export default VideoEditForm;