Function.prototype.myApply = (context, args) => {
  context = context || window

  context.fn = this
  return context.fn(...args)
}

function greet(name) {
  console.log(`${name}, ${this.name}`)
}

const person = { name: 'alice' }
greet.myApply(person, 'biob') // bind会改变greet方法中的this指向person
