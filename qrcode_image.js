
const QRCode = require('qrcode');

const generateQR = async text => {
	try {
		await QRCode.toFile('./qr-code.png', text);
	} catch(err){
		console.log(err);
	}
}

generateQR("https://github.com/FredAbod/QRcode_Generator");