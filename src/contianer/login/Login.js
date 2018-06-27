/**
 * Create by Skyling0408 on 2018/6/27.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Startlogin} from '../../reducers/user'

@connect(state=>state.User,{Startlogin})

export default class Login extends Component{
    constructor(props){
        super(props)
    }
    loginOk = () =>{
        this.props.Startlogin('sky');
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <h2>login页面</h2>
                <p>亲爱的用户请点击下面按钮登录</p>
                <button onClick={this.loginOk}>登录</button>
            </div>
        )
    }
}
