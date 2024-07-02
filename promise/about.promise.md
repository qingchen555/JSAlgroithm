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
async await 使用
