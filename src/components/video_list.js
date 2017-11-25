import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  let { videos, onVideoSelect } = props;

const videoItems = videos.map((video) => {
  return (
    <VideoListItem
      key={video.etag}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  );
})

  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}
 export default VideoList;
