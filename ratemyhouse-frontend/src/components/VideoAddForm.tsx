import React, { useState } from 'react';
import InputField from './InputField';
import UserInfoSection from './UserInfoSection';
import VideoFormCart from './VideoFormCart';
import ConfirmButton from './ConfirmButton';
import styled from 'styled-components';
import FlexWrapper from './FlexWrapper';

const StyledFileInput = styled.input`
padding: 10px 15px;
margin: 10px;`

const VideoAddForm: React.FC<{
  userName: string,
  addVideo: Function
  }> = ({
    userName,
    addVideo,
  }) => {
  const [room, setRoom] = useState<string|undefined>(undefined);
  const [title, setTitle] = useState<string|undefined>(undefined);

  const [file, setFile] = useState<File|null>(null);

  return(
    <VideoFormCart>
      <UserInfoSection>
        <StyledFileInput type="file" name="video" onChange={(event) => event.target.files && setFile(event.target.files[0])} />
      </UserInfoSection>
      <UserInfoSection>
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
        <FlexWrapper>
          <ConfirmButton onClick={() => addVideo({
            userName: userName,
            video: {
              owner: userName,
              title,
              room,
            },
            file: file
          })}>Add video</ConfirmButton>       
        </FlexWrapper>
    </UserInfoSection>
    </VideoFormCart>
  )
};

export default VideoAddForm;