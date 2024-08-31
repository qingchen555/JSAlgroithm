//bind返回的是一个回调函数
Function.prototype.bind = (context, ...args) => {
  const self = this
  return function (...innerArgs) {
    console.log(args, innerArgs)
    return self.apply(context, [...args, ...innerArgs])
  }
}

//bind方法 fn.bind(obj, [arg1, arg2])();
function myBind() {
  if (typeof this !== 'function') return 'error'

  let args = [...arguments].slice(1)
  fn = this //当前函数
  return function Fn() {
    return fn.apply(arguments[0], args.concat(...arguments))
  }
}

function greet(name) {
  console.log(`${name}, ${this.name}`)
}

const person = { name: 'alice' }
greet.myBind(person)('biob') // bind会改变greet方法中的this指向person
