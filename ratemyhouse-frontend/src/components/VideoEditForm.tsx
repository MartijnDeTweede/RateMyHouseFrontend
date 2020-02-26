import React, { useState } from 'react';
import { Video } from '../types/video.types';
import InputField from './InputField';

const VideoEditForm: React.FC<{video: Video, sendForm: Function}> = ({video}) => {
  const [room, setRoom] = useState<string|undefined>(video.room);
  const [title, setTitle] = useState<string|undefined>(video.title);

  return(
    <div>
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
    </div>
  )
};

export default VideoEditForm;