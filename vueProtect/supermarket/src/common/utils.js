//防抖操作，以降低对服务器的请求次数
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}