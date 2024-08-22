const file = require('fs');


// Used to Create new file and add content syncronously - blocking request
//file.writeFileSync('./test.txt','Hello World');

// Used to Create new file and add content ayscronously(difference is u need to pass callback function) - non blocking request
//file.writeFile('./test.txt','Hello World 1',(err) =>{});


// Used to read file and retrive content ayscronously(difference is u need to pass callback function and return type is void)
file.readFile('./contacts.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
});

// Used to read file and retrive content ayscronously(difference is u need to pass callback function)
const readFile = file.readFileSync('./contacts.txt','utf-8');
console.log(readFile);

//Used to add content to existing file syncronously
file.appendFileSync('./contacts.txt',new Date().getDate().toLocaleString());

//Used to copy content to new file syncronously
file.cpSync('./contacts.txt','./copy.txt');

//delete file 
file.unlinkSync('./copy.txt');