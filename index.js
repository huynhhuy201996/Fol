import foo from "./ultils.js";
import http from "node:http";

//const name = " MindX! ";

//console.log(name + foo);

const sever = http.createServer((request, response) => {
    console.log(request.method);
    switch (request.url) {
        case "/":
            response.end
                (JSON.stringify({ endpoint: request.url, method: request.method }));

            break;
        case "/hello":
            response.end(JSON.stringify("Hello world !!!!"));
            break;
        default:
            response.end(JSON.stringify("Not found"));
            break;
    }
});

sever.listen(3000);

console.log("sever running !!!")