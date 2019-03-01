import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";


export default class Default extends PureComponent {
  state = {

  }

  componentDidMount = async () => {
  }

  render() {
    return (
      <div className="g-default">
        默认显示页
        <br />
        <Link to={`/login`}>
          返回
        </Link>
      </div>
    )
  }
}