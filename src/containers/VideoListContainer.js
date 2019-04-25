import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideoList from './../actions/videoList.js';



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
var mapStateToProps = (state) => {
    return {
      videos: state.videoList // why videos not videoList
    }
}

var mapDispatchToProps = dispatch => {
    return {
        handleVideoListEntryTitleClick: e => {
            dispatch(changeVideoList(e))
        }
    }
}

var VideoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);

export default VideoListContainer;
