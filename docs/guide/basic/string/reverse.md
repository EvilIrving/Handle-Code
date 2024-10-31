# 翻转字符串的单词

单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

```js
function reverseWords(str) {
  return str.trim().split(' ').filter(i => i !== '').reverse().join(' ')
  // 优化 使用正则匹配空格，可以匹配多个空格
  return str.trim().split(/\s+/).reverse().join(' ')
}
```
