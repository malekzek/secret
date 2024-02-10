import express from "express"
import bodyParser from "body-parser";

const app=express();
const port=3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded ({extended :true}));
app.get("/" , (req,res) =>{
    res.render("index.html");
});
app.post("/check", (req,res) =>{
    const userKey=req.body.password;
    const password="Gaming";
    if(userKey === password){
        res.send("<h1>I prefer storytelling games than online games</h1>");
    }
    else{
        res.send("<h1>Try again</h1>");
    }
});

app.listen(port , () =>{
    console.log(`listening on port ${port}`);
});