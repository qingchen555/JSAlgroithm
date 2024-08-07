function dateFormate(dateInput, format) {
  var day = dateInput.getDate()
  var month = dateInput.getMonth() + 1
  var year = dateInput.getFullYear()
  format = format.replace(/yyyy/, year)
  format = format.replace(/MM/, month)
  format = format.replace(/dd/, day)
  console.log(format)
  return format
}

dateFormate(new Date('2024-08-06'), 'yyyy年MM月dd日') //MM必须大写
