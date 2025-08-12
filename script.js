function makeid(l) {
  // write your code here
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	let n = chars.length;

	for (let i = 0; i < l; i++){
		result += chars.charAt(Math.floor(Math.random() * n));
	}

	return result;
}

// Do not change the code below.

