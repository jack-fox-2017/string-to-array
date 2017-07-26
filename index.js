let stringToArray = str => {
	let result = []
	let split = str.split(',')
	for (let i = 0; i < split.length; i++) {
		result.push(split[i].split(''))
	}
	return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));