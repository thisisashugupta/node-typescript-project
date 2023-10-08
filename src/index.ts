const a : string = "helo man";
console.log(a);
import express from "express";
const app = express();
app.get("/", (req ,res) => {
    res.send("3000 okay bhaiya");
})
app.listen("3000", () => {
    console.log('server started at 3000 port');    
})