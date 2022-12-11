#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

function my_printf(format_string,param){
	for(var i=0; i<format_string.length-2; i++) {
		if((format_string.charAt(i) == '#') && (format_string.charAt(i+1) == '.') && format_string.split('').findIndex((x) => x === 'g') > -1) {
			const indexOfG = format_string.split('').slice(i).findIndex((x) => x === 'g');
			let lengthOfStringToDisplay = format_string.split('').slice(i+1, i+indexOfG);

			if(lengthOfStringToDisplay.length && lengthOfStringToDisplay[0] != ' ') {

			let arrayWithDigits = Number.parseInt(param);
			const isMinus = arrayWithDigits < 0
			arrayWithDigits = arrayWithDigits.toString().split('')
			lengthOfStringToDisplay = lengthOfStringToDisplay.join('')

			if(isMinus) {
				process.stdout.write('-')
				for(let j = arrayWithDigits.length; j <= Number(lengthOfStringToDisplay[1]); j++) {
						process.stdout.write('0')
				}

				arrayWithDigits.forEach((number) => {
					if(number != '-') {
						let numberToWrite = Number.parseInt(number) - 1;
						if(numberToWrite == -1) {
							numberToWrite = 9;
						}
	
						process.stdout.write(numberToWrite.toString())
					}
				})
			} else {
				for(let j = arrayWithDigits.length; j < Number(lengthOfStringToDisplay[1]); j++) {
						process.stdout.write('0')
				}

				arrayWithDigits.forEach((number) => {
					let numberToWrite = Number.parseInt(number) - 1;
					if(numberToWrite == -1) {
						numberToWrite = 9;
					}

					process.stdout.write(numberToWrite.toString())
				})
			}

				i++;
				i += lengthOfStringToDisplay.length
			} else {
				process.stdout.write(format_string.charAt(i));
			}
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

