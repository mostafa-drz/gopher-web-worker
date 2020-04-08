var curNum = 0;
var stopped = true;
function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else if (window.addEventListener) {
    // window.addEventListener('load', fn);
    window.addEventListener("DOMContentLoaded", fn);
  } else {
    window.attachEvent("onreadystatechange", function () {
      if (document.readyState != "loading") fn();
    });
  }
}

ready(init);

var btnStart;
function init() {
  btnStart = document.getElementById("btn-start");
  btnStart.addEventListener("click", onStart);
}

function onStart() {
  btnStart.innerText = `Now Stop me If you can 😈`;
  btnStart.removeEventListener("click", onStart);
  btnStart.addEventListener("click", onStop);
  stopped = false;
  getNextFib();
}
function onStop() {
  btnStart.innerText = `Generate some Fibo!🤡`;
  btnStart.removeEventListener("click", onStop);
  btnStart.addEventListener("click", onStart);
  stopped = true;
}

function getNextFib() {
  if (stopped) {
    return;
  }
  var curFib = fib(curNum);
  renderResult(curFib);
  curNum++;
  setTimeout(() => {
    getNextFib();
  }, 100);
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function renderResult(number) {
  const container = document.getElementById("results-container");
  const result = document.createElement("span");
  const last = container.getElementsByClassName("result");
  result.className = "result";
  result.innerText = number;
  container.insertBefore(result, last[0]);
}
