import React, {Component}from 'react';
import Utils from '../../base/Utils';
import {connect} from 'react-redux';
import {Search} from '../../common';

class Edit extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  render() {
    return (
      <div><Search /></div>
    )
  }
}


export default Edit;
