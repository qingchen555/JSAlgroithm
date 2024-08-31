//手动实现call
//call(obj, param1, param2,)
//apply(obj,[param1,param2])
//bind(obj)(param1,param2)

//obj1.call(obj2): 改变this的指向到对象obj2，可以访问到obj2中的属性
Function.prototype.myCall = function (context, ...args) {
  context = context || window
  context.fn = this
  return context.fn(...args)
}
