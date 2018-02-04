import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login} from '../actions/index'
import Input from "./input";
import Button from "./button";
import {withRouter} from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange(key, value) {
    this.setState({[key]: value});
  }

  shouldComponentUpdate({user}, {username, password}) {
    return username !== this.state.username ||
        password !== this.state.password ||
        user !== this.props.user;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.login) {
      this.props.history.push('/home');
    }
  }

  render() {
    const {username, password} = this.state;

    return (<div className="row">
      <div className="col s12">
        <div className="card blue lighten-5">
          <div className="card-content text-darken-2">
            <h2 className="center">Login</h2>
            <Input onChange={inputValue => this.onChange('username', inputValue)}
                   className="test"
                   placeholder="User Name"/>
            <Input onChange={inputValue => this.onChange('password', inputValue)}
                   className="test"
                   type="password"
                   placeholder="Password"/>
            <div className="row">
              <Button onClick={() => this.props.login({username, password})}
                      className="col s12 waves-effect waves-light btn-large blue lighten-3"
                      buttonValue="Let me in"/>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    user: state.login
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({login: login}, dispatch);
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Login));
