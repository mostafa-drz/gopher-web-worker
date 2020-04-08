var curNum = 0;
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

function init() {
  const btnStart = document.getElementById("btn-start");
  btnStart.addEventListener("click", onStart);
}

function onStart() {
  getNextFib();
}

function getNextFib() {
  var curFib = fib(curNum);
  renderResult(curFib);
  curNum++;
  setTimeout(() => {
    getNextFib();
  }, 200);
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
  result.className = "result";
  result.innerText = number;
  container.appendChild(result);
}
