var dgram = require("dgram");
var socket = dgram.createSocket("udp4");

socket.bind(65456);

console.log("> echo-server is activated");

function MyUDPHandler() {
  console.log(`> udp-echo server is listening :  ${socket.address().address}`);
}

socket.on("message", function (msg, rinfo) {
  console.log("> recieved:", rinfo.address, msg.toString());
  //msg가 client로부터 받은 메시지. 그대로 출력
});

socket.on("close", function () {
  console.log("close event");
});

socket.on("> server is listening", MyUDPHandler);
