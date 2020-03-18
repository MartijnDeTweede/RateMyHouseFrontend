import React, { useState } from 'react';
import InputField from '../userInterActionComponents/InputField';
import InformationBlock from '../blocks/InformationBlock';
import VideoFormHolder from '../stylers/VideoFormHolder';
import ConfirmButton from '../userInterActionComponents/ConfirmButton';
import styled from 'styled-components';
import FlexBoxRowHolder from '../stylers/FlexBoxRowHolder';
import SelectField from '../userInterActionComponents/SelectField';
import Label from '../displayComponents/Label';
import FlexBoxColumnHolder from '../stylers/FlexBoxColumnHolder';
import roomOptions from '../../static/roomOptions';
import { isFilledString } from '../../helpers/validationHelpers';

const ExtendedStyleslabel = styled(Label)`
margin: 10px 0 0 10px;`;

const VideoAddForm: React.FC<{
  userName: string,
  addVideo: Function
  }> = ({
    userName,
    addVideo,
  }) => {
  const [room, setRoom] = useState<string|undefined>("enterance");
  const [title, setTitle] = useState<string|undefined>(undefined);
  const [videoFile, setvideoFile] = useState<File|null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File|null>(null);

  const inputIsValid = (): boolean => (isFilledString(room) && isFilledString(title) &&
   videoFile != null && thumbnailFile != null);

  return(
    <VideoFormHolder>
      <InformationBlock>
        <FlexBoxColumnHolder>
          <ExtendedStyleslabel>Upload Video</ExtendedStyleslabel>
          <input type="file" id="inputFile_video" name="video" onChange={(event) => event.target.files && setvideoFile(event.target.files[0])}/>

          <ExtendedStyleslabel>Upload Thumbnail</ExtendedStyleslabel>
          <input type="file" id="inputFile_thumbail" name="video" onChange={(event) => event.target.files && setThumbnailFile(event.target.files[0])} />
 
        </FlexBoxColumnHolder>
      </InformationBlock>
      <InformationBlock>
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
        <FlexBoxRowHolder>
          <ConfirmButton
          disabled={!inputIsValid()}
          onClick={() => addVideo({
            userName: userName,
            video: {
              owner: userName,
              title,
              room,
            },
            videoFile: videoFile,
            thumbnailFile: thumbnailFile,
          })}>Add video</ConfirmButton>       
        </FlexBoxRowHolder>
    </InformationBlock>
    </VideoFormHolder>
  )
};

export default VideoAddForm;