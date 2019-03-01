import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export default class Login extends PureComponent {
  state = {

  }

  componentDidMount = async () => {
  }

  render() {
    return (
      <div className="g-login">
        登录页
        <br />
        <Link to={`/default`}>
          登录
        </Link>
      </div>
    )
  }
}