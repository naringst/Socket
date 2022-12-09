const net = require("net");

const HOST = "127.0.0.1";
const PORT = 65456;

let pool = [];

const server = net.createServer((socket) => {
  console.log("> echo-server is activated");
  pool.push(socket);
  socket.on("data", (data) => {
    let d = JSON.parse(data);

    switch (d.type) {
      case "CONNECT":
        for (let s of pool) s.write("> " + d.content + " connected!");
        break;
      case "CHAT":
        for (let s of pool) s.write(d.content);
        break;
    }
  });
  socket.on("error", (e) => {
    const exitSocket = pool.findIndex((item) => item === socket);
    if (exitSocket > -1) pool.splice(exitSocket, 1);
    for (let s of pool)
      s.write(`> active threads are remained : ${pool.length} threads`);
  });
});

server.listen(PORT, () => {
  console.log(`> echo-server is listening ${PORT}`);
});
