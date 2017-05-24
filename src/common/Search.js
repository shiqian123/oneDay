/**
 * Created by shiqian on 2017/4/26.
 */
import React, {Component}from 'react';
import {connect} from 'react-redux';
import {searchData} from '../actions'
import RaisedButton from 'material-ui/RaisedButton';

class Search extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      search:true
    };
    this.serach = ()=>{this.search()}
  }
  search(){
    let { dispatch } = this.props;
    dispatch(searchData(this.refs.searchInput.value))
  }
  render() {
    return (
      <div className="content">
        <input type="text" style={searchS.input} ref="searchInput" className="input" />
        <RaisedButton icon={this.state.search?'':<i className="icon-spinner icon-spin" ></i>}
                      style={searchS.i}
                      label={this.props.buttonText}
                      onTouchTap={this.serach}
        />
      </div>
    )
  }
}
Search.defaultProps = {
  buttonText: '查询',
}
let searchS = {
  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:4,
    display:'block',
    width:'100%',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:4,
    marginBottom:4,
    height:36
  },
  i:{
    position:'absolute',
    top:8,
    right:0
  }
}
export default connect()(Search);
