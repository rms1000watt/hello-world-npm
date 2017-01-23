function helloWorld() {
	return "Hello World"
}

function HelloWorldNPM() {
	return "Hello World NPM"
}

// exports.helloWorld = helloWorld;
module.exports = HelloWorldNPM;
HelloWorldNPM.helloWorld = helloWorld;