/**
 * Created by shiqian on 2016/12/6.
 */
import React,{Component}from 'react';
import Utils from '../../base/Utils';
import { connect } from 'react-redux'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Submit extends Component{
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      current: 'mail',
      author:'',
      date:'',
      content:'',
      data:''
    };
  }
  componentDidMount() {
  }
  render(){
    return(
      <div>
        {
          this.props.data ? this.props.data.blogs.map(function (result,i) {
            return (<Card key={i}>
              <CardHeader
                title={result.author}
                subtitle="Subtitle"
                avatar="src/assets/images/a.png"
              />
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                {result.content}
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>)
          }):null
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state
})

export default connect(
  mapStateToProps,
  {}
)(Submit)

