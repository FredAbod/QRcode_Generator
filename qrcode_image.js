
const QRCode = require('qrcode');

const generateQR = async text => {
	try {
		await QRCode.toFile('./yahoo-qr-code.png', text);
	} catch(err){
		console.log(err);
	}
}

generateQR("https://github.com/FredAbod/My_First_Challenge/");