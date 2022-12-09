var dgram = require("dgram");

//Client 소켓 열기
var client = dgram.createSocket("udp4");

//메시지 변수에 담기
var message = Buffer("this is multicaset message");

//bind
client.bind(65456);

client.setMulticastTTL(10);

client.send(message, 0, message.length, 65456, "127.0.0.1");

client.close();

//multicast message 송신
