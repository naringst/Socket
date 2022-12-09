// const HOST = "127.0.0.1";
// const PORT = 65456;

// var dgram = require("dgram");

// //udp 서버 만들기
// var server = dgram.createSocket("udp4");
// console.log("> echo-server is activated");

// //bind
// server.bind(PORT, HOST);

// //client로부터 메시지 받기
// server.on("message", function (msg) {
//   process.stdout.write("UDP String: " + msg + "\n");

//   // Exiting process
//   process.exit();
// });

// server.addMembership("127.0.0.1");

// //multicast message 수신
var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
  console.log(
    "server got: " + msg + " from " + rinfo.address + ":" + rinfo.port
  );
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);
});

server.bind(65456);
