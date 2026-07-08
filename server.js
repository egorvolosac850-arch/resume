const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// раздаём статику из папки public
app.use(express.static(path.join(__dirname, "public")));

// главная страница (если хотите явно)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
