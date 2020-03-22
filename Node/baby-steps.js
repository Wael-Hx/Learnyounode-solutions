let answer = process.argv.reduce((a,b,index,array)=> index>1 && a+ Number(b) ,0);
console.log(answer)