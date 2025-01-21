import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = []

app.post("/sing-up", (req, res) => {
    const  {username, avatar}  = req.body

    if(users.find(user => user.username === username)) {
        res.status(409).send("conflict")
        return
    }

    users.push({
        id: users.length +1,
        username,
        avatar
    })

    //console.log(users);
    res.send(users);
})


app.listen(5000, () => console.log("server in port 5000"))