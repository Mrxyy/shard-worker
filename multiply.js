var first = document.querySelector("#number1");
var second = document.querySelector("#number2");

var result1 = document.querySelector(".result1");

if (!!window.SharedWorker) {
  var myWorker = new SharedWorker("worker.js");

  first.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
  };

  second.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
  };
  // SharedWorker.port 返回一个 MessagePort 对象，该对象可以用来进行通信和对共享 worker 进行控制。
  myWorker.port.onmessage = function (e) {
    result1.textContent = e.data;
    console.log("收到信息：", e.data);
    console.log(e);
  };
}
