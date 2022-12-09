const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = net.connect({ port: 65456, host: "127.0.0.1" });

client.on("connect", () => {
  rl.question("> please enter you name : ", (name) => {
    client.write(
      JSON.stringify({
        type: "CONNECT",
        content: `${name}`,
      })
    );
    rl.on("line", function (line) {
      client.write(
        JSON.stringify({
          type: "CHAT",
          content: `> ${name} : ${line}`,
        })
      );
    });
  });
});

client.on("data", (data) => {
  console.log(data.toString());
});

client.on("close", () => {
  console.log("> quit");
});
