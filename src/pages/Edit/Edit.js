import React, {Component}from 'react';
import Utils from '../../base/Utils';
import {connect} from 'react-redux';
import {Search} from '../../common';
import {getAllData,deleteData} from '../../actions'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import _ from 'lodash'

class Edit extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  componentDidMount() {
     let { dispatch } = this.props;
    dispatch(getAllData())
  }
  editContent(result){
    console.log(result)
    this.context.router.push('/editContent/'+JSON.stringify(result))
  }
  deleteContent(result){
    let { dispatch } = this.props;

    dispatch(deleteData(_.cloneDeep(this.props.searchData.blogs),result))
  }
  render() {
    let that =this;
    return (
      <div><Search />
        {
          this.props.searchData.blogs.length!==0 ? this.props.searchData.blogs.map(function (result,i) {
            return (<Card key={i}>
              <CardHeader
                title={result.author}
                subtitle="Subtitle"
                avatar="src/assets/images/a.png"
              />
              <CardTitle title={result.title} subtitle={result.date} />
              <CardText>
                {result.content}
              </CardText>
              <CardActions>
                <FlatButton label="编辑" onTouchTap={()=>{that.editContent(result)}}/>
                <FlatButton label="删除" onTouchTap={()=>{that.deleteContent(result)}}/>
              </CardActions>
            </Card>)
          }):<div>暂无数据</div>
        }
      </div>
    )
  }
}
Edit.contextTypes = {
  router: React.PropTypes.object,
}
const mapStateToProps = (state) => ({
  searchData: state
})

export default connect(mapStateToProps)(Edit);
