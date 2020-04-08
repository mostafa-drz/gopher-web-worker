var curNum = 0;
var worker;
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
  worker = new Worker("worker.js");
  worker.onmessage = onMessage;
  worker.postMessage("whatever!");
}
function onStop() {
  btnStart.innerText = `Generate some Fibo!🤡`;
  btnStart.removeEventListener("click", onStop);
  btnStart.addEventListener("click", onStart);
  worker.terminate();
}

function onMessage({ data }) {
  renderResult(data);
}
function renderResult(number) {
  const container = document.getElementById("results-container");
  const result = document.createElement("span");
  const lastElement = container.getElementsByClassName("result");
  result.className = "result";
  result.innerText = number;
  container.insertBefore(result, lastElement[0]);
}
