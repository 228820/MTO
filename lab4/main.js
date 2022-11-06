#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

function my_printf(format_string,param){
	for(var i=0;i<format_string.length;i++){
		if((format_string.charAt(i) == '#') && (format_string.charAt(i+1) == 'g')){
			if(param) {
				const arrayWithDigits = param.split('');
				const regexp = /^[^0-9]/;
			
				if(arrayWithDigits[0] == '-') {
					const number = Number.parseInt(param) * -1;
					const arrayWithNumber = String(number).split("").map((num)=>{
						return Number(num)
					  })

					let reversedArrayWithNumber = arrayWithNumber.reverse()
					reversedArrayWithNumber.unshift('-')
					const outputString = reversedArrayWithNumber.join('')
					process.stdout.write(outputString);
				} else if(param.match(regexp))  {
					process.stdout.write('0');
				} else {
					const number = Number.parseInt(param);
					const arrayWithNumber = String(number).split("").map((num)=>{
						return Number(num)
					  })

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

