import React, { useState } from 'react';
import InputField from './InputField';
import UserInfoSection from './UserInfoSection';
import VideoFormCart from './VideoFormCart';
import ConfirmButton from './ConfirmButton';
import styled from 'styled-components';
import FlexWrapper from './FlexWrapper';
import SelectField from './SelectField';
import StyledOption from './Option';
import StyledLabel from './StyledLabel';
import FlexBoxColumn from './FlexBoxColumn';

const StyledFileInput = styled.input.attrs({ type: 'file' })`
padding: 10px 15px;
size: 60px;
`

const ExtendedStyleslabel = styled(StyledLabel)`
margin-left: 10px;`


const VideoAddForm: React.FC<{
  userName: string,
  addVideo: Function
  }> = ({
    userName,
    addVideo,
  }) => {
  const [room, setRoom] = useState<string|undefined>(undefined);
  const [title, setTitle] = useState<string|undefined>(undefined);

  const [videoFile, setvideoFile] = useState<File|null>(null);

  const [thumbnailFile, setThumbnailFile] = useState<File|null>(null);

  return(
    <VideoFormCart>
      <UserInfoSection>
        <FlexBoxColumn>
          <ExtendedStyleslabel>Upload Video</ExtendedStyleslabel>
          <StyledFileInput  id="inputFile" name="video" onChange={(event) => event.target.files && setvideoFile(event.target.files[0])}/>

          <ExtendedStyleslabel>Upload Thumbnail</ExtendedStyleslabel>
          <StyledFileInput  id="inputFile" name="video" onChange={(event) => event.target.files && setThumbnailFile(event.target.files[0])} />
 
        </FlexBoxColumn>
      </UserInfoSection>
      <UserInfoSection>
        <SelectField
          fieldName="room"
          labelText="Room"
          onBlur={(event: any) => {
            setRoom(event.target.value);
          } }
        >
          <StyledOption value="enterance">Enterance</StyledOption>
          <StyledOption value="kitchen">Kitchen</StyledOption>
          <StyledOption value="bathroom">Bathroom</StyledOption>
          <StyledOption value="bedroom">Bedroom</StyledOption>
          <StyledOption value="livingroom">Livingroom</StyledOption>
          <StyledOption value="addic">Addic</StyledOption>
          <StyledOption value="basement">Basement</StyledOption>
          <StyledOption value="nursery">Nursery</StyledOption>
          <StyledOption value="garden">Garden</StyledOption>
          <StyledOption value="Terrace">Terrace</StyledOption>
        </SelectField>
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
            videoFile: videoFile,
            thumbnailFile: thumbnailFile,
          })}>Add video</ConfirmButton>       
        </FlexWrapper>
    </UserInfoSection>
    </VideoFormCart>
  )
};

export default VideoAddForm;