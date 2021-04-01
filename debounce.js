let count = 0;

const getData = () => {
  console.log(`I am calling an external API - ${count++} time`);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData();
    }, delay);
  };
};

const modifiedFunction = debounce(getData, 1000);
