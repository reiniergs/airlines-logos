var Download = require('download');
var progress = require('download-status');

function getCapitalLetter() {
	var letters = [];
	for (var i = 65; i <= 90; i++){
		letters.push(String.fromCharCode(i));
	} return letters;
}

function generateNames () {
	var letters = getCapitalLetter();
	var names = [];
	for (var i = 0; i < letters.length; i++) {
		for (var j = 0; j < letters.length; j++) {
			names.push(letters[i] + letters[j]);
		}
	} return names;
}
var list = generateNames();


/*****************************
 * Download process
 *****************************/
list.forEach(function (name) {
	var download = new Download({ extract: true, strip: 1 })
    .get('http://c.fareportal.com/n/common/air/ai/' + name +'.gif')
    .dest('images/c.fareportal.com')
    .use(progress());
	download.run(function (err) {
	    if (err) console.log('File ' + name + '.gif not exist.');
	});
});
