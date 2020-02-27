import React  from 'react';
import { Video } from '../types/video.types';
import VideoAddForm from './VideoAddForm';
import VideoEditForm from './VideoEditForm';
import 'react-multi-carousel/lib/styles.css';

const VideoEditor: React.FC<{
  videos: Video[];
  updateVideo: Function;
  addVideo: Function;
  deleteVideo: Function;
  userName: string;
}> = ({
  videos,
  updateVideo,
  addVideo,
  deleteVideo,
  userName,
}) => {

  return(
    <div>
      {
        videos.map(video => (
          <VideoEditForm
            video={video}
            updateVideo={updateVideo}
            deleteVideo={deleteVideo}
          /> 
        ))
      }
      {
        (videos.length < 4) && 
          <VideoAddForm
            addVideo={addVideo}
            video={{owner: userName}}
          />
        
      }
    </div>
  )
}

export default VideoEditor;