promise : 是一个对象
可以调用的接口：
promise.then
promise.resolve
promise.reject
promise.finally
promise.catch

## 利用 setTimeout 去返回一个 promise 对象

const promise1 = new Promise((resolve, reject) => {
//模拟异步操作
setTimeout(() => {
resolve('promnise 1 resolved')
}, 1000)
})

new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve(' return result of success')
}, 1000)
})

# Promise 构造函数

Promise 接收一个函数 funcA 作为参数，
funcA 又接收 resolve 和 reject 函数作为参数
pormise 状态改变之后，只会改变一次

then 方法接收两个函数 funcB，funcC 作为参数，
第一个函数参数是在 promise 对象的状态变为 resolved 时候，接收 resolve 的结果，第二个参数接收 reject 的结果
then 方法返回的是一个 promise 对象
所以可以通过链式调用 then 方法来处理多个异步操作的结果
如果 then 方法中 可以通过 reject 方法处理错误的结果，为什么还要 catch？

new Promise((resolve, reject)=>{
//在该构造函数中去执行异步操作
if(success){
resolve(value)
}else{
reject(error)
}
}).then(
//then 方法中去处理异步操作的结果
(resolveValue)=>{

    },
    (rejecvterror)=>{

    }

).catch(

)

promise 类型的函数

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

# react 生命周期内去执行 promise 去获取某个 dom 节点

# 登录会请求多个接口（用户信息、token、权限列表），如何用 promise 实现
