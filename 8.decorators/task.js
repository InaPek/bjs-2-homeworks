//Задача № 1: Усовершенствовать кеширующий декоратор
function cachingDecoratorNew(func) {
let cache = [];
const maxCacheValuesCount = 5;
return (...args) => {
const hash = md5(args);
let objectInCache = cache.find((item) => item.hash === hash);
if (objectInCache) {
console.log("Из кеша: " + objectInCache.value);
return "Из кеша: " + objectInCache.value;
}
let result = func(...args);
cache.push({hash: hash, value: result});
if (cache.length > maxCacheValuesCount) {
cache.shift();
}
console.log("Вычисляем: " + result);
return "Вычисляем: " + result;
}
}

/*Решение эксперта
const md5 = require('./js-md5.js');
function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    const objectFromCache = cache.find(object => object.hash === hash);
    if (objectFromCache){
      console.log("Из кеша: ", objectFromCache.value);
      return "Из кеша: " + objectFromCache.value;
    }

    const value = func(...args);
    cache.push({hash, value})
    if(cache.length > maxCacheValuesCount) {
      cache.shift();
    }

    console.log("Вычисляем: ", value);
    return "Вычисляем: " + value;
  };
}

module.exports = {
  cachingDecoratorNew
}*/


//Задача № 2: Debounce декоратор с моментальным вызовом и подсчётом количества вызовов
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    
    function wrapper(...args) {
        wrapper.allCount++;

        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        } else {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);
    }

    wrapper.count = 0;
    wrapper.allCount = 0;

    return wrapper;
}

/*Решение эксперта
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if(timeoutId === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }

  return wrapper;
}

module.exports = {
  debounceDecoratorNew, 
}*/