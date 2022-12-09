var net = require("net");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

// createInterface() 메소드를 이용해 객체를 만들고, rl이라는 변수에 저장
const rl = readline.createInterface({ input, output });

// 서버 5000번 포트로 접속
var socket = net.connect({ port: 65456 });
socket.on("connect", function () {
  console.log("connected to server!");

  // 1000ms의 간격으로 banana hong을 서버로 요청
  setInterval(function () {
    rl.question("tcp clients input :  ", (answer) => {
      // TODO: Log the answer in a database
      console.log(`> client : ${answer}`);
      socket.write(answer);
    });

    //socket.write("banana hong!");
  }, 1000);
});

// 접속이 종료됬을때 메시지 출력
socket.on("end", function () {
  console.log("disconnected.");
});
// 에러가 발생할때 에러메시지 화면에 출력
socket.on("error", function (err) {
  console.log(err);
});
// connection에서 timeout이 발생하면 메시지 출력
socket.on("timeout", function () {
  console.log("connection timeout.");
});
