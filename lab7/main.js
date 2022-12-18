#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

function my_printf(format_string,param){
	for(var i=0; i<format_string.length-2; i++) {
		if((format_string.charAt(i) == '#') && (format_string.charAt(i+1) == 'j')) {
			const num = parseInt(param)
			const hexStr = (num).toString(16)
			const hexArr = Array.from(hexStr)

			for(let j = 0; j<hexArr.length; j++) {
				process.stdout.write(hexArr[j]);
			}
			i++;
		} else {
			process.stdout.write(format_string.charAt(i));
		}
	}
	process.stdout.write(format_string.charAt(format_string.length-2));
	process.stdout.write(format_string.charAt(format_string.length-1));
	console.log("");
}

process.stdin.on('data', function(chunk) {
	lines = chunk.split("\n");

	lines[0] = lingeringLine + lines[0];
	lingeringLine = lines.pop();
	for(var i=0;i<lines.length;i++){
		my_printf(lines[i],lines[i+1])
		i++;
	}

});

