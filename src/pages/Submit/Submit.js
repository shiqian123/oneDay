/**
 * Created by shiqian on 2016/12/6.
 */
import React, {Component}from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';
import Utils from '../../base/Utils'
import $ from 'jquery';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['zh', 'zh-CN'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/zh');
  require('intl/locale-data/jsonp/zh-Hans-CN');
}
class Submit extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状 态
    this.state = {
      current: 'mail',
      author: '',
      date: '',
      content: '',
      title: ''
    };
    let that = this;

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

  componentDidMount() {
  }

  submit() {
    let params = {
      author: this.state.author,
      date: this.state.date,
      content: this.state.content,
      title: this.state.title,
      number: 'rrr'
    }
    Utils.fetch('/article', params).then((res, a, v)=> {
      alert("添加成功")
      this.context.router.push('/')
    })
  }

  changeDate(event, date) {
    let a = new Date(date).formatDate();
    this.setState({date: a});
  }

  changeContent(event, title) {
    title.setText(event.target.value)
  }

  getFileUrl(sourceId) {
    var url;
    if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE
      url = document.getElementById(sourceId).value;
    } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
      url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
      url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    }
    return url;
  }

  preImg(sourceId, targetId) {
    var url = this.getFileUrl(sourceId);
    var imgPre = document.getElementById(targetId);
    imgPre.style.width = '100px';
    imgPre.style.height = '50px';
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
        // alert(returndata);
      }
    });
  }

  render() {
    let that = this;
    return (
      <div>
        <h3>Repos</h3>
        <TextField
          onChange={(event)=>this.changeAuthor(event)}
          floatingLabelText="请输入名字"
          defaultValue={this.state.author}
          onChange={(event)=>this.changeContent(event,this.author)}
          fullWidth={true}
        />
        <DatePicker
          fullWidth={true}
          hintText="请选择日期"
          container="inline"
          locale="zh-CN"
          formatDate={new DateTimeFormat('zh-CN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }).format}
          DateTimeFormat={DateTimeFormat}
          mode="landscape"
          onChange={this.changeDate.bind(this)}
        />
        <TextField
          hintText="请输入标题"
          rows={1}
          rowsMax={8}
          onChange={(event)=>this.changeContent(event,this.title)}
          fullWidth={true}
        />
        <TextField
          hintText="请输入内容"
          rows={1}
          rowsMax={8}
          onChange={(event)=>this.changeContent(event,this.content)}
          fullWidth={true}
        />
        {/* <form id="uploadForm">
         <p>上传文件：
         <input id="UpImage" type="file" name="file" onChange={()=>this.preImg('UpImage','img1')}/>
         <input id="text" type="text" name="text" value="232323"/>
         </p>
         <input type="button" value="上传" onClick={this.doUpload.bind(this)}/>

         </form>
         <img src="" id="img1"/>*/}
        <input type="button" onClick={()=>{this.submit()}} value="确定"/>
      </div>
    )
  }
}

export default Submit;

Submit.contextTypes = {
  router: React.PropTypes.object,
}