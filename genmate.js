const http = require("http");

const port = 3030;
const member = [
  {
    name: "โอ้",
    jsd_No: 15,
    genmate: "D",
  },
  {
    name: "ปาล์ม",
    jsd_No: 24,
    genmate: "D",
  },
  {
    name: "แม็ก",
    jsd_No: 21,
    genmate: "D",
  },
  {
    name: "กิ๊ฟ",
    jsd_No: 32,
    genmate: "D",
  },
  {
    name: "ต่าย",
    jsd_No: 33,
    genmate: "D",
  },
  {
    name: "แวว",
    jsd_No: 43,
    genmate: "D",
  },
];

const server = http.createServer((req, res) => {
  console.log(`${req.url} ${req.method} ${req.headers}`);
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      res.end("hello thailand welcome to Goose Goose Duck Resteruant");
    }
    if (req.url === "/user") {
      res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(member));
    }
    if (req.url === "/randomMember") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      const randomMember = Math.floor(Math.random() * member.length);

      res.end(JSON.stringify(member[randomNumber]));
    }
    if (req.url.startsWith("/user/")) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");

      const idString = req.url.split("/")[2];

      
      const targetId = parseInt(idString, 10);

     
      const foundMember = member.find((m) => m.jsd_No === targetId);


      if (foundMember) {
     
        res.writeHead(200);
        res.end(JSON.stringify(foundMember));
      } else {
        
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Member not found" }));
      }
    }
  }
});

server.listen(port, () => {
  console.log(`server is running port ${port} 🌍`);
});
