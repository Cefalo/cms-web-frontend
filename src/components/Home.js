import React, { Component } from 'react'
import { userLoading, getUser, handleGetUser } from '../actions/userAction'
import axios from 'axios'
import { apiUrl} from '../shared/baseUrl'
import { connect } from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const {dispatch} = this.props;
    dispatch(userLoading())
    dispatch(handleGetUser())
  }

  render () {
    return (
      <div>
        <h1>Welcome to cms world</h1>

      </div>
    )
  }
}

export default connect()(Home)
