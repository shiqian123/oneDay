/**
 * Created by shiqian on 2016/12/6.
 */
import React,{Component}from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Utils from '../../base/Utils'
import $ from 'jquery';

class Submit extends Component{
  // 构造
  constructor(props) {
    super(props);
    // 初始状 态
    this.state = {
      current: 'mail',
      author:'',
      date:'',
      content:''
    };
  }
  componentDidMount() {
  }
  submit(){
    let params ={
      author:this.state.author,
        date:this.state.date,
        content:this.state.content,
        number:'rrr'
    }
    Utils.fetch('/article',params).then((res,a,v)=>{
      // console.log(res)
    })
  }
  changeAuthor(event){
    this.setState({author:event.target.value});
  }
  changeDate(event,date){
    this.setState({date:date});
  }
  changeContent(event){
    this.setState({content:event.target.value});
  }
  getFileUrl(sourceId) {
  var url;
  if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
    url = document.getElementById(sourceId).value;
  } else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
    url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
  } else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
    url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
  }
  return url;
}
  preImg(sourceId, targetId) {
    var url = this.getFileUrl(sourceId);
    var imgPre = document.getElementById(targetId);
    imgPre.src = url;
  }
  doUpload() {
    var formData = new FormData($("#uploadForm")[0]);
    $.ajax({
      url: 'http://localhost:3011/upload',
      type: 'POST',
      data: formData,
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      success: function (returndata) {
        alert(returndata);
      },
      error: function (returndata) {
        alert(returndata);
      }
    });
  }
  render(){
    return(
      <div>
        <h3>Repos</h3>
        <TextField
          onChange={(event)=>this.changeAuthor(event)}
          floatingLabelText="请输入名字"
          defaultValue={this.state.author}
        />
        <DatePicker
          hintText="请选择日期"
          container="inline"
          mode="landscape"
          onChange={this.changeDate.bind(this)}
        />
        <TextField
          hintText="请输入内容"
          rows={1}
          rowsMax={8}
          onChange={(event)=>this.changeContent(event)}
        />
        <form id= "uploadForm">
          <p >指定文件名： <input type="text" name="filename" value="" /></p >
          <p >上传文件： <input id= "UpImage" type="file" name="file" onChange={()=>this.preImg('UpImage','img1')} /></p>
          <input type="button" value="上传" onClick={this.doUpload.bind(this)} />
        </form>
        <img src="" id="img1" />
      </div>
    )
  }
}
export default Submit;
