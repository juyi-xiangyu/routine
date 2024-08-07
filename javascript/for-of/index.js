/*
 * @Description: 关于for of的练习
  for...of 是用来遍历可迭代对象的（如：数组，字符串，Map，Set等）
 */
const obj = {
  name: 'juyi',
  age: 26,
  from: '贵州',
  address: '珠海'
}

// 遍历数组
// for (let value of Object.values(obj)) {
//   console.log(value);
// }

// 遍历字符
// for (let str of '123456789..') {
//   console.log(str);
// }

// 遍历Map
// const map = new Map();
// map.set('name', 'juyi');
// map.set('age', 26);
// for (let m of map) {
//   console.log(m);
// }
// console.log(Object.fromEntries(map));

// 遍历set
const set = new Set();
set.add('name');
set.add('age');
for (let s of set) {
  console.log(s);
}
console.log([...set]);

// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value)
// }

// 遍历对象，得到键
// for (let key in obj) {
//   console.log(key);
// }

