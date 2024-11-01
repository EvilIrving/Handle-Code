# 数组去重

1. 两层循环法
2. 利用语法自身键不可重复性

## 利用ES6 Set去重

```JavaScript
function unique (arr) {
  returObject.prototype.hasOwnProperty.call(obj, t(arr))
  或
  return [...new Set(arr)]
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

## 利用for嵌套for，然后splice去重（ES5中最常用）

```js
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) { // 第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1)
        j--// 如果arr[i] = arr[j]时，j下标将直接跳过一个值进行比较，因此需要j--;
      }
    }
  }
  return arr
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```

## 利用indexOf去重

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  const array = []// 新建一个空数组，通过indexof索引数组项是否在新的数组中存在，不存在就加进去，存在则循环。
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i]))
      array.push(arr[i])
  }
  return array
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```

## 利用sort()

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  arr = arr.sort()
  const arrry = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1])
      arrry.push(arr[i])
  }
  return arrry
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```

## 利用includes

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  const array = []
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) { // includes 检测数组是否有某个值
      array.push(arr[i])
    }
  }
  return array
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重
```

## 利用hasOwnProperty

```js
function unique(arr) {
  const obj = {}
  return arr.filter((item, index, arr) => {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   //所有的都去重了
```

## 利用filter

```js
function unique(arr) {
  return arr.filter((item, index, arr) => {
    // 当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index
  })
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
```

## 利用递归去重

```js
function unique(arr) {
  const array = arr
  const len = array.length

  array.sort((a, b) => { // 排序后更加方便去重
    return a - b
  })

  function loop(index) {
    if (index >= 1) {
      if (array[index] === array[index - 1])
        array.splice(index, 1)

      loop(index - 1) // 递归loop，然后数组去重
    }
  }
  loop(len - 1)
  return array
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```

## 利用Map数据结构去重

```js
function arrayNonRepeatfy(arr) {
  const map = new Map()
  const array = [] // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) { // 如果有该key值
      map.set(arr[i], true)
    }
    else {
      map.set(arr[i], false) // 如果没有该key值
      array.push(arr[i])
    }
  }
  return array
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```

## 利用reduce+includes

```js
function unique(arr) {
  return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], [])
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

## 利用对象的属性不能相同的特点进行去重（这种数组去重的方法有问题，不建议用，有待改进）

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  const arrry = []
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      arrry.push(arr[i])
      obj[arr[i]] = 1
    }
    else {
      obj[arr[i]]++
    }
  }
  return arrry
}
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, Number.NaN, Number.NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
// [1, "true", 15, false, undefined, null, NaN, 0, "a", {…}]    //两个true直接去掉了，NaN和{}去重
```
