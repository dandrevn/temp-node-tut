const fileSys = require('fs');
console.log('start');
const first = fileSys.readFileSync('./content/first.txt', 'utf-8');
const second = fileSys.readFileSync('./content/second.txt', 'utf-8');


fileSys.writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});
console.log('done with this task');
console.log('starting the next one...');
//or destructure {readFileSync} = require('fs');

//blocking - asynchronous


