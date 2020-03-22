const myMod =require('./mymodule');

const callback=(err,data)=>{
    err ? console.error(err) : data.forEach(file => console.log(file))
}

myMod(process.argv[2],process.argv[3], callback)