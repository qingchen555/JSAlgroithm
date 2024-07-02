# 数组元素的增加

### push(): --改变原数组

数组的尾部添加一个元素， 返回更新后的数组

### unshift（）：--改变原数组

数组的开头添加一个元素， 返回更新后的数组

### arr.splice(index,howmany, item)--改变原数组

howMany=0, 表示在 index 位置增加一个元素 item
howMany>0, 表示先删除 index 位置的元素，然后再添加一个元素 item

### arr1.concat(arr2)--不会改变原数组

合并两个数组

# 数组元素的删除

### filter()：

### arr.pop():

### shift（）：--改变原来的数组

删除数组的第一个元素， 返回删除的元素

删除最后一个元素，返回删除的项目元素

# 数组元素的修改

### sort（）：--改变原来的数组

数组的排序

# 数组元素的检查

indexOf()
findIndex()
find()

### reverse（）

# 数组和字符串之间的转化

string.split(",") === array
array.join(",")=== string
array.toString()
