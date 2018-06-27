import React, { Component } from 'react';
import { Route, Redirect,Switch } from 'react-router-dom'
import Login from './contianer/login/Login'
import {connect} from 'react-redux'

@connect(state=>state.User,null)
class Home extends Component{

    jumptoLogin=()=>{
        this.props.history.push('/login')
    }
    render(){
        return(
            <div>
               <h3>Home页面</h3>
                { this.props.islogin? <p>{this.props.username}欢迎你，登录成功！</p>:<p>{this.props.username}请您先登录</p>}
                <button onClick={this.jumptoLogin}>去登录</button>
            </div>)
    }

}
class App extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div className="App">
          <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' component={Login}></Route>
              <Redirect to='/'></Redirect>
          </Switch>
      </div>
    );
  }
}

export default App;
