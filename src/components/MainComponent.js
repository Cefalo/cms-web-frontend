import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
/* Custom components */
import SignIn from './SignIn';



class Main extends Component {

  render() {

    return (
      <React.Fragment>
        <Switch location={this.props.location}>
					<Route exact path='/signin' component={() => <SignIn/>} />
          <Redirect to="/signin" />
        </Switch>
      </React.Fragment>
    );
  }

}

export default withRouter(Main);
