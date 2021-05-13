var portArr = []; // 可使用对象，精确页面发送信息
onconnect = function (t) {
  var port = t.ports[0];
  portArr.push(port);
  port.onmessage = function (e) {
    var workerResult = "结果: " + e.data[0] * e.data[1];
    // 这里实现的所有页面共享数据
    portArr.forEach((port) => {
      port.postMessage(workerResult); //发送信息
    });
  };
};
