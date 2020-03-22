const http = require("http");
urls = process.argv.slice(2);
let results = [null, null, null];

urls.forEach((url, index) => {
  http.get(url, Request => {
    let str = "";
    Request.setEncoding("utf8");
    Request.on("data", data => {
      str += data;
    });
    Request.on("end", () => {
      results[index] = str;
      let count = 0;
      results.forEach(e => e != null && count++);
      if (count == results.length) {
        results.forEach(string => {
          console.log(string);
        });
      }
    });
    Request.on("error", error => {
      console.error("problem with request: " + error.message);
    });
  });
});
