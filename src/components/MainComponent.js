import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
/* Custom components */
import SignIn from './SignIn';

import { postUser } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
	postUser: (formData) => dispatch(postUser(formData))
});


class Main extends Component {

  render() {

    return (
      <React.Fragment>
        <Switch location={this.props.location}>
					<Route exact path='/signin' component={() => <SignIn postUser={this.props.postUser} isLoading={this.props.user.isLoading} isError={this.props.user.errMess} />} />
          <Redirect to="/signin" />
        </Switch>
      </React.Fragment>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
