import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from './../actions/currentVideo.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
var mapStateToProps = (state) => {
    return {
      video: state.currentVideo // why videos not videoList
    }
}

var mapDispatchToProps = dispatch => {
    return {
        handleVideoListEntryTitleClick: e => {
            dispatch(changeVideo(e))
        }
    }
}

var VideoPlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoPlayer);


export default VideoPlayerContainer;
