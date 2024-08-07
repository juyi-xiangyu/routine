/*
 * @Description: Promise
 关于Promise的链式调用
 Promise 链式调用的原理在于每个 then 方法都会返回一个新的 Promise 对象，这个新的 Promise 对象的状态取决于 then 方法中回调函数的执行结果。
 具体来说：
    返回值是一个值：如果 then 方法中的回调函数返回一个值（非 Promise 对象），这个值会被用来解析新的 Promise。
    返回值是一个 Promise：如果 then 方法中的回调函数返回一个 Promise 对象，新的 Promise 会跟随这个返回的 Promise，直到它被解析或拒绝。
    抛出错误：如果 then 方法中的回调函数抛出一个错误，新的 Promise 会被拒绝，并且错误会被传递到链中的下一个 catch 方法。
    
    如果没有返回一个值，链式调用依旧会生效，因为当没有返回值的时候默认返回的是undefined
 *
 */
function promiseFun() { 
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        resolve('success')
      } else {
        reject('error')
      }
    }, 500)
  })
}
promiseFun().then((res) => {
  console.log('res', res);
}).catch((err) => {
  console.log('err', err);
}).then((res) => {
  console.log('second', res);
})