/*
Arduino Rx 	= RFID SOUT
Arduino D2 	= RFID Enable
Arduino GND = RFID GND
Arduino 5v 	= RFID VCC
*/
var	j5 = require('johnny-five'),
	board = new j5.Board(),
	rfid;

//board.on('ready', function() {
//	new j5.pin('D2').low();
//	sp.open(function () {
//		console.log('open');
//		sp.on('data', function(data) {
//			console.log('data received: ' + data);
//		});  
//		sp.write("ls\n", function(err, results) {
//			console.log('err ' + err);
//			console.log('results ' + results);
//		});  
//	});
//});
var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var sp = new SerialPort("/dev/cu.usbmodemfa141", { 
  parser: serialport.parsers.readline("\r") ,
  baudrate: 2400
}, false);

sp.open(function () {
  console.log('open');
  sp.on('data', function(data) {
    console.log('data received: ' + data);
  });  
  sp.write("ls\n", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });  
});
