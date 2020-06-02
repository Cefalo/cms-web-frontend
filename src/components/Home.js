import React, { Component } from 'react'
import { baseUrl } from '../shared/baseUrl'
import { getUser, setUser, userFailed, userLoading } from '../redux/ActionCreators'
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
    const users = axios
      .get(`${apiUrl}users`, )
      .then(response => response.data)
      .then(data => dispatch(getUser(data)))
      .catch(error => {
        console.log(error)
      })
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
