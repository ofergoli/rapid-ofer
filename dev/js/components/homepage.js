import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logout, dragImage} from '../actions/index';
import {withRouter} from 'react-router';
import Button from "./button";
import Draggable from 'react-draggable';
import {handler} from "../service/api";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {
        x: 0,
        y: 0
      }
    }
  }

  componentDidMount() {
    if (handler.shouldLogoutUser()) {
      this.loggedOut();
    }
    const position = handler.getSavedPositions();
    this.setState({position});
  }

  componentDidUpdate(prevProps, prevState) {
    if (handler.shouldLogoutUser()) {
      this.loggedOut();
    }
  }

  loggedOut() {
    if (handler.shouldLogoutUser()) {
      this.props.history.push('/login');
    }
  }

  drag(e, details) {
    const {x, y} = details;
    this.props.dragImage({x, y});
    this.setState({position: {x, y}});
  }

  render() {
    return <div>
      <h3>Welcome to rapid api test</h3>
      <h5>Drag RapidApi picture</h5>
      <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={this.state.position}
          position={this.state.position}
          grid={[1, 1]}
          onStop={(e, details) => this.drag(e, details)}>
        <div className="handle" style={{width: '406px', height: '406px'}}>
          <img src="https://pbs.twimg.com/profile_images/781277149068091392/NNtvlbbx.jpg"></img>
        </div>
      </Draggable>
      <Button onClick={() => this.props.logout()}
              className="col s12 waves-effect waves-light blue lighten-3 btn-large"
              buttonValue="Logout"/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.login
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({logout, dragImage}, dispatch);
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Home));

