const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, list) => {
    if (err) { console.error(err) }
    else {
        let content = list.filter(
            file => (path.extname(file) === "." + process.argv[3])
        );
        content.forEach(file => console.log(file))
    }
});   
