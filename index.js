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
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "1"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "2"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "3"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "4"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "5"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "6"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "7"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "8"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "9"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "10"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "11"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "12"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "13"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "14"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "15"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "16"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "17"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "18"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "19"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "20"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "21"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "22"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "23"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "24"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "25"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "26"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "27"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "28"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "29"
    },
    {	
        username: "miaujinho",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "30"
    }
   /* {	
        username: "Comedor de fezes",
        avatar: "https://static.vecteezy.com/ti/vetor-gratis/p1/14646702-pedaco-de-icone-de-bosta-estilo-cartoon-vetor.jpg",
        tweet: "cocô, fezes e bosta"
    }*/
]

function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
}

function regexToCutSpaces(str) {
    return str.toLowerCase().replace(/\s+/g, "")
}
  
 
app.post("/sign-up", (req, res) => {
    const  {username, avatar}  = req.body;

    if (!isValidUrl(avatar) || !username) {
        res.status(400).send("Todos os campos são obrigatórios!");
        return
    }

    if(users.find(user => user.username === username)) {
        res.status(409).send("conflict");
        return
    }

    users.push({
        id: users.length +1,
        username,
        avatar
    })

    //console.log(users);
    res.status(201).send(users);
})

app.get("/tweets", (req, res) => {
   
   
    const page = req.query.page;

    if (page < 1) {
        res.send(400);
        return
    }

    if(tweets.length > 10) {

        if(page && page > 1) {
            const lastTweetsForPage = tweets.length - (page*10);

            const tweetsFromPage = tweets.filter((tweet, i) => i >= lastTweetsForPage && i < (lastTweetsForPage+10))

            if (tweetsFromPage.length === 0) {
                res.sendStatus(404)
                return
            }
            
            res.send(tweetsFromPage)
            return
        }

        const lastTweets = tweets.length - 10;

        const last10Tweets = tweets.filter((tweet, i) => i >= lastTweets );
        console.log(last10Tweets);
        res.send(last10Tweets);
        return
    }

    res.send(tweets)
})

app.get("/tweets/:username", (req, res) => {

    const paramUsername = req.params.username;
    
    const tweetsFiltradosPorUsername = tweets.filter(t => regexToCutSpaces(t.username) === regexToCutSpaces(paramUsername));
    console.log(tweetsFiltradosPorUsername);

    if(tweetsFiltradosPorUsername.length ===0) {
        res.sendStatus(404);
        return
    }

    res.send(tweetsFiltradosPorUsername);
})

app.post("/tweets", (req, res) => {
    const {tweet} = req.body;
    const username = req.headers.user;

    if(!tweet || !username) {
        res.status(400).send("Todos os campos são obrigatórios!");
        return
    }

    const user = users.find(u => u.username === username);
    
    const newTweet = {
        username,
        avatar: user.avatar,
        tweet
    }

    tweets.push(newTweet);

    console.log(tweets);
    res.sendStatus(201);
})

app.listen(5000, () => console.log("server in port 5000"));