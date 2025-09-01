const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let users = [];


app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ success: false, message: "User already exists" });
    }
    users.push({ username, password });
    res.json({ success: true, message: "Signup successful" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`)
})