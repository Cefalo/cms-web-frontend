import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
/* Custom components */
import SignIn from './SignIn'
import Home from './Home'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Main extends Component {

  render () {
    const {token, history} = this.props
    return (
      <React.Fragment>
        <Switch location={this.props.location}>
          <Route exact path='/signin' component={() => <SignIn history={history}/>}/>
          <Route path={'/home'} component={Home}/>
        </Switch>
      </React.Fragment>
    )
  }

}

function mapStateToProps ({user}) {
  return{
    token: user.jwt_tocken
  }
}
export default compose(withRouter, connect(mapStateToProps))(Main)
