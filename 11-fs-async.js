const fileSys = require('fs');
console.log('start');
//need to specify the char enconding - utf-8 etc...
fileSys.readFile('./content/first.txt','utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result; 
    fileSys.readFile('./content/second.txt','utf-8', (err,result)=> {
        if(err) {
            console.log(err);
            return;
        }
        const second = result; 
        fileSys.writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err,result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting next task...');
console.log('another task...');
