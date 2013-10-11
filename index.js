/*
Arduino Rx 	= RFID SOUT
Arduino D2 	= RFID Enable
Arduino GND = RFID GND
Arduino 5v 	= RFID VCC
*/
var five = require('johnny-five'),
	board = new five.Board(),
	rfid;

board.on('ready', function() {
	new five.pin('D2').low();
	rfid = new five.Sensor({
    pin: 'D0',
    freq: 2400
  });
});
