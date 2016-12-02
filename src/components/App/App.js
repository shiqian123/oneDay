import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';

class App extends Component{
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  render(){
    return(
      <div>
        <h1>React Router Tutorial</h1>
        <ul>
          <li style={local.a}><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li style={local.a}><Link to="/about" activeStyle={{color:'green'}}>About</Link></li>
          <li style={local.a}><Link to="/repos/react-router" activeStyle={styles.active}>Repos</Link></li>
          <li style={local.a}><Link to="/user" activeClassName="active">User</Link></li>
          <li style={local.a}><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
const local = {
  a:{
     float:'left',
   },
}
App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
