import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

export default
@connect(state => ({
  user: state.user
}))
class User extends PureComponent {
  state = {
  }

  componentDidMount () {
    // this.fetch()
    this.fetch2()
  }
  fetch = () => {
    const params = {
      test: 'test'
    }
    this.props.dispatch({
      type: 'visitorRegister',
      payload: params,
      callback: result => {
        console.log(result)
      }
    })
  }

  render() {

    // console.log(this.props)

    return (
      <div className="g-login">
        测试2
        <br />
        <Link to={`/default`}>
          登录
        </Link>
      </div>
    )
  }
}