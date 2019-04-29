import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import { message } from 'antd';
const api_host = "http://127.0.0.1:8081";
window.get = function({url}){
    return new Promise(function(resolve,reject){
        axios.get(api_host+url).then((data)=>{
            //resolve(data.data);
            if(data.status == 404){
                alert("接口调用出错");
                return;
            }
            if(data.status == 403){
                alert("用户没有权限");
                return;
            }
            if (data.data.resultCode == 0){
                resolve(data.data)
            }else{
                message.error(data.data.resultMsg);
            }
        })
    })
}
window.post = function({url,prams}){
    return new Promise(function (resolve, reject) {
        axios.post(api_host + url,prams).then((data) => {
            //resolve(data.data);
            if (data.status == 404) {
                alert("接口调用出错");
                return;
            }
            if (data.status == 403) {
                alert("用户没有权限");
                return;
            }
            if (data.data.resultCode == 0) {
                resolve(data.data)
            } else {
                message.error(data.data.resultMsg);
            }
        })
    })
}
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
