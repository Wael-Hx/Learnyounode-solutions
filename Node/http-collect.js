const http = require('http')

http.get(process.argv[2], (Request)=>{
    let str=''
    Request.setEncoding('utf8');
    Request.on('data', (data)=>{
        str+= data
    })
    Request.on('end', ()=>{
        console.log(str.length)
        console.log(str)
    })
    Request.on('error' ,(error) => {
        console.error('problem with request: '+error.message )
    })
})