# 数组扁平化

## 思路

- `ES6 API flaten(Infinity)`
- 正则

  ```js
  const flatenRes = JSON.parse(`[${JSON.stringify(arr).replace(/\[|\]/g, '')}]`)
  ```

- reduce

  ```js
  function flaten(arr) {
    return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
  }

  function flaten(arr) {
    while (arr.some(item => Array.isArray(item)))
      arr = [].concat(...arr)

    return arr
  }
  ```

- 递归/合并

  ```js
  function flaten(arr) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
      if (Array.isArray(arr[index])) {
        // flaten(arr[index]) // 递归
        result = result.concat(flaten(arr[index])) // 合并
      }
      else {
        result.push(arr[index])
      }
    }
  }
  ```
