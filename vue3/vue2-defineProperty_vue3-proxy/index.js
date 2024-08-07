/*
 * @Description: 针对vue2响应式原理和vue3响应式原理，输出demo以便了解
 */
// vue2
function responsiveVue2(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function getter() {
      return val;
    },
    set: function setter(newVal) {
      if (newVal === val) return;
      val = newVal;
      console.log('setter', newVal);
    }
  })
}
const data = { name: 'vue2 responsive' };
const dom = document.getElementById('btnVue2');
const contentDom = document.getElementById('contentVue2');
contentDom.innerHTML = data.name;
dom.onclick = () => {
  responsiveVue2(data, 'name', data.name);
  data.name = 'vue2 responsive new value';
  contentDom.innerHTML = data.name;
  console.log(data);
}

// vue3
function responsiveVue3(obj) { 
  return new Proxy(obj, {
    get(target, key) { 
      console.log('get', key);
      return Reflect.get(target, key);
    },
    set(target, key, value) { 
      console.log('set', key, value);
      const result = Reflect.set(target, key, value);
      return result;
    }
  })
}
let dataVue3 = { name: 'vue3 responsive' };
const btnDom = document.getElementById('btnVue3');
const contentDomVue3 = document.getElementById('contentVue3');
contentDomVue3.innerText = dataVue3.name;
btnDom.onclick = () => {
  let vue3 = responsiveVue3(dataVue3);
  vue3.name;
  vue3.name = 'vue3 responsive new value';
  contentDomVue3.innerText = dataVue3.name;
  console.log(dataVue3);
}