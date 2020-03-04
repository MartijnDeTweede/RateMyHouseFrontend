import React, { useState } from 'react';
import InputField from './InputField';
import BlockWrapper from './BlockWrapper';
import VideoFormCart from './VideoFormCart';
import ConfirmButton from './ConfirmButton';
import styled from 'styled-components';
import FlexBoxRow from './FlexBoxRow';
import SelectField from './SelectField';
import Label from './Label';
import FlexBoxColumn from './FlexBoxColumn';
import roomOptions from '../static/roomOptions';

const ExtendedStyleslabel = styled(Label)`
margin: 10px 0 0 10px;`;

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
      <BlockWrapper>
        <FlexBoxColumn>
          <ExtendedStyleslabel>Upload Video</ExtendedStyleslabel>
          <input type="file" id="inputFile_video" name="video" onChange={(event) => event.target.files && setvideoFile(event.target.files[0])}/>

          <ExtendedStyleslabel>Upload Thumbnail</ExtendedStyleslabel>
          <input type="file" id="inputFile_thumbail" name="video" onChange={(event) => event.target.files && setThumbnailFile(event.target.files[0])} />
 
        </FlexBoxColumn>
      </BlockWrapper>
      <BlockWrapper>
        <SelectField
          fieldName="room"
          labelText="Room"
          onBlur={(event: any) => {
            setRoom(event.target.value);
          } }
        >
          {
            roomOptions.map(option => (
              <option value={option.value}>{option.title}</option>
            ))
          }
        </SelectField>
        <InputField 
          fieldName="title"
          labelText="Title"
          onBlur={(event: any) => setTitle(event.target.value)}
          type="text"
          defaultValue={title}
        />
        <FlexBoxRow>
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
        </FlexBoxRow>
    </BlockWrapper>
    </VideoFormCart>
  )
};

export default VideoAddForm;