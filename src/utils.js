const publicKey = "45c2a79cd09e4810e2233d11f831a40e";
const privateKey = "814e9f58c1f6dcd50ac6997043d0f44bc4cf440d";
const crypto = require('crypto');

function getAuthParams() {
	let ts = parseInt(Date.now() / 1000, 10);
	let preHash = ts + privateKey + publicKey;
	let hash = crypto.createHash('md5').update(preHash).digest('hex');
	let authParams = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;

	return authParams;
}

module.exports = {
	getAuthParams
}