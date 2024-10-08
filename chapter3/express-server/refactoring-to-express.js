const url = require("url");
const express =require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("익스프레스로 라우터 리펙토링 하기.");
});

app.get("/", (_, res) => res.end("home"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res){
    const user = url.parse(req.url, true).query;

    res.json('[user] name : ${user.name}, age : ${user.age}');
}
function feed(_, res){
    res.json(`
        <ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>       
        </ul>
        `);
}