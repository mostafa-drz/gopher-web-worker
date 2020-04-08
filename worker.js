var curNum = 0;

self.onmessage = onMessage;

function onMessage() {
  getNextFib();
}

function getNextFib() {
  var curFib = fib(curNum);
  self.postMessage(curFib);
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
