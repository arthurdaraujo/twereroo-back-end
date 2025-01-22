import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1, 
    username: "pinto",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
  },
  {
    id: 2, 
    username: "surupinto",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
  },
]
const tweets = [
    {	
        username: "Miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "miau"
    },
    {	
        username: "Comedor de fezes",
        avatar: "https://static.vecteezy.com/ti/vetor-gratis/p1/14646702-pedaco-de-icone-de-bosta-estilo-cartoon-vetor.jpg",
        tweet: "cocô, fezes e bosta"
    }
]

function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
  
 
app.post("/sign-up", (req, res) => {
    const  {username, avatar}  = req.body

    if (!isValidUrl(avatar) || !username) {
        res.status(400).send("Todos os campos são obrigatórios!")
        return
    }

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

app.get("/tweets", (req, res) => {
   
    console.log(typeof tweets.length)

    if(tweets.length > 10) {
        const lastTweets = tweets.length - 10

        const last10Tweets = tweets.filter((tweet, i) => i >= lastTweets )
        console.log(last10Tweets)
        res.send(last10Tweets)
        return
    }

    res.send(tweets)
})

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body
    const user = users.find(user => user.username === username)
    
    const newTweet = {
        username,
        avatar: user.avatar,
        tweet
    }

    tweets.push(newTweet)

    console.log(tweets)
    res.send("ok")
})

app.listen(5000, () => console.log("server in port 5000"))