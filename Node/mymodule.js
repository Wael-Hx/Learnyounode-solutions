const fs = require("fs");
const path = require("path");

 module.exports= (dirName , extension, callback) => {
    fs.readdir(dirName, (err, list) => {
     if (err) {
     return  callback(err)}
     list = list.filter(
         file => path.extname(file) === "." + extension
       );
    callback(null , list)
   });
 };  