import React from 'react';

 
class Search extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   value: ''
    // }; only need 1 state since it already exist in APP
  }

  // handleSearchInputChange(e) { // originally handleSearchChange 
  //   this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }
  onInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
  }
  // once a change event occurs, it will invoke the onInputChange function and pass the event
  // down to the handleSearchInputChange function (located in the Search Container)
  // after the handleSearchInputChange function is invoked it will dispatch the action creator


  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.onInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
