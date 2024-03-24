const fs = require( 'fs' );
const path = require('path');

// mkdir - For creating New Folder
// rmdir - For  deleting a folder


// For Folder Creating

// fs.mkdir(path.join(__filename,"/index"),{},(err)=>{
//     if (err) throw err
// })

const user = "LALLU"

// fs.writeFile(path.join(__dirname,"/index","text.txt"),`\nuser name is ${user}`,(err)=>{
//     if (err) throw err
// })

// AppendFile Asyc

// fs.appendFile(path.join(__dirname,"/index","text.txt"),`\nuser name is ${user}`,(err)=>{
//     if (err) throw err
// })

// AppendFile  Sync

// fs.appendFileSync(path.join(__dirname, "/index", "text.txt"), `\nAppending text using sync function : User Name is ${user}`)

// Asynchronous  read file 

// fs.readFile("index/text.txt",'',(err,data)=> {
//     if(err) throw err;
//     console.log(`this file contain : \n${data}`);    
// });

// Synchronous read file

// const data = fs.readFileSync("index/text.txt",'utf8')
// console.log(data);