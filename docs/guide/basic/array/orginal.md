# Array 原生方法

## Array.map | filter |  forEach | every | some | find  | findIndex | join
<!--  -->

```javascript
Array.prototype._map = function(Fn) {
    if (typeof Fn !== 'function') return
    const array = this
    const newArray = new Array(array.length)
    for (let i=0; i<array.length; i++) {
        // map
        let result = Fn.call(arguments[1], array[i], i, array)
        newArray[i] = result
        // filter
        result && newArray.push(array[i])
    }
    return newArray

     // join 参数为 s = ','
    let str = ''
    for (let i=0; i<array.length; i++) {
         // forEach
         Fn.call(arguments[1], array[i], i, array);

        // every
        if (!Fn.call(arguments[1], array[i], i, array)) return false

        // some 可优化为使用break打断循环
        if (Fn.call(arguments[1], array[i], i, array)) return true

        // find
        if (Fn.call(arguments[1], array[i], i, array)) return array[i]

        // findIndex
        if (Fn.call(arguments[1], array[i], i, array)) return i

        // join
        str = i === array.length - 1 ?  str + array[i] :  str + array[i] + s
    }
     // every
    return true
     // some
    return false
    // join
    return str
}
```

## Array.reduce

实现一个仿Array.reduce功能的"Array._reduce"函数，并且需要将”_reduce“函数挂载在Array的原型对象上。根据Array.reduce的特点有：

接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
可以接收一个初始值，当没有初始值时，默认初始值为数组中的第一项

```javascript
Array.prototype._reduce = function (callback, initValue) {
    // 判断是否是数组调用
    if (!Array.isArray(this)) throw new TypeError('not a array')
    // 数组为空 且无初始值
    if (this.length === 0 && !initValue) throw new TypeError('Reduce of empty array with no initial value')

    let arr = this, res = null
    // 若有初始值则赋值，无则取数组第一个值
    initValue ? res = initValue : res = arr[0]

    for (let i = initValue ? 0 : 1; i < arr.length; i++) {
        res = callback(res, arr[i], i, arr) // 覆盖上次计算结果
    }
    return res
}
```

## Array.pop | push | shift | unshift

```javascript
Array.prototype._pop = function () {
  return this.splice(this.length - 1, 1)[0]
}

Array.prototype._push = function (...args) {
  return this.splice(this.length, 0, ...args)
}

Array.prototype._shift = function () {
  return this.splice(0, 1)[0]
}

Array.prototype._unshift = function (...args) {
  return this.splice(0, 0, ...args)
}
```
