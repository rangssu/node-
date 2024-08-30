const express =require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
   res.set({"Content-Type" : "text/html; charset=utf-8"}); // Content 자꾸 Context로 오타 내는데 이거 조심해야함 !
   res.end("ㅎㅇ express");
});

app.listen(port, () => {
    console.log(`START SERVER : use ${port}`);
}); 