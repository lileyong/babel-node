function * generator (max) {
	let [prev, curr] = [0, 1]
	for (;;) {
		[prev, curr] = [curr, prev + curr]
		if (prev <= max) {
			yield prev
		}
	}
}

const iterator = generator(1000)
for (var x of iterator) {
	console.log(x)
}
