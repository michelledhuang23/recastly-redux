import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };

  var newVideos = searchYouTube(options, (videos) => {
    return videos;
  });

  return {
    type: 'HANDLE_VIDEO_SEARCH',
    videos: () => {
      changeVideoList(newVideos);
      changeVideo(newVideos[0]);
    }
  };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
