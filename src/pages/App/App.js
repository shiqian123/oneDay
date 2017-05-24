import React ,{Component}from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';
import responsiveNav from '../../../res/nav/responsive-nav'
class App extends Component{
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      current: 'mail'
    };
  }
  componentDidMount() {
    console.log(this.context)
    responsiveNav("#nav");
    // this.context.router.push('/submit')
    fetch('package.json')
      .then(
        function (response){
          console.log(response)
          if(response.status!==200){
            console.log('存在一个问题，状态码为：'+response.status);
            return;
          }
          // 检查响应文本
          response.json().then(function (data){
             console.log(data);
          });
        }
      )
      .catch(function (err){
        console.log('Fetch错误:'+err);
      });
  }
  render(){
    return(
      <div >
        <div>
          <h1 style={{paddingLeft: 32}}>React Router Tutorial</h1>
          <ul className="nav" id = "nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/canvas" activeStyle={{color:'green'}}>Canvas</Link></li>
            {/*
              <li><Link to="/repos/react-router" activeStyle={styles.active}>Repos</Link></li>
              <li><Link to="/user" activeStyle={styles.active}>User</Link></li>
              */}
            <li><Link to="/submit" activeStyle={styles.active}>Submit</Link></li>
            <li><NavLink to="/Edit">编辑文档</NavLink></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
App.contextTypes = {
    router: React.PropTypes.object,
}
export default App;
