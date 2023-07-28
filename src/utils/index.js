export const throttle = (fn, delay = 1000, last = false) => {
    let timer = null;
    let start = new Date();
    return function () {
      last && timer && clearTimeout(timer);
      let now = new Date();
      let context = this;
      let args = arguments;
      if (now - start >= delay) {
        fn.apply(context, args);
        start = now;
      } else {
        if (last) { // 脱离事件后执行最后一次 // 一般用于触底加载之类 // 防止重复提交不需要执行最后一次
          timer = setTimeout(() => {
            fn.apply(context, args);
          }, delay - (now - start));
        }
      }
    }
  }
  