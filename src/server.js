import axios from "axios";
let http ={
    get:"",
    post:"",
}
http.get=function(api,prams){
    return new Promise((resolve,reject)=>{
        axios.get(api,prams).then((data)=>{
            resolve(data);
        })
    });
}
http.post = function(api,prams){
    return new Promise((resolve,reject)=>{
        axios.post(api,prams).then((res)=>{
            resolve(data);
        })
    })
}
export default http;