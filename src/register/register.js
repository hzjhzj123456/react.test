import React, { Component } from 'react';
import './register.less';
import { message } from "antd";
import { Link } from "react-router-dom";
class Register extends Component {
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
    jump() {

    }
    login() {
        let submit = {}
        submit.name = this.state.name;
        submit.password = this.state.password;
        window.post({ url: '/register', prams: submit }).then((data) => {
            message.success("注册新账号成功");
        });
    }
    render() {
        return (
            <div className="register-container">
                <div className="login-box">
                    <div className="login-content">
                        <div>注册</div>
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
                            <span className="registerButton"><Link to="/login">去登陆</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;