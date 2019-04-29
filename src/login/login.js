import React, { Component } from 'react';
import './login.less';
import { message } from "antd";
import { Link } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            password: "",
        }
    }
    getUser(e) {
        this.setState({
            name: e.target.value
        })
    }
    getPassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    jump(){

    }
    login() {
        let submit = {}
        submit.name = this.state.name;
        submit.password = this.state.password;
        window.post({ url: '/login', prams: submit}).then((data)=>{
            console.log(data);  
            message.success(data.resultMsg);
        });
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-box">
                    <div className="login-content">
                        <div>登陆</div>
                        <div>
                            <input type="text" id="name" onInput={this.getUser.bind(this)} />
                        </div>
                        <div>
                            <input type="password" id="password" onInput={this.getPassword.bind(this)} />
                        </div>
                        <div>
                            <div onClick={this.login.bind(this)} className="submit">
                                <span>提交</span>
                            </div>
                        </div>
                        <div>
                            <span>用户名：{this.state.name}</span>
                        </div>
                        <div>
                            <span>密码：{this.state.password}</span>
                        </div>
                        <div>
                            <span className="registerButton"><Link to="/register">去注册</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
