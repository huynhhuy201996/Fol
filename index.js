import foo from "./ultils.js";
import http from "node:http";

//const name = " MindX! ";

//console.log(name + foo);

const sever = http.createServer((request, response) => {
    response.end(JSON.stringify({ name: "Mindx", age: "100" }));
});

sever.listen(3000);

console.log("sever running !!!")