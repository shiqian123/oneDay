/**
 * Created by shiqian on 2017/5/16.
 */
import React, {Component}from 'react';
import Utils from '../../base/Utils';
import {connect} from 'react-redux';
import {Search} from '../../common';
import {getAllData} from '../../actions'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class EditContent extends Component {
  // 构造
  constructor(props) {
    super(props);
    let that = this;
    // 初始状态
    this.state = {
      data: {},
      title:'',
      content:'',
      author:''
    };
    function Title() {
    }

    Title.prototype.setText = function (value) {
      return that.setState({title: value});
    }

    function Content() {
    }

    Content.prototype.setText = function (value) {
      return that.setState({content: value});
    }

    function Author() {
    }

    Author.prototype.setText = function (value) {
      return that.setState({author: value});
    }

    this.title = new Title();
    this.content = new Content();
    this.author = new Author()
  }

  componentWillMount() {
    let _data = JSON.parse(this.props.routeParams.content);
    this.setState({data: _data,title:_data.title,author:_data.author,content:_data.content})
  }
  changeContent(event, title) {
    title.setText(event.target.value)
  }
  editContent(data) {
    let params = {
      id:data._id,
      author:this.state.author,
      content:this.state.content,
      title:this.state.title
    }
    Utils.fetch('/updateMsg', params).then((res)=>{
       console.log(res)
    })
  }

  render() {
    let data = this.state.data,that = this;
    return (
      <div>
        <TextField
          floatingLabelText="请输入名字"
          defaultValue={this.state.author}
          onChange={(event)=>this.changeContent(event,this.author)}
          fullWidth={true}
        />
        <TextField
          floatingLabelText="请输入标题"
          defaultValue={this.state.title}
          onChange={(event)=>this.changeContent(event,this.title)}
          fullWidth={true}
        />
        <TextField
          floatingLabelText="请输入内容"
          defaultValue={data.content}
          onChange={(event)=>this.changeContent(event,this.title)}
          fullWidth={true}
        />
        <FlatButton label="保存" onTouchTap={()=>{this.editContent(data)}}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state
})

export default connect(mapStateToProps)(EditContent);
