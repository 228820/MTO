#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

function my_printf(format_string,param){
	for(var i=0;i<format_string.length;i++){
		if((format_string.charAt(i) == '#') && (format_string.charAt(i+1) == 'g')){
			if(param) {
				const arrayWithNumber = param.split('');
			
				if(arrayWithNumber[0] == '-') {
					const arrayWithoutMinusSign = arrayWithNumber.slice(1);
					let reversedArrayWithNumber = arrayWithoutMinusSign.reverse()
					reversedArrayWithNumber.unshift('-')
					const outputString = reversedArrayWithNumber.join('')
					process.stdout.write(outputString);
				} else {
					const reversedArrayWithNumber = arrayWithNumber.reverse()
					const outputString = reversedArrayWithNumber.join('')
					process.stdout.write(outputString);
				}
			} else {
				process.stdout.write('0');
			}
			
			i++;
		}else{
			process.stdout.write(format_string.charAt(i));
		}
	}
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

