let http = require("http")
let fs = require("fs")

const home = "127.0.0.1"
const port = "5005"

const txt = fs.readFileSync('../frontend/index.html', 'utf-8')

function readHtml(res){
    fs.readFile('../frontend/index.html', (error, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })
}

let server = http.createServer((req, res) => {
    console.log("method is " + req.method + ", path is " + req.url)
    if(req.url.startsWith("/guyan")){
        readHtml(res)
    }else{
        res.statusCode = 404;
        res.end("404");
        // req.end("")
    }

})

server.listen(port, home, () => {
    console.log("attach one client...")
})