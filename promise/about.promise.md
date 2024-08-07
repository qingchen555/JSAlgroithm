# Promise 是什么？

含义是： 保存着某个未来才会结束的事件的容器
语法上而言： Promise 是一个对象，可以获取异步操作的消息， 提供很多的 api 统一处理结果

Promise 对象的三种状态：
Pending：异步操作正在进行中
Fullfilled：异步操作完成
Rejetcted：异步操作失败

# Promise 和 async await 区别？

都是处理异步操作，但是在语法使用，错误处理上有一定的区别
语法：
Promise 使用链式调用的方式，通过调用 then（）和 catch（）方法来处理异步操作的结果和错误
async await 使用 try catch 来处理成功或者失败的结果

# promise构造函数
promise接收一个函数作为参数，该函数接收resolve和reject函数作为参数
then方法接收两个函数作为参数，第一个参数接收resolve的结果，第二个参数接收reject的结果
new Promise((resolve, reject)=>{
    if(success){
        resolve(value)
    }else{
        reject(error)
    }
}).then(
    (resolveValue)=>{
        
    },(rejecvterror)=>{

    }

).catch(

)

# react生命周期内去执行promise去获取某个dom节点
# 登录会请求多个接口（用户信息、token、权限列表），如何用promise实现

