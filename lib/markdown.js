exports.write = function(samples, opts) {
	//console.log(JSON.stringify(samples.get(), null, 2));
	var allSamples = samples.get();
	// Keep track of hierarchies
	var previousHierarchy = [];
	// Write down every sample
	for (var i=0; i<allSamples.length; i++) {
		var sample = allSamples[i];
		// TODO Use hierarchical titles.
		//console.log('\n# ' + sample.summary);
		var currentHierarchy = sample.hierarchy;
		var titles = makeTitles(currentHierarchy, previousHierarchy);
		for (var j=0; j<titles.length; j++) {
			console.log('\n' + titles[j]);
		}
		previousHierarchy = currentHierarchy;
		var req = sample.request;
		console.log('\n`' + req.method + ' ' + req.path + '`');
		console.log('\n**Response**');
		var res = sample.response;
		console.log('\n```json');
		console.log(JSON.stringify(res, null, '\t'));
		console.log('```');
	}
}

function makeTitles(currentHierarchy, previousHierarchy) {
	var titles = [];
	var k = currentHierarchy.length;
	for (var i=0; i<k; i++) {
		if (currentHierarchy[i] != previousHierarchy[i])
		titles.push(Array(i+2).join('#') + ' ' + currentHierarchy[i]);
	}
	return titles;
}

exports.makeTitles = makeTitles;