import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export default class Blog extends PureComponent {
  state = {

  }

  componentDidMount = async () => {
  }

  render() {
    return (
      <div className="g-login">
        测试1
        <br />
        <Link to={`/default`}>
          登录
        </Link>
      </div>
    )
  }
}